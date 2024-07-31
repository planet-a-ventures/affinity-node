import type { AxiosInstance } from 'axios'
import { defaultTransformers } from './axios_default_transformers.ts'
import { createSearchIteratorFn } from './create_search_iterator_fn.ts'
import type { ListEntryReferenceRaw } from './list_entries.ts'
import {
    EntityField,
    InteractionDateResponse,
    type InteractionDateResponseRaw,
    InteractionDatesQueryParams,
    type ListEntryReference,
    OpportunitiesQueryParams,
    type OpportunityIdResponseRaw,
    OptionalMaxQueryParams,
    OptionalMinQueryParams,
} from './organizations.ts'
import type { PagedRequest } from './paged_request.ts'
import type { PagedResponse } from './paged_response.ts'
import { transformInteractionDateResponseRaw } from './transform_interaction_date_response_raw.ts'
import { transformListEntryReference } from './transform_list_entry_reference.ts'
import type { Replace } from './types.ts'
import { personFieldsUrl, personsUrl } from './urls.ts'

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

export type Person = {
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
}

/**
 * Each person resource is assigned a unique `id` and stores the name, type, and email addresses of the person. A person resource also has access to a smart attribute called `primary_email`. The value of `primary_email` is automatically computed by Affinity's proprietary algorithms and refers to the email that is most likely to be the current active email address of a person.
 * The person resource `organization_ids` is a collection of unique identifiers to the person's associated organizations. Note that a person can be associated with multiple organizations. For example, say your team has talked with organizations A and B. Person X used to work at A and was your point of contact, but then changed jobs and started emailing you from a new email address (corresponding to organization B). In this case, Affinity will automatically associate person X with both organization A and organization B.
 * The person resource `type` indicates whether a person is internal or external to your team. Every internal person is a user of Affinity on your team, and all other people are externals.
 * Dates of the most recent and upcoming interactions with a person are available in the `interaction_dates` field. This data is only included when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true` as a query parameter to the `/persons` or the `/persons/{person_id}` endpoints.
 */
export type PersonResponseRaw =
    & {
        /** An array of unique identifiers of organizations that the person is currently associated with according to the Affinity Data: Current Organization in-app column.
         * Only returned when `{@link WithCurrentOrganizatonParams.with_current_organizations}=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        current_organization_ids?: number[]
    }
    & Person
    & InteractionDateResponseRaw
    & OpportunityIdResponseRaw

export type PersonResponse = Replace<PersonResponseRaw, InteractionDateResponse>

export type WithCurrentOrganizatonParams = {
    /**
     * When true, the organization IDs of each person's current organizations (according to the Affinity Data: Current Organizations column) will be returned.
     */
    with_current_organizations?: boolean
}

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
    & WithCurrentOrganizatonParams

export type PagedPersonResponseRaw =
    & {
        persons: PersonResponseRaw[]
    }
    & PagedResponse

export type PagedPersonResponse = Replace<PagedPersonResponseRaw, {
    persons: PersonResponse[]
}>

export type SinglePersonResponseRaw =
    & {
        /** An array of unique identifiers of organizations that the person is associated with. */
        organization_ids: number[]
        list_entries: ListEntryReferenceRaw[]
    }
    & PersonResponseRaw

export type SinglePersonResponse = Replace<
    SinglePersonResponseRaw,
    & {
        /**
         * An array of list entry resources associated with the person, only returned as part of the {@link Persons.get} a specific person endpoint.
         */
        list_entries: ListEntryReference[]
    }
    & PersonResponse
>

export type GetPersonRequest =
    & PersonReference
    & OpportunitiesQueryParams
    & InteractionDatesQueryParams
    & WithCurrentOrganizatonParams

export type PersonReference = {
    /** The unique ID of the person */
    person_id: number
}

/**
 * The request object for creating an organization.
 */
export type CreatePersonRequest = {
    /**
     * The first name of the person.
     */
    first_name: string
    /**
     * The last name of the person.
     */
    last_name: string
    /**
     * The email addresses of the person. If there are no email addresses, please specify an empty array.
     */
    emails?: string[]
    /**
     * An array of unique identifiers of organizations that the person is associated with.
     */
    organization_ids?: number[]
}

/**
 * The request object for updating an organization.
 */
