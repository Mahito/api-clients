import assert from 'assert'
import fs from 'fs'
import fetch from 'node-fetch'
import {HttpError, MiroApi, MiroEndpoints} from './api'
import {Api as Models} from './highlevel'


const defaultBasePath = 'https://api.miro.com'

export class Miro {
    clientId: string;
    clientSecret: string;
    redirectUrl: string;
    storage: Storage;
    teamId?: string;

    /**
    * Initializes the Miro API with the given client id and client secret
    * All options are optional and will fallback to environment variables
    * clientId: MIRO_CLIENT_ID
    * clientSecret: MIRO_CLIENT_SECRET
    * redirectUrl: MIRO_REDIRECT_URL
    */
    constructor(options: Opts = defaultOpts) {
        const opts = Object.assign({}, defaultOpts, options)
        this.clientId = opts.clientId || '',
        this.clientSecret = opts.clientSecret || '',
        this.redirectUrl = opts.redirectUrl || '',
        this.storage = opts.storage || defaultStorage
        this.teamId = opts.teamId

        assert(this.clientId, 'MIRO_CLIENT_ID is required')
        assert(this.clientSecret, 'MIRO_CLIENT_SECRET is required')
        assert(this.redirectUrl, 'MIRO_REDIRECT_URL is required')
        if (this.storage === defaultStorage) {
            console.warn('Default storage is not recommended, consider using a custom storage implementation')
        }
    }

    /**
    * Returns an instance of the Miro API for the given user id
    */
    api(userId: ExternalUserId): MiroEndpoints {
        return MiroApi(async () => await this.getAccessToken(userId))
    }

    /**
    * Returns an instance of the highlevel Miro API for the given user id
    */
    highlevel(userId: ExternalUserId): Models {
        return new Models(MiroApi(async () => await this.getAccessToken(userId)), [], {})
    }

    /**
    * Checks if the given user id already has token stored
    */
    async isAuthorized(userId: ExternalUserId): Promise<boolean> {
        return !!(await this.storage.read(userId))
    }

    /**
    * Returns a URL that user should be redirected to in order to authorize the application
    */
    getAuthUrl(state?: string): string {
        const authorizeUrl = new URL('/oauth/authorize', defaultBasePath.replace('api.', ''))
        authorizeUrl.search = new URLSearchParams({
            response_type: 'code',
            client_id: this.clientId,
            redirect_uri: this.redirectUrl,
            team_id: this.teamId || '',
            state: state || ''
        }).toString()
        return authorizeUrl.toString()
    }

    /**
    * Parse request to extract authorization code and get access token
    *
    * @see {@link index.Miro.exchangeCodeForAccessToken}
    */
    async handleAuthorizationCodeRequest(userId: ExternalUserId, ...args: MiddlewareArgs): Promise<void> {
        const url = `http://${args[0].headers.host}${args[0].url}`
        await this.exchangeCodeForAccessToken(userId, url)
    }

    /**
    * Exchanges the authorization code for an access token by calling the token endpoint
    * It will store the token information in storage for later reuse
    */
    async exchangeCodeForAccessToken(userId: ExternalUserId, urlOrCode: string): Promise<string> {
        let code = urlOrCode
        try {
            const url = new URL(urlOrCode)
            code = url.searchParams.get('code') || ''
        } catch (err) {
            // can't parse url, assume code is passed as argument
        }
        if (!code) {
            throw new Error('No code provided')
        }
        return await this.getToken(userId, {
            code: code,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUrl,
            grant_type: 'authorization_code'
        })
    }

    private async getToken(userId: ExternalUserId, params: {[key: string]: string}): Promise<string> {

        const tokenUrl = new URL('/v1/oauth/token', defaultBasePath)
        tokenUrl.search = new URLSearchParams(params).toString()
        const response = await fetch(tokenUrl.toString(), {method: 'post'})

        if (!response.ok) {
            throw new HttpError(response, {}, response.status)
        }

        const body: TokenResponse = await response.json()

        this.storage.write(userId, {
            accessToken: body.access_token,
            refreshToken: body.refresh_token,
            tokenExpiresAt: body.expires_in ? new Date(Date.now() + (body.expires_in - 120) * 1000).toISOString() : undefined,
            userId: body.user_id
        })

        return body.access_token
    }

    private async refreshAccessToken(userId: ExternalUserId, refresh_token: string): Promise<string> {
        return await this.getToken(userId, {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refresh_token,
            grant_type: 'refresh_token'
        })
    }

    private async getAccessToken (userId: ExternalUserId): Promise<string> {
        const state = await this.storage.read(userId)
        if (!state || !state.accessToken) {
            throw new Error('No access token stored, run exchangeCodeForAccessToken() first')
        }
        if (state.refreshToken && state.tokenExpiresAt && new Date(state.tokenExpiresAt) < new Date()) {
            return this.refreshAccessToken(userId, state.refreshToken)
        }

        return state.accessToken
    }
}

export type ExternalUserId = string|number

export interface State {
    userId: string,
    accessToken: string,
    refreshToken?: string,
    tokenExpiresAt?: string,
}

export type Awaitable<T> = Promise<T> | T

export interface Storage {
    read(userId: ExternalUserId): Promise<State|undefined>
    write(userId: ExternalUserId, state: State): Awaitable<void>
}

interface TokenResponse {
    user_id: string,
    scope: string,
    expires_in?: number,
    team_id: string,
    access_token: string,
    refresh_token?: string,
    token_type: 'bearer'
}

type MiddlewareArgs = [req: {url?: string|undefined, headers: {host?: string|undefined}}, ...rest: any]

const defaultStorage = {
    async read(userId: ExternalUserId) {
        try {
            return JSON.parse(fs.readFileSync(`./state-${userId}.json`, 'utf8'))
        } catch(err) {
            return undefined
        }
    },
    write(userId: ExternalUserId, state: State) {
        fs.writeFileSync(`./state-${userId}.json`, JSON.stringify(state))
    }
}

export interface Opts {
    clientId?: string,
    clientSecret?: string,
    redirectUrl?: string,
    storage?: Storage,
    teamId?: string
}

const defaultOpts: Opts = {
    clientId: process.env.MIRO_CLIENT_ID,
    clientSecret: process.env.MIRO_CLIENT_SECRET,
    redirectUrl: process.env.MIRO_REDIRECT_URL,
    storage: defaultStorage,
}

export default Miro
export {MiroApi, MiroEndpoints} from './api'
