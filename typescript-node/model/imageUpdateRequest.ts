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
import { FixedRatioGeometry } from './fixedRatioGeometry';
import { ImageUrlDataChanges } from './imageUrlDataChanges';
import { Parent } from './parent';
import { PositionChange } from './positionChange';

export class ImageUpdateRequest {
    'data'?: ImageUrlDataChanges;
    'position'?: PositionChange;
    'geometry'?: FixedRatioGeometry;
    'parent'?: Parent;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ImageUrlDataChanges"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "PositionChange"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "FixedRatioGeometry"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "Parent"
        }    ];

    static getAttributeTypeMap() {
        return ImageUpdateRequest.attributeTypeMap;
    }
}
