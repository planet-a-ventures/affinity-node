/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-a-specific-list) for more info.
 */
export const listsUrl = (list_id?: number) =>
    list_id ? `/lists/${encodeURIComponent(list_id)}` : '/lists'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-a-specific-list-entry) for more info.
 */
export const listEntriesUrl = (list_id: number, list_entry_id?: number) =>
    listsUrl(list_id) + (
        list_entry_id
            ? `/list-entries/${encodeURIComponent(list_entry_id)}`
            : '/list-entries'
    )

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#rate-limit) for more info.
 */
export const rateLimitUrl = () => '/rate-limit'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#whoami) for more info.
 */
export const whoAmIUrl = () => '/auth/whoami'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#fields) for more info.
 */
export const fieldsUrl = (field_id?: number) =>
    field_id ? `/fields/${encodeURIComponent(field_id)}` : '/fields'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#field-values) for more info.
 */
export const fieldValuesUrl = (field_value_id?: number) => {
    return field_value_id
        ? `/field-values/${encodeURIComponent(field_value_id)}`
        : '/field-values'
}

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-field-values-changes) for more info.
 */
export const fieldValueChangesUrl = () => '/field-value-changes'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#organizations) for more info.
 */
export const organizationsUrl = (organization_id?: number | 'fields') => {
    return organization_id
        ? `/organizations/${encodeURIComponent(organization_id)}`
        : '/organizations'
}

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-global-organizations-fields) for more info.
 */
export const organizationFieldsUrl = () => organizationsUrl('fields')

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#persons) for more info.
 */
export const personsUrl = (person_id?: number | 'fields') => {
    return person_id ? `/persons/${encodeURIComponent(person_id)}` : '/persons'
}

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-global-person-fields) for more info.
 */
export const personFieldsUrl = () => personsUrl('fields')

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#entity-files) for more info.
 */
export const entityFilesUrl = (
    entity_file_id?: number,
    is_download: boolean = false,
) => {
    return entity_file_id
        ? `/entity-files` + (is_download ? '/download' : '') +
            `/${encodeURIComponent(entity_file_id)}`
        : '/entity-files'
}