export type UpdatePersonRequest =
    & {
        /**
         * The first name of the person.
         */
        first_name?: string

        /**
         * The last name of the person.
         */
        last_name?: string

        /**
         * The email addresses of the person. If there are no email addresses, please specify an empty array.
         *
         * *Hint*: If you are trying to add a new email to a person, the existing values for `emails` must also be supplied as parameters.
         */
        emails?: string[]

        /**
         * An array of unique identifiers of organizations that the person is associated with.
         *
         * *Hint*: If you are trying to add a new organization to a person, the existing values for `organization_ids` must also be supplied as parameters.
         */
        organization_ids?: number[]
    }
    & PersonReference

export type SimplePersonResponse = Omit<SinglePersonResponse, 'list_entries'>

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
     * Fetches an person with a specified `person_id`.
     *
     * @returns The person object corresponding to the `person_id`.
     *
     * @example
     * ```typescript
     * const person = await affinity.persons.get({
     *     person_id: 12345
     * })
     * console.log(person)
     * ```
     */
    async get(
        params: GetPersonRequest,
    ): Promise<SinglePersonResponse> {
        const { person_id, ...rest } = params
        const response = await this.axios.get<SinglePersonResponse>(
            personsUrl(person_id),
            {
                params: rest,
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json: SinglePersonResponseRaw,
                    ): SinglePersonResponse => {
                        const { list_entries, ...person } = json
                        return {
                            ...transformInteractionDateResponseRaw(
                                person,
                            ),
                            list_entries: json.list_entries.map(
                                transformListEntryReference,
                            ),
                        }
                    },
                ],
            },
        )
        return response.data
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
     * const { persons: allAlices } = await affinity.persons.search({
     *     term: 'Alice'
     * })
     * console.log(allAlices)
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
     *     term: 'Alice',
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    searchIterator = createSearchIteratorFn(
        this.search.bind(this),
        'persons',
    )

    /**
     * Creates a new person with the supplied parameters.
     *
     * @param data - Object containing the data for creating a new person
     * @returns The person resource that was just created.
     *
     * @example
     * ```typescript
     * const newPerson = await affinity.persons.create({
     *     first_name: 'Alice',
     *     last_name: 'Doe',
     *     emails: ['alice@doe.com'],
     *     organization_ids: [123456]
     * })
     * console.log(newPerson)
     * ```
     */
    async create(
        data: CreatePersonRequest,
    ): Promise<SimplePersonResponse> {
        const response = await this.axios.post<SimplePersonResponse>(
            personsUrl(),
            {
                ...data,
                emails: data.emails ?? [], // the API requires this field to be present
            },
        )
        return response.data
    }

    /**
     * Updates an existing person with `person_id` with the supplied parameters.
     *
     * @param data - Object containing the data for updating an person
     * @returns The person resource that was just updated.
     *
     * @example
     * ```typescript
     * const updatedPerson = await affinity.persons.update({
     *     person_id: 12345,
     *     name: 'Acme Corp.',
     *     person_ids: [38706, 89734]
     * })
     * console.log(updatedPerson)
     * ```
     */
    async update(
        data: UpdatePersonRequest,
    ): Promise<SimplePersonResponse> {
        const { person_id, ...rest } = data
        const response = await this.axios.put<SimplePersonResponse>(
            personsUrl(person_id),
            rest,
        )
        return response.data
    }

    /**
     * Deletes an person with a specified `person_id`.
     * @returns true if the deletion was successful
     *
     * @example
     * ```typescript
     * const success = await affinity.persons.delete({
     *     person_id: 12345
     * })
     * console.log(success ? 'Person deleted': 'Person not deleted')
     * ```
     */
    async delete(request: PersonReference): Promise<boolean> {
        const { person_id } = request
        const response = await this.axios.delete<{ success: boolean }>(
            personsUrl(person_id),
        )
        return response.data.success === true
    }

    /**
     * Fetches an array of all the global fields that exist on persons.
     *
     * @returns An array of the fields that exist on all persons for your team.
     *
     * @example
     * ```typescript
     * const personFields = await affinity.persons.getFields()
     * console.log(personFields)
     * ```
     */
    async getFields(): Promise<EntityField[]> {
        const response = await this.axios.get<
            EntityField[]
        >(
            personFieldsUrl(),
        )
        return response.data
    }
}
