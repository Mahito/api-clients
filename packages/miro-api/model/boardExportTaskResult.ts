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

/**
 * @internal
 * Board export task results.
 */
export class BoardExportTaskResult {
  /**
   * Unique identifier of the board.
   */
  'boardId': string
  /**
   * Contains the description of the error that occurred during a board export task.
   */
  'errorMessage'?: string
  /**
   * URL of the S3 bucket that contains the exported files.
   */
  'exportLink'?: string
  /**
   * Indicates the status of the individual board export task. Possible values: `SUCCESS`: the board export task was completed successfully and the results are available. `ERROR`: the board export task encountered an error and failed to complete. The `errorMessage` field provides more information on the error.
   */
  'status': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'boardId',
      baseName: 'boardId',
      type: 'string',
    },
    {
      name: 'errorMessage',
      baseName: 'errorMessage',
      type: 'string',
    },
    {
      name: 'exportLink',
      baseName: 'exportLink',
      type: 'string',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardExportTaskResult.attributeTypeMap
  }
}
