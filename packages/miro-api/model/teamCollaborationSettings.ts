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
 * Team collaboration settings
 */
export class TeamCollaborationSettings {
  /**
   *  * \"enabled\": Enable Co-owner role on boards and projects * \"disabled\": Disabled Co-owner role on boards and projects
   */
  'coOwnerRole'?:
    | string
    | (typeof TeamCollaborationSettings.CoOwnerRoleEnum)[keyof typeof TeamCollaborationSettings.CoOwnerRoleEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'coOwnerRole',
      baseName: 'coOwnerRole',
      type: 'TeamCollaborationSettings.CoOwnerRoleEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamCollaborationSettings.attributeTypeMap
  }
}

export namespace TeamCollaborationSettings {
  export const CoOwnerRoleEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled',
  } as const
}
