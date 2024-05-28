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
