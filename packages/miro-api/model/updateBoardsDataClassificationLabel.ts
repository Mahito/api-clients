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

export class UpdateBoardsDataClassificationLabel {
  /**
   * Number of boards updated in the team
   */
  'numberUpdatedBoards'?: number
  /**
   * Type of the object returned.
   */
  'type'?: string = 'boards-data-classification-label-changed'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'numberUpdatedBoards',
      baseName: 'numberUpdatedBoards',
      type: 'number',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return UpdateBoardsDataClassificationLabel.attributeTypeMap
  }
}
