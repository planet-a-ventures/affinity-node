/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-a-specific-list) for more info.
 */
export const listsUrl = (listId?: number) =>
    listId ? `/lists/${encodeURIComponent(listId)}` : '/lists'

/**
 * @hidden
 * See [here](https://api-docs.affinity.co/#get-a-specific-list-entry) for more info.
 */
export const listEntriesUrl = (listId: number, listEntryId?: number) =>
    listsUrl(listId) + (
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
