/**
 * Platform Tags
 * SCIM V1 API implemented by Miro
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SelfLink } from './selfLink';

/**
* Contains information about the parent frame for the item.
*/
export class ParentLinksEnvelope {
    /**
    * Unique identifier (ID) of the parent frame for the item.
    */
    'id'?: number;
    'links'?: SelfLink;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        }    ];

    static getAttributeTypeMap() {
        return ParentLinksEnvelope.attributeTypeMap;
    }
}
