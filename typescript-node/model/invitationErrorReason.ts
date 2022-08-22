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

import { InvitationErrorReasonStackTraceInner } from './invitationErrorReasonStackTraceInner';
import { InvitationErrorReasonSuppressedInner } from './invitationErrorReasonSuppressedInner';

export class InvitationErrorReason {
    'localizedMessage'?: string;
    'message'?: string;
    'stackTrace'?: Array<InvitationErrorReasonStackTraceInner>;
    'suppressed'?: Array<InvitationErrorReasonSuppressedInner>;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "localizedMessage",
            "baseName": "localizedMessage",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "stackTrace",
            "baseName": "stackTrace",
            "type": "Array<InvitationErrorReasonStackTraceInner>"
        },
        {
            "name": "suppressed",
            "baseName": "suppressed",
            "type": "Array<InvitationErrorReasonSuppressedInner>"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return InvitationErrorReason.attributeTypeMap;
    }
}
