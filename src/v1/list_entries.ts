import type { AxiosInstance } from 'axios'
import type { GetQuery, ListType } from './lists.ts'
import { listEntriesUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'

export type Entity = {
    type: ListType
    first_name: string
    last_name: string
    primary_email: string
    emails: string[]
}

export type ListEntryResponseRaw = {
    /**
     * The unique identifier of the list entry object.
     */
    id: number
    /**
     * The unique identifier of the list on which the list entry resides.
     */
    list_id: number
    /**
     * The unique identifier of the user who created the list entry. If you create a list entry through the API, the user corresponding to the API token will be the creator by default.
     */
    creator_id: number
    /**
     * The unique identifier of the entity corresponding to the list entry.
     */
    entity_id: number
    /**
     * Object containing entity-specific details like name, email address, domain etc. for the entity corresponding to entity_id.
     */
    entity: Entity
    /**
     * The time when the list entry was created.
     */
    created_at: string
}

export type PagedListEntryResponseRaw = {
    list_entries: ListEntryResponseRaw[]
    /**
     * The absence of a next_page_token indicates that all the records have been fetched, though its presence does not necessarily indicate that there are more resources to be fetched.
     * The next page may be empty (but then next_page_token would be null to confirm that there are no more resources).
     */
    next_page_token: string | null
}

export type ListEntryResponse = Omit<ListEntryResponseRaw, 'created_at'> & {
    created_at: Date
}

export type PagedListEntryResponse =
    & Omit<PagedListEntryResponseRaw, 'list_entries'>
    & {
        list_entries: ListEntryResponse[]
    }

/**
 * Paging parameters for retrieving list entries.
 */
export type PagingParameters = {
    /**
     * How many results to return per page. (Default is to return all results.)
     * *Note:* This is required in the paging parameters, as a page_token without a page_size will be ignored and the endpoint just returns all results.
     */
    page_size: number

    /**
     * The {@link PagedListEntryResponse.next_page_token} from the previous response required to retrieve the next page of results.
     */
    page_token?: string
}

export class ListEntries {
    /** @hidden */
    constructor(protected readonly api: AxiosInstance) {
    }

    private static transformEntry = (
        entry: ListEntryResponseRaw,
    ): ListEntryResponse => {
        return {
            ...entry,
            created_at: new Date(entry.created_at),
        }
    }

    /**
     * Fetches all list entries in the list with the supplied list id.
     *
     * *Please note:* the returned response has a different shape than when using a paginated request (see below)
     *
     * @returns An array of all list entries in the list with the supplied list id.
     *
     * @example
     * ```typescript
     * const entries = await affinity.lists.entries.all({ list_id: 123 })
     * console.log(`The first of ${entries.length} entries is for`, entries?.[0].entity)
     * ```
     */
    async all(query: GetQuery): Promise<ListEntryResponse[]>

    /**
     * Fetches up to the number specified in {@link PagingParameters.page_size} of list entries in the list with the supplied list id.
     *
     * *Please note*: the returned response has a different shape than when using a non-paginated request (see above).
     *
     * @returns A chunk of list entries with the maximum size specified in the query.
     *
     * @example
     * ```typescript
     * const { list_entries, next_page_token } = await affinity.lists.entries.all({ list_id: 123, page_size: 10 })
     * console.log(`The first of ${list_entries.length} entries in this page is for`, list_entries?.[0].entity)
     * console.log(next_page_token ? `The next page token is '${next_page_token}'` : 'No more pages to fetch')
     * ```
     */
    async all(
        query: GetQuery & PagingParameters,
    ): Promise<PagedListEntryResponse>

    /**
     * Fetches entries in a given list
     * @returns Either an array of all list entries or a chunk of list entries with the maximum size specified in the query
     */
    async all(
        query: GetQuery | GetQuery & PagingParameters,
    ): Promise<ListEntryResponse[] | PagedListEntryResponse> {
        const { list_id, ...params } = query
        return (await this.api.get<ListEntryResponse[]>(
            listEntriesUrl(list_id),
            {
                params,
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json:
                            | ListEntryResponseRaw[]
                            | PagedListEntryResponseRaw,
                    ) => {
                        if ('list_entries' in json) {
                            return {
                                ...json,
                                list_entries: json.list_entries.map(
                                    ListEntries.transformEntry,
                                ),
                            }
                        } else {
                            return json.map(ListEntries.transformEntry)
                        }
                    },
                ],
            },
        )).data
    }

    /**
     * Returns an async iterator that yields all list entries in the list with the supplied list id.
     * Each yielded array contains up to the number specified in {@link PagingParameters.page_size} of list entries.
     * Use this method if you want to process the list entries in a streaming fashion.
     *
     * *Please note:* the yielded list entries array may be empty on the last page.
     *
     * Example:
     * ```typescript
     * let page = 0
     * for await (const entries of affinity.lists.entries.pagedIterator({
     *     list_id: 123,
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    async *pagedIterator(
        query: GetQuery & Omit<PagingParameters, 'page_token'>,
    ): AsyncGenerator<ListEntryResponse[]> {
        let page_token: string | undefined = undefined
        while (true) {
            // console.log('Fetching page', page_token, query)
            const response: PagedListEntryResponse = await this.all(
                page_token ? { ...query, page_token } : query,
            )

            yield response.list_entries

            if (response.next_page_token === null) {
                // no more pages to fetch
                return
            } else {
                page_token = response.next_page_token
            }
        }
    }
}
