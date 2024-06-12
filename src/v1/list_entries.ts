import type { AxiosInstance } from 'axios'
import type { EntityType, GetQuery } from './lists.ts'
import { listEntriesUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import type { DateTime } from './types.ts'
import { PersonType } from './persons.ts'
import { Organization } from './organizations.ts'

export type Person = {
    id: number
    type: PersonType
    first_name: string
    last_name: string
    primary_email: string
    emails: string[]
}

export type Opportunity = {
    id: number
    name: string
}

/**
 * The entity object contains details about the person, organization or opportunity corresponding to the list entry.
 */
export type Entity =
    | Person
    | Organization
    | Opportunity

export type ListEntryReferenceRaw = {
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
     * The time when the list entry was created.
     */
    created_at: DateTime
}

export type ListEntryResponseRaw =
    & ListEntryReferenceRaw
    & {
        /**
         * The type of the entity corresponding to the list entry.
         */
        entity_type: EntityType
        /**
         * Object containing entity-specific details like name, email address, domain etc. for the entity corresponding to entity_id.
         */
        entity: Entity
    }

export type PagedListEntryResponseRaw = {
    list_entries: ListEntryResponseRaw[]
    /**
     * The absence of a `next_page_token` indicates that all the records have been fetched, though its presence does not necessarily indicate that there are more resources to be fetched.
     * The next page may be empty (but then `next_page_token` would be `null` to confirm that there are no more resources).
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
     *
     * *Note:* This is required in the paging parameters, as a `page_token` without a `page_size` will be ignored and the endpoint just returns all results.
     */
    page_size: number

    /**
     * The {@link PagedListEntryResponse.next_page_token} from the previous response required to retrieve the next page of results.
     */
    page_token?: string
}

export type ListEntryReference = {
    /**
     * The unique ID of the list that contains the specified `list_entry_id`.
     */
    list_id: number
    /**
     * The unique ID of the list entry object to be retrieved.
     */
    list_entry_id: number
}

/**
 * Request payload for creating a new list entry.
 */
export type CreateListEntryParameters = {
    /**
     * The unique ID of the list whose list entries are to be retrieved.
     */
    list_id: number
    /**
     * The unique ID of the person or organization to add to this list. Opportunities cannot be created using this endpoint.
     */
    entity_id: number
    /**
     * The ID of a Person resource who should be recorded as adding the entry to the list.
     * Must be a person who can access Affinity.
     * If not provided the creator defaults to the owner of the API key.
     */
    creator_id?: number
}

/**
 * @module
 *
 * *Notes*: Although list entries correspond to rows in an Affinity spreadsheet, the values associated with the entity are not stored inside the list entry resource.
 * If you are trying to update, create, or delete a value in one of the custom columns for this list entry, please refer to the [Field Values](https://api-docs.affinity.co/#field-values) section.
 * The list entry API is only used for getting, adding, or removing entities from a list.
 * It does not handle updating individual cells in columns.
 */
export class ListEntries {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
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
     * const { list_entries, next_page_token } = await affinity.lists.entries.all({
     *     list_id: 123,
     *     page_size: 10
     * })
     * console.log(`The first of ${list_entries.length} entries in this page is for`, list_entries?.[0].entity)
     * console.log(next_page_token
     *     ? `The next page token is '${next_page_token}'`
     *     : 'No more pages to fetch'
     * )
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
        const response = await this.axios.get<ListEntryResponse[]>(
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
        )
        return response.data
    }

    /**
     * Fetches a list entry with a specified id.
     *
     * @returns The list entry object corresponding to the list_entry_id.
     *
     * @example
     * ```typescript
     * const listEntry = await affinity.lists.entries.get({ list_id: 450, list_entry_id: 16367 })
     * console.log(listEntry)
     * ```
     */
    async get(
        reference: ListEntryReference,
    ): Promise<ListEntryResponse> {
        const { list_id, list_entry_id } = reference
        const response = await this.axios.get<ListEntryResponse>(
            listEntriesUrl(list_id, list_entry_id),
            {
                transformResponse: [
                    ...defaultTransformers(),
                    (json: ListEntryResponseRaw) => {
                        return ListEntries.transformEntry(json)
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Returns an async iterator that yields all list entries in the list with the supplied list id.
     * Each yielded array contains up to the number specified in {@link PagingParameters.page_size} of list entries.
     * Use this method if you want to process the list entries in a streaming fashion.
     *
     * *Please note:* the yielded list entries array may be empty on the last page.
     *
     * @example
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

    /**
     * Deletes a specific list entry.
     *
     * @returns boolean indicating whether the list entry was successfully deleted.
     *
     * @example
     * ```typescript
     * const success = await affinity.lists.entries.delete({
     *     list_id: 450,
     *     list_entry_id: 16367
     * })
     * console.log(success ? 'List entry deleted': 'List entry not deleted')
     * ```
     */
    async delete(
        reference: ListEntryReference,
    ): Promise<boolean> {
        const { list_id, list_entry_id } = reference
        const response = await this.axios.delete<{ success: boolean }>(
            listEntriesUrl(list_id, list_entry_id),
        )
        return response.data.success === true
    }

    /**
     * Creates a new list entry in the list with the supplied list_id.
     *
     * *Notes*:
     * - Opportunities cannot be created using this endpoint. Instead use the POST /opportunities endpoint.
     * - Person and company lists can contain the same entity multiple times. Depending on your use case, before you add an entry, you may want to verify whether or not it exists in the list already.
     *
     * @returns The created list entry object.
     *
     * @example
     * ```typescript
     * const newListEntry = await affinity.lists.entries.create({
     *     list_id: 450,
     *     entity_id: 38706
     * })
     * console.log(newListEntry)
     * ```
     */
    async create(
        request: CreateListEntryParameters,
    ): Promise<ListEntryResponse> {
        const { list_id, ...rest } = request
        const response = await this.axios.post<ListEntryResponse>(
            listEntriesUrl(list_id),
            rest,
            {
                transformResponse: [
                    ...defaultTransformers(),
                    (json: ListEntryResponseRaw) => {
                        return ListEntries.transformEntry(json)
                    },
                ],
            },
        )
        return response.data
    }
}
