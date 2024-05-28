import type { AxiosInstance } from 'axios'
import { fieldsUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import { Field, FieldValueType, ListType } from './lists.ts'

export type FieldResponse = Field[]

export type FieldsQueryParameters = {
    /**
     * An unique identifier of the list whose fields are to be retrieved.
     *
     * Pass the `list_id` to only fetch fields that are specific to that list. Otherwise, all global and list-specific fields will be returned.
     */
    list_id?: number
    /**
     * The value type of the fields that are to be retrieved.
     *
     * Pass the `value_type` to fetch fields of specific value types. Otherwise, all fields of any type will be returned.
     */
    value_type?: FieldValueType
    /**
     * The entity type of the fields that are to be retrieved.
     *
     * Pass the `entity_type` to fetch fields of specific entity types. Otherwise, any fields of any entity type will be returned.
     */
    entity_type?: ListType
    /**
     * When `true`, field names will return in the format `[List Name] Field Name`.
     *
     * Pass the `with_modified_names` flag to return the fields such that the names have the list name prepended to them in the format `[List Name] Field Name` (i.e. `[Deals] Status`).
     */
    with_modified_names?: boolean
    /**
     * When true, dropdown options will not be returned in the response.
     *
     * Pass the `exclude_dropdown_options` flag to exclude dropdown options from the response. This may be useful when the payload is too large due to too many dropdown options.
     */
    exclude_dropdown_options?: boolean
}

/**
 * Fields as a data model represent the "columns" in a spreadsheet. A field can be specific to a given list, or it can be global. List-specific fields appear as a column whenever that list is being viewed while global fields are displayed on all lists.
 *
 * Let us consider two examples:
 *
 * 1. Assume you have a list called "Top Referrers", and a new list-specific field (column) called "Number of Referrals" is added to this list. In this case, the "Number of Referrals" column will only be visible on the "Top Referrers" list.
 * 2. Now assume you have three lists of people, "Top Referrers", "Friends in Media", "BD Leads", and a person X exists on all three lists. If you want to track where all the people in these 3 lists live, you might have a field called "Location". It makes sense to make this field global - in which case it will be shared across all three lists. Hence, if person X is a top referrer and lives in San Francisco, CA, that information will automatically appear on the "Friends in Media" list as well.
 *
 * By default, Affinity provides all teams with a few default global fields: For people, the global fields include Location, Job Titles, and Industries. For organizations, the global fields include Stage, Industry, Location, and more.
 *
 * *Notes*:
 * - The Field endpoint does not return any Crunchbase fields.
 * - Global field IDs for persons are returned from GET /persons/fields
 * - Global field IDs for organizations are returned from GET /organizations/fields
 * - List-specific field IDs are also returned from GET /lists/{list_id}
 */
export class Fields {
    /** @hidden */
    constructor(protected readonly axios: AxiosInstance) {
    }

    /**
     * Returns all fields based on the provided query parameters.
     *
     * @param params - The query parameters for filtering fields.
     * @returns A promise that resolves to an array of field objects.
     *
     * @example
     * ```typescript
     * const fields = await affinity.fields.all({
     *     list_id: 123,
     *     value_type: FieldValueType.TEXT,
     *     entity_type: ListType.PERSON,
     *     with_modified_names: true,
     * })
     * console.log(fields)
     * ```
     */
    async all(params: FieldsQueryParameters = {}): Promise<FieldResponse> {
        const response = await this.axios.get<FieldResponse>(
            fieldsUrl(),
            {
                params,
            },
        )
        return response.data
    }
}