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
import { RelativeOffset } from './relativeOffset';

export class ItemConnectionCreationData {
    /**
    * Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.
    */
    'id'?: string;
    'position'?: RelativeOffset;
    /**
    * The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default. Possible values: `auto`, `top`, `right`, `bottom`, `left`
    */
    'snapTo'?: ItemConnectionCreationData.SnapToEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "RelativeOffset"
        },
        {
            "name": "snapTo",
            "baseName": "snapTo",
            "type": "ItemConnectionCreationData.SnapToEnum"
        }    ];

    static getAttributeTypeMap() {
        return ItemConnectionCreationData.attributeTypeMap;
    }
}

export namespace ItemConnectionCreationData {
    export enum SnapToEnum {
        Auto = <any> 'auto',
        Top = <any> 'top',
        Right = <any> 'right',
        Bottom = <any> 'bottom',
        Left = <any> 'left'
    }
}