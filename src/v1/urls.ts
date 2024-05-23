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
export const listEntriesUrl = (list_id: number, listEntryId?: number) =>
    listsUrl(list_id) + (
        listEntryId
            ? `/list-entries/${encodeURIComponent(listEntryId)}`
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
