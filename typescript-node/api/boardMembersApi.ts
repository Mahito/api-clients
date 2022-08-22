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
import { BoardMemberChanges } from '../model/boardMemberChanges';
import { BoardMemberWithLinks } from '../model/boardMemberWithLinks';
import { BoardMembersInvite } from '../model/boardMembersInvite';
import { BoardMembersPagedResponse } from '../model/boardMembersPagedResponse';
import { GetBoards400Response } from '../model/getBoards400Response';
import { InvitationResult } from '../model/invitationResult';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface BoardMembersApiMethods {
    /**
     * Retrieves a pageable list of members for a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
     * @summary Get all board members
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) to which the board member belongs.
     * @param limit 
     * @param offset 
     */
    getBoardMembers(boardId: string, 
 query?: { 

limit?: string,
 


offset?: string,
 },  
): Promise<{ response: Response; body: BoardMembersPagedResponse;  }>
    /**
     * Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
     * @summary Get specific board member
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) to which the board member belongs.
     * @param boardMemberId Unique identifier (ID) of the board member whose role you want to retrieve.
     */
    getSpecificBoardMember(boardId: string, boardMemberId: string, 
): Promise<{ response: Response; body: BoardMemberWithLinks;  }>
    /**
     * Removes a board member from a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Remove board member
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete an item.
     * @param boardMemberId Unique identifier (ID) of the board member whose role you want to delete.
     */
    removeBoardMember(boardId: string, boardMemberId: string, 
): Promise<{ response: Response; body: object;  }>
    /**
     * Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board\'s [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy), there might be various scenarios where membership in the team is required in order to share the board with a user. For more information on sharing policy and different scenarios, see [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy).<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
     * @summary Share board
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) to which the board member belongs.
     * @param boardMembersInvite 
     */
    shareBoard(boardId: string, boardMembersInvite: BoardMembersInvite, 
): Promise<{ response: Response; body: InvitationResult;  }>
    /**
     * Updates the role of a board member.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Update board member
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) for which you want to update the role of the board member.
     * @param boardMemberId Unique identifier (ID) of the board member whose role you want to update.
     * @param boardMemberChanges 
     */
    updateBoardMember(boardId: string, boardMemberId: string, boardMemberChanges: BoardMemberChanges, 
): Promise<{ response: Response; body: BoardMemberWithLinks;  }>
}

export function BoardMembersApi (accessToken: string|(() => Promise<string>), basePath: string = defaultBasePath, logger?: (...thing: any) => void): BoardMembersApiMethods {
    return {

        /*
        */

        getBoardMembers: async function (boardId: string, 
 query?: { 

limit?: string,
 


offset?: string,
 },  
) : Promise<{ response: Response; body: BoardMembersPagedResponse;  }> {
            const localVarPath = '/v2/boards/{board_id}/members'
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
                throw new Error('Required parameter boardId was null or undefined when calling getBoardMembers.');
            }




            if (query?.limit !== undefined) {
                localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, "string"));
            }



            if (query?.offset !== undefined) {
                localVarQueryParameters.append('offset', ObjectSerializer.serialize(query?.offset, "string"));
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "BoardMembersPagedResponse");

            return({response, body})
        },

        /*
        */

        getSpecificBoardMember: async function (boardId: string, boardMemberId: string, 
) : Promise<{ response: Response; body: BoardMemberWithLinks;  }> {
            const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)));
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
                throw new Error('Required parameter boardId was null or undefined when calling getSpecificBoardMember.');
            }

            // verify required parameter 'boardMemberId' is not null or undefined
            if (boardMemberId === null || boardMemberId === undefined) {
                throw new Error('Required parameter boardMemberId was null or undefined when calling getSpecificBoardMember.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "BoardMemberWithLinks");

            return({response, body})
        },

        /*
        */

        removeBoardMember: async function (boardId: string, boardMemberId: string, 
) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)));
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
                throw new Error('Required parameter boardId was null or undefined when calling removeBoardMember.');
            }

            // verify required parameter 'boardMemberId' is not null or undefined
            if (boardMemberId === null || boardMemberId === undefined) {
                throw new Error('Required parameter boardMemberId was null or undefined when calling removeBoardMember.');
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

        shareBoard: async function (boardId: string, boardMembersInvite: BoardMembersInvite, 
) : Promise<{ response: Response; body: InvitationResult;  }> {
            const localVarPath = '/v2/boards/{board_id}/members'
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
                throw new Error('Required parameter boardId was null or undefined when calling shareBoard.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(boardMembersInvite, "BoardMembersInvite"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "InvitationResult");

            return({response, body})
        },

        /*
        */

        updateBoardMember: async function (boardId: string, boardMemberId: string, boardMemberChanges: BoardMemberChanges, 
) : Promise<{ response: Response; body: BoardMemberWithLinks;  }> {
            const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
                .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)));
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
                throw new Error('Required parameter boardId was null or undefined when calling updateBoardMember.');
            }

            // verify required parameter 'boardMemberId' is not null or undefined
            if (boardMemberId === null || boardMemberId === undefined) {
                throw new Error('Required parameter boardMemberId was null or undefined when calling updateBoardMember.');
            }



            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${typeof accessToken === 'function' ? await accessToken() : accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(boardMemberChanges, "BoardMemberChanges"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "BoardMemberWithLinks");

            return({response, body})
        },
    }
}
