/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import fetch, {Response} from 'node-fetch';
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { GetBoards400Response } from '../model/getBoards400Response';
import { TextCreateRequest } from '../model/textCreateRequest';
import { TextItem } from '../model/textItem';
import { TextUpdateRequest } from '../model/textUpdateRequest';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface TextsApiMethods {
    /**
     * Adds a text item to a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Create text item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to create the item.
     * @param textCreateRequest 
     */
    createTextItem(boardId: string, textCreateRequest: TextCreateRequest, 
): Promise<{ response: Response; body: TextItem;  }>
    /**
     * Deletes a text item from the board<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
     * @summary Delete text item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete the item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to delete.
     */
    deleteTextItem(boardId: string, itemId: string, 
): Promise<{ response: Response; body: object;  }>
    /**
     * Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
     * @summary Get text item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a specific item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
     */
    getTextItem(boardId: string, itemId: string, 
): Promise<{ response: Response; body: TextItem;  }>
    /**
     * Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Update text item
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to update the item.
     * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to update.
     * @param textUpdateRequest 
     */
    updateTextItem(boardId: string, itemId: string, textUpdateRequest: TextUpdateRequest, 
): Promise<{ response: Response; body: TextItem;  }>
}

export function TextsApi (accessToken: string|(() => Promise<string>), basePath: string = defaultBasePath, logger?: (...thing: any) => void): TextsApiMethods {
    return {

        /*
        */

        createTextItem: async function (boardId: string, textCreateRequest: TextCreateRequest, 
) : Promise<{ response: Response; body: TextItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/texts'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling createTextItem.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(textCreateRequest, "TextCreateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (typeof logger === 'function' && bodyAsJson) logger('BODY', bodyAsJson)

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "TextItem");

            return({response, body})
        },

        /*
        */

        deleteTextItem: async function (boardId: string, itemId: string, 
) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['*/*', 'application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling deleteTextItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling deleteTextItem.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (typeof logger === 'function' && bodyAsJson) logger('BODY', bodyAsJson)

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "object");

            return({response, body})
        },

        /*
        */

        getTextItem: async function (boardId: string, itemId: string, 
) : Promise<{ response: Response; body: TextItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling getTextItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling getTextItem.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (typeof logger === 'function' && bodyAsJson) logger('BODY', bodyAsJson)

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "TextItem");

            return({response, body})
        },

        /*
        */

        updateTextItem: async function (boardId: string, itemId: string, textUpdateRequest: TextUpdateRequest, 
) : Promise<{ response: Response; body: TextItem;  }> {
            const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling updateTextItem.');
            }

            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling updateTextItem.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(textUpdateRequest, "TextUpdateRequest"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (typeof logger === 'function' && bodyAsJson) logger('BODY', bodyAsJson)

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "TextItem");

            return({response, body})
        },
    }
}
