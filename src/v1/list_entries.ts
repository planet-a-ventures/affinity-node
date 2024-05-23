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
    next_page_token: string
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

    async all(
        query: GetQuery & PagingParameters,
    ): Promise<PagedListEntryResponse>
    async all(query: GetQuery): Promise<ListEntryResponse[]>
    /**
     * Returns a collection of all the lists visible to you.
     *
     * @returns If the page_size is not passed in as a parameter, an array of all the list entry resources corresponding to the provided list will be returned.
     *          If the page_size is passed in as a parameter, an object with two fields: list_entries and next_page_token are returned.
     *          list_entries maps to an array of up to page_size list entries. next_page_token includes a token to be sent along with the next request as the page_token parameter to fetch the next page of results.
     *          Each list entry in the both cases includes all the attributes as specified.
     */
    async all(
        query: GetQuery | GetQuery & PagingParameters,
    ): Promise<ListEntryResponse[] | PagedListEntryResponse> {
        return (await this.api.get<ListEntryResponse[]>(
            listEntriesUrl(query.listId),
            {
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json:
                            | ListEntryResponseRaw[]
                            | PagedListEntryResponseRaw,
                    ) => {
                    },
                ],
            },
        )).data
    }
}
