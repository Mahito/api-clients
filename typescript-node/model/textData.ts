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

/**
* Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export class TextData {
    /**
    * The actual text (content) that appears in the text item.
    */
    'content': string = 'Hello';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TextData.attributeTypeMap;
    }
}
