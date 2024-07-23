import type { AxiosInstance } from 'axios'
import {
    type InteractionDate,
    type InteractionDateKey,
    InteractionDateResponse,
    type InteractionDateResponseRaw,
    InteractionDatesQueryParams,
    type InteractionType,
    type ListEntryReference,
    OpportunitiesQueryParams,
    type OpportunityIdResponseRaw,
    OptionalMaxQueryParams,
    OptionalMinQueryParams,
    PagedRequest,
    PagedResponse,
    transformInteractionDateResponseRaw,
} from './organizations.ts'
import type { ListEntryReferenceRaw } from './list_entries.ts'
import { personsUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'

/**
 * The type of person.
 */
export enum PersonType {
    /**
     * Default value. All people that your team has spoken with externally have this type.
     */
    EXTERNAL = 0,
    /**
     * All people on your team that have Affinity accounts will have this type.
     */
    INTERNAL = 1,
}

/**
 * Each person resource is assigned a unique `id` and stores the name, type, and email addresses of the person. A person resource also has access to a smart attribute called `primary_email`. The value of `primary_email` is automatically computed by Affinity's proprietary algorithms and refers to the email that is most likely to be the current active email address of a person.
 * The person resource `organization_ids` is a collection of unique identifiers to the person's associated organizations. Note that a person can be associated with multiple organizations. For example, say your team has talked with organizations A and B. Person X used to work at A and was your point of contact, but then changed jobs and started emailing you from a new email address (corresponding to organization B). In this case, Affinity will automatically associate person X with both organization A and organization B.
 * The person resource `type` indicates whether a person is internal or external to your team. Every internal person is a user of Affinity on your team, and all other people are externals.
 * Dates of the most recent and upcoming interactions with a person are available in the `interaction_dates` field. This data is only included when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true` as a query parameter to the `/persons` or the `/persons/{person_id}` endpoints.
 */
export type PersonResponseRaw =
    & {
        /** The unique identifier of the person object. */
        id: number
        /** The type of person. */
        type: PersonType
        /** The first name of the person. */
        first_name: string
        /** The last name of the person. */
        last_name: string
        /** The email addresses of the person. */
        emails: string[]
        /** The email (automatically computed) that is most likely to the current active email address of the person. */
        primary_email: string
        /** An array of unique identifiers of organizations that the person is associated with. */
        organization_ids: number[]

        /** An array of unique identifiers of organizations that the person is currently associated with according to the Affinity Data: Current Organization in-app column.
         * Only returned when `with_current_organizations=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        current_organization_ids: number[]
    }
    & InteractionDateResponseRaw
    & OpportunityIdResponseRaw

export type PersonResponse =
    & Omit<PersonResponseRaw, keyof InteractionDateResponseRaw>
    & InteractionDateResponse

export type SearchPersonsRequest =
    & {
        /**
         * The search term to filter persons.
         * The search term can be part of an email address, a first name or a last name.
         */
        term?: string
    }
    & PagedRequest
    & OpportunitiesQueryParams
    & OptionalMinQueryParams
    & OptionalMaxQueryParams
    & InteractionDatesQueryParams

export type PagedPersonResponseRaw =
    & {
        persons: PersonResponseRaw[]
    }
    & PagedResponse

export type PagedPersonResponse =
    & Omit<PagedPersonResponseRaw, 'persons'>
    & {
        persons: PersonResponse[]
    }

export type SinglePersonResponseRaw =
    & {
        /**
         * An array of list entry resources associated with the person, only returned as part of the {@link Persons.get} a specific person endpoint.
         */
        list_entries: ListEntryReferenceRaw[]
    }
    & PersonResponseRaw

export type SinglePersonResponse =
    & {
        list_entries: ListEntryReference[]
    }
    & PersonResponse

/**
 * @module
 * The persons API allows you to manage all the contacts of your organization.
 * These people include anyone your team has ever been in email communications or meetings with, and all the people that your team has added to Affinity either manually or through the API. Affinity's data model also guarantees that only one person in your team's shared contact list has a given email address.
 *
 * *Notes*:
 * - If you are looking to add or remove a person from a list, please check out the {@link ListEntries} section of the API.
 * - If you are looking to modify a person's field values (one of the cells on Affinity's spreadsheet), please check out the {@link FieldValues} section of the API.
 */
export class Persons {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static transformSearchPersonsRequest(
        data: SearchPersonsRequest,
    ) {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [
                key,
                value instanceof Date ? value.toISOString() : value,
            ]),
        )
    }

    /**
     * Searches your teams data and fetches all the persons that meet the search criteria.
     *
     * This result is paginated. An initial request returns an object with two fields: `persons` and {@link PagedResponse.next_page_token}. `persons` contains an array of person resources. The value of {@link PagedResponse.next_page_token} should be sent as the query parameter `page_token` in another request to retrieve the next page of results. While paginating through results, each request must have identical query parameters other than the changing `page_token`. Otherwise, an `Invalid page_token variable` error will be returned.
     *
     * The absence of a {@link PagedResponse.next_page_token} indicates that all the records have been fetched, though its presence does not necessarily indicate that there are *more* resources to be fetched. The next page may be empty (but then {@link PagedResponse.next_page_token} would be `null` to confirm that there are no more resources).
     * Pass `{@link InteractionDatesQueryParams.with_interaction_dates}=true` as a query parameter to include dates of the most recent and upcoming interactions with persons. When this parameter is included, persons with no interactions will not be returned in the response. Pass `with_interaction_persons=true` as a query parameter if `with_interaction_dates=true` to also get the internal persons associated with the interaction.
     * You can filter by interaction dates by providing additional query parameters like `min_last_email_date` or `max_next_event_date`. The value of these query parameters should be ISO 8601 formatted date strings.
     *
     * @param request - Object containing the data for the request
     *
     * @example
     * ```typescript
     * const result = await affinity.persons.search({
     *     term: 'ben'
     * })
     * console.log(result.primary_email)
     * ```
     */
    async search(
        request: SearchPersonsRequest,
    ): Promise<PagedPersonResponse> {
        const response = await this.axios.get<PagedPersonResponse>(
            personsUrl(),
            {
                params: Persons.transformSearchPersonsRequest(
                    request,
                ),
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json: PagedPersonResponseRaw,
                    ): PagedPersonResponse => {
                        return {
                            ...json,
                            persons: json.persons.map(
                                transformInteractionDateResponseRaw,
                            ),
                        }
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Returns an async iterator that yields all person entries matching the given search terms
     * Each yielded array contains up to the number specified in {@link SearchPersonsRequest.page_size} of persons.
     * Use this method if you want to process the persons in a streaming fashion.
     *
     * *Please note:* the yielded persons array may be empty on the last page.
     *
     * @example
     * ```typescript
     * let page = 0
     * for await (const entries of affinity.persons.searchIterator({
     *     term: 'ben',
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    async *searchIterator(
        params: Omit<SearchPersonsRequest, 'page_token'>,
    ): AsyncGenerator<PersonResponse[]> {
        let page_token: string | undefined = undefined
        while (true) {
            const response: PagedPersonResponse = await this.search(
                page_token ? { ...params, page_token } : params,
            )

            yield response.persons

            if (response.next_page_token === null) {
                // no more pages to fetch
                return
            } else {
                page_token = response.next_page_token
            }
        }
    }
}
