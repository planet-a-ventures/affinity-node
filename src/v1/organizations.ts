import type { AxiosInstance } from 'axios'
import { organizationFieldsUrl, organizationsUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import type { DateTime } from './field_values.ts'
import type { ListEntryReferenceRaw } from './list_entries.ts'
import type { PersonResponse as Person } from './persons.ts'
import type { Opportunity } from './opportunities.ts'
import type { Field } from './lists.ts'

export type InteractionOccurrenceQuantifier = 'first' | 'last'

export type InteractionType =
    | `${InteractionOccurrenceQuantifier}_email`
    | `${InteractionOccurrenceQuantifier}_event`
    | 'next_event'
    | 'last_chat_message'
    | 'last_interaction'

export type InteractionDateKey = `${InteractionType}_date`

export type Organization = {
    /**
     * The unique identifier of the organization object.
     */
    id: number

    /**
     * The name of the organization.
     */
    name: string
    /**
     * The website name of the organization. This is used by Affinity to automatically associate {@link Person} objects with an organization.
     */
    domain: string
    /**
     * An array of all the websites associated with the organization. These are also used to automatically associate {@link Person} objects with an organization.
     */
    domains: string[]

    /**
     * The unique identifier of the organization in Crunchbase.
     */
    crunchbase_uuid: null | string

    /** Whether this is a global organization or not */
    global: boolean
}

export type OpportunityIdResponseRaw = {
    /**
     * An array of unique identifiers of opportunities ({@link Opportunity.id}) that are associated with the entity.
     * Only returned when passing `{@link OpportunitiesQueryParams.with_opportunities}=true`.
     *
     * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
     */
    opportunity_ids?: number[]
}

type InteractionDateResponseBase = {
    interaction_dates?: {
        [key in InteractionDateKey]: unknown
    }
    interactions?: {
        [key in InteractionType]: unknown
    }
}

export type InteractionDateResponseRaw =
    & InteractionDateResponseBase
    & {
        /**
         * An object with string date fields representing the most recent and upcoming interactions with this entity.
         * Only returned when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        interaction_dates?: {
            [key in InteractionDateKey]: DateTime
        }
        /**
         * An object with seven fields nested underneath.
         * Each field corresponds to one of the seven interactions, and includes nested fields for date and person_ids which indicates the internal people associated with that event (people only returned if passing `{@link InteractionDatesQueryParams.with_interaction_persons}=true`).
         * Only returned when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        interactions?: {
            [key in InteractionType]: InteractionDateRaw
        }
    }

export type InteractionDateResponse =
    & InteractionDateResponseBase
    & {
        /**
         * An object with string date fields representing the most recent and upcoming interactions with this entity.
         * Only returned when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        interaction_dates?: {
            [key in InteractionDateKey]: Date
        }

        /**
         * An object with seven fields nested underneath.
         * Each field corresponds to one of the seven interactions, and includes nested fields for date and person_ids which indicates the internal people associated with that event (people only returned if passing `{@link InteractionDatesQueryParams.with_interaction_persons}=true`).
         * Only returned when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true`.
         *
         * TODO(@joscha): model this in the type system, so the return type is based on the query parameter type.
         */
        interactions?: {
            [key in InteractionType]: InteractionDate
        }
    }

/**
 * Each organization object has a unique id. It also has a name, domain (the website of the organization), and persons associated with it.
 * The domain is an important attribute from an automation perspective, as it helps Affinity automatically link all the appropriate person objects to the organization.
 *
 * Each organization also has a flag determining whether it's global or not.
 * As mentioned above, Affinity maintains its own database of global organizations that each customer has access to.
 * Note that you cannot change the name or the domain of a global organization.
 * You also cannot delete a global organization.
 *
 * Of course, if an organization is manually created by your team, all fields can be modified and the organization can be deleted.
 *
 * Dates of the most recent and upcoming interactions with an organization are available in the interaction_dates field.
 * This data is only included when passing `{@link InteractionDatesQueryParams.with_interaction_dates}=true` as a query parameter to the `GET /organizations` or the `GET /organizations/{organization_id}` endpoints.
 */
export type OrganizationResponseRaw =
    & Organization
    & OpportunityIdResponseRaw
    & InteractionDateResponseRaw
    & {
        /**
         * An array of unique identifiers of people ({@link Person.id}) that are associated with the organization.
         */
        person_ids?: number[]
    }

export type SimpleOrganizationResponse =
    & Organization
    & Pick<
        OrganizationResponse,
        'person_ids'
    >

export type InteractionDateRaw = {
    date: DateTime
    /**
     * only returned if passing `with_interaction_persons=true`
     */
    person_ids?: number[]
}

export type InteractionDate = Omit<InteractionDateRaw, 'date'> & {
    date: Date
}

export type OrganizationResponse =
    & Omit<OrganizationResponseRaw, keyof InteractionDateResponseRaw>
    & InteractionDateResponse

export type PagedResponse = {
    next_page_token: string | null
}

export type ListEntryReference = Omit<ListEntryReferenceRaw, 'created_at'> & {
    created_at: Date
}

export type PagedOrganizationResponseRaw =
    & {
        organizations: OrganizationResponseRaw[]
    }
    & PagedResponse

export type PagedOrganizationResponse =
    & Omit<PagedOrganizationResponseRaw, 'organizations'>
    & {
        organizations: OrganizationResponse[]
    }

export type SingleOrganizationResponseRaw =
    & OrganizationResponseRaw
    & {
        /**
         * An array of list entry resources associated with the organization, only returned as part of the {@link Organizations.get} a specific organization endpoint.
         */
        list_entries: ListEntryReferenceRaw[]
    }

export type SingleOrganizationResponse = OrganizationResponse & {
    list_entries: ListEntryReference[]
}

export type CreateOrganizationRequest = {
    /**
     * The name of the organization.
     */
    name: string
    /**
     * The domain name of the organization.
     */
    domain?: string
    /**
     * An array of unique identifiers of persons that the new organization will be associated with.
     */
    person_ids?: number[]
}

export type UpdateOrganizationRequest =
    & OrganizationReference
    & {
        /**
         * The name of the organization.
         */
        name?: string
        /**
         * The domain name of the organization.
         */
        domain?: string
        /**
         * An array of unique identifiers of persons that the organization will be associated with.
         * *Note*: If you are trying to add a person to an organization, the existing values for `person_ids` must also be passed into the endpoint.
         */
        person_ids?: number[]
    }

export type InteractionTypeWithoutChat = Exclude<
    InteractionType,
    'last_chat_message'
>

export type OptionalMinQueryParams = {
    [key in InteractionTypeWithoutChat & string as `min_${key}_date`]?: Date
}

export type OptionalMaxQueryParams = {
    [key in InteractionTypeWithoutChat & string as `max_${key}_date`]?: Date
}

export type InteractionDatesQueryParams =
    | {
        /** When true, interaction dates will be present on the returned resources. */
        with_interaction_dates?: boolean
    }
    | {
        with_interaction_dates: true
        /**
         * When true, persons for each interaction will be returned. Used in conjunction with {@link InteractionDatesQueryParams.with_interaction_dates}
         */
        with_interaction_persons: true
    }

export type OpportunitiesQueryParams = {
    /**
     * When true, opportunity IDs associated with this organization will be returned.
     */
    with_opportunities?: boolean
}

export type PagedRequest = {
    /**
     * The number of items to return per page.
     *
     * Default is the maximum value of 500.
     */
    page_size?: number

    /**
     * The page token to retrieve the next page of items.
     * if you do not pass the `page_size` parameter, the next page will have the default page size of 500.
     */
    page_token?: string
}

export type SearchOrganizationsRequest =
    & {
        /**
         * The search term to filter organizations.
         */
        term?: string
    }
    & PagedRequest
    & OpportunitiesQueryParams
    & OptionalMinQueryParams
    & OptionalMaxQueryParams
    & InteractionDatesQueryParams

export type GetOrganizationRequest =
    & OrganizationReference
    & OpportunitiesQueryParams
    & InteractionDatesQueryParams

export type OrganizationReference = {
    /** The unique ID of the organization */
    organization_id: number
}

export type OrganizationField = Pick<
    Field,
    'id' | 'name' | 'value_type' | 'allows_multiple' | 'dropdown_options'
>

/**
 * @module
 * An organization in Affinity represents an external company that your team is in touch with- this could be an organization you're trying to invest in, sell to, or establish a relationship with.
 *
 * An organization has many people associated with it - these are your team's points of contacts at that organization. Just like people, organizations can be added to multiple lists and can be assigned field values.
 *
 * To make the data quality as good as possible, we have our own proprietary database of organizations that we have developed through third-party partnerships and web scraping. We use this database to minimize data entry for you as you use Affinity's CRM products.
 *
 * *Notes*:
 * - If you are looking to add or remove an organization from a list, please check out the {@link ListEntries} section of the API.
 * - If you are looking to modify a field value (one of the cells on Affinity's spreadsheet), please check out the {@link FieldValues} section of the API.
 */
export class Organizations {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static transformSearchOrganizationsRequest(
        data: SearchOrganizationsRequest,
    ) {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [
                key,
                value instanceof Date ? value.toISOString() : value,
            ]),
        )
    }

    /**
     * Fetches an organization with a specified organization_id.
     *
     * @returns The organization object corresponding to the organization_id.
     *
     * @example
     * ```typescript
     * const organization = await affinity.organizations.get({
     *     organization_id: 12345
     * })
     * console.log(organization)
     * ```
     */
    async get(
        params: GetOrganizationRequest,
    ): Promise<SingleOrganizationResponse> {
        const { organization_id, ...rest } = params
        const response = await this.axios.get<SingleOrganizationResponse>(
            organizationsUrl(organization_id),
            {
                params: rest,
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json: SingleOrganizationResponseRaw,
                    ): SingleOrganizationResponse => {
                        const { list_entries, ...organization } = json
                        return {
                            ...transformInteractionDateResponseRaw(
                                organization,
                            ),
                            list_entries: json.list_entries.map<
                                ListEntryReference
                            >((entry) => {
                                return {
                                    ...entry,
                                    created_at: new Date(entry.created_at),
                                }
                            }),
                        }
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Searches your team's data and fetches all the organizations that meet the search criteria.
     *
     * @param request - Object containing the data for the request
     *
     * @example
     * ```typescript
     * const result = await affinity.organizations.search({
     *     term: 'affinity'
     * })
     * console.log(result.organizations)
     * ```
     */
    async search(
        request: SearchOrganizationsRequest,
    ): Promise<PagedOrganizationResponse> {
        const response = await this.axios.get<PagedOrganizationResponse>(
            organizationsUrl(),
            {
                params: Organizations.transformSearchOrganizationsRequest(
                    request,
                ),
                transformResponse: [
                    ...defaultTransformers(),
                    (
                        json: PagedOrganizationResponseRaw,
                    ): PagedOrganizationResponse => {
                        return {
                            ...json,
                            organizations: json.organizations.map(
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
     * Returns an async iterator that yields all organization entries matching the given search terms
     * Each yielded array contains up to the number specified in {@link SearchOrganizationsRequest.page_size} of organizations.
     * Use this method if you want to process the organizations in a streaming fashion.
     *
     * *Please note:* the yielded organizations array may be empty on the last page.
     *
     * @example
     * ```typescript
     * let page = 0
     * for await (const entries of affinity.organizations.searchIterator({
     *     term: 'Ltd',
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    async *searchIterator(
        params: Omit<SearchOrganizationsRequest, 'page_token'>,
    ): AsyncGenerator<OrganizationResponse[]> {
        let page_token: string | undefined = undefined
        while (true) {
            const response: PagedOrganizationResponse = await this.search(
                page_token ? { ...params, page_token } : params,
            )

            yield response.organizations

            if (response.next_page_token === null) {
                // no more pages to fetch
                return
            } else {
                page_token = response.next_page_token
            }
        }
    }

    /**
     * Creates a new organization with the supplied parameters.
     *
     * @param data - Object containing the data for creating a new organization
     * @returns The organization resource that was just created.
     *
     * @example
     * ```typescript
     * const newOrganization = await affinity.organizations.create({
     *     name: 'Acme Corporation',
     *     domain: 'acme.co',
     *     person_ids: [38706]
     * })
     * console.log(newOrganization)
     * ```
     */
    async create(
        data: CreateOrganizationRequest,
    ): Promise<SimpleOrganizationResponse> {
        const response = await this.axios.post<SimpleOrganizationResponse>(
            organizationsUrl(),
            data,
        )
        return response.data
    }

    /**
     * Updates an existing organization with `organization_id` with the supplied parameters.
     *
     * @param data - Object containing the data for updating an organization
     * @returns The organization resource that was just updated.
     *
     * @example
     * ```typescript
     * const updatedOrganization = await affinity.organizations.update({
     *     organization_id: 12345,
     *     name: 'Acme Corp.',
     *     person_ids: [38706, 89734]
     * })
     * console.log(updatedOrganization)
     * ```
     */
    async update(
        data: UpdateOrganizationRequest,
    ): Promise<SimpleOrganizationResponse> {
        const { organization_id, ...rest } = data
        const response = await this.axios.put<SimpleOrganizationResponse>(
            organizationsUrl(organization_id),
            rest,
        )
        return response.data
    }

    /**
     * Deletes an organization with a specified `organization_id`.
     * @returns true if the deletion was successful
     *
     * @example
     * ```typescript
     * const success = await affinity.organizations.delete({
     *     organization_id: 12345
     * })
     * console.log(success ? 'Organization deleted': 'Organization not deleted')
     * ```
     */
    async delete(request: OrganizationReference): Promise<boolean> {
        const { organization_id } = request
        const response = await this.axios.delete<{ success: boolean }>(
            organizationsUrl(organization_id),
        )
        return response.data.success === true
    }

    /**
     * Fetches an array of all the global fields that exist on organizations.
     *
     * @returns An array of the fields that exist on all organizations for your team.
     *
     * @example
     * ```typescript
     * const organizationFields = await affinity.organizations.getFields()
     * console.log(organizationFields)
     * ```
     */
    async getFields(): Promise<OrganizationField[]> {
        const response = await this.axios.get<
            OrganizationField[]
        >(
            organizationFieldsUrl(),
        )
        return response.data
    }
}

/**
 * @hidden
 */
export function transformInteractionDateResponseRaw<
    T extends InteractionDateResponseRaw,
    U = Omit<T, keyof InteractionDateResponseBase> & InteractionDateResponse,
>(
    entityWithInteractions: T,
): U {
    const { interaction_dates, interactions, ...rest } = entityWithInteractions
    const dates: InteractionDateResponse = {}
    if (interaction_dates) {
        dates.interaction_dates = Object.fromEntries(
            Object.entries(interaction_dates).map(
                ([key, value]) => [key, new Date(value)],
            ),
        ) as Record<InteractionDateKey, Date>
    }
    if (interactions) {
        dates.interactions = Object.fromEntries(
            Object.entries(interactions).map(
                ([key, value]) => [key, {
                    ...value,
                    date: new Date(value.date),
                }],
            ),
        ) as Record<InteractionType, InteractionDate>
    }

    // TODO(@joscha): fix the types so we don't need to cast here
    return { ...rest, ...dates } as unknown as U
}
