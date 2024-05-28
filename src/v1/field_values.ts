import type { AxiosInstance } from 'axios'
import { fieldValuesUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import { FieldValueType } from './lists.ts'
import { Field } from './lists.ts'

export type Dropdown = string
export type Number = number
export type Person = number
export type Organization = number
export type Location = {
    city: string | null
    state: string | null
    country: string | null
    street_address: string | null
}
/**
 * This is a date string in the format ISO 8601
 */
export type DateTime = string & { _datetimeBrand: never }
export type Text = string

export type ValueRaw =
    | Dropdown
    | Number
    | Person
    | Organization
    | Location
    | DateTime
    | Text
export type Value = Omit<ValueRaw, DateTime> | Date

export interface FieldValueRawValues
    extends Record<keyof FieldValueType, ValueRaw> {
    [FieldValueType.RANKED_DROPDOWN]: Dropdown
    [FieldValueType.DROPDOWN]: Dropdown
    [FieldValueType.NUMBER]: Number
    [FieldValueType.PERSON]: Person
    [FieldValueType.ORGANIZATION]: Organization
    [FieldValueType.LOCATION]: Location
    [FieldValueType.DATE]: DateTime
    [FieldValueType.TEXT]: Text
}

/**
 * Each field value object has a unique id.
 *
 * A field value also has `field_id`, `entity_id`, and `list_entry_id` attributes that give it the appropriate associations.
 *
 * Use the `created_at` and `updated_at` timestamps on field values to determine when the value(s) for a given field have last been added or changed.
 * Please note that what might amount to an “update” in-product (e.g. for dropdown fields) might result in a newly created field value rather than an updated old one in the API.
 *
 * A field value can take on many different kinds of values, depending on the field value type.
 *
 * *Note*: When retrieving Field Values from a specific cell in your Affinity list, it may be helpful to think about it as an XY coordinate system. The X coordinate is the List Entry *or* Entity and the Y coordinate is the Field ID. You will need to have both to find the appropriate Field Value ID.
 */
export type FieldValueRaw = {
    /**
     * The unique identifier of the field value object.
     */
    id: number
    /**
     * The unique identifier of the field the value is associated with.
     */
    field_id: number
    /**
     * The unique identifier of the person, organization, or opportunity object the field value is associated with.
     */
    entity_id: number
    /**
     * The unique identifier of the list entry object the field value is associated with. This only exists if the field the value is associated with is list-specific.
     */
    list_entry_id: number | null
    /**
     * The value attribute can take on many different types, depending on the field {@link Field.value_type}.
     */
    value: ValueRaw
    /**
     * The string representing the time when the field value was created.
     */
    created_at: DateTime
    /**
     * The string representing the last time the field value was updated.
     */
    updated_at: DateTime | null
}

export type FieldValueResponseRaw = FieldValueRaw[]

export type FieldValue =
    & Omit<FieldValueRaw, 'value' | 'updated_at' | 'created_at'>
    & {
        value: Value
        updated_at: Date | null
        created_at: Date
    }

export type FieldValueResponse = FieldValue[]

export type CreateFieldValueRequest = {
    field_id: number
    entity_id: number
    value: Value
    list_entry_id?: number
}

export type UpdateFieldValueRequest = {
    field_value_id: number
    value: Value
}

export type AllQueryParameters = {
    /** The unique ID of the person object whose field values are to be retrieved. */
    person_id: number
} | {
    /** The unique ID of the organization object whose field values are to be retrieved. */
    organization_id: number
} | {
    /** The unique ID of the opportunity object whose field values are to be retrieved. */
    opportunity_id: number
} | {
    /** The unique ID of the list entry object whose field values are to be retrieved. */
    list_entry_id: number
}

/**
 * Field values are displayed in Affinity as the data in the cells of an Affinity spreadsheet.
 *
 * As an example for how a field value is created:
 * 1. Assume there exists a list of people called "Business Development Leads".
 * 2. A custom field called "Deal Size" is created on this list. Fields are visually displayed as columns.
 * 3. A person X is added to this list. This action creates a list entry for this person.
 * 4. A value, 50,000, is entered in the cell corresponding to person X in the Deal Size column.
 * 5. 50,000 is now a field value tied to the list entry corresponding to person X, and the "Deal Size" field.
 *
 * *Notes*:
 * - By default, Affinity creates some fields for you automatically. These include Location, Industry, Job Titles, and more. See the [Default Fields section](https://api-docs.affinity.co/#default-fields) for more information.
 * - Opportunities cannot have global field values
 */
export class FieldValues {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static isValidISO8601(dateString: string): boolean {
        // Define the regular expression for ISO 8601 format
        const iso8601Regex =
            /^(-?(?:[1-9][0-9]*)?[0-9]{4})(-(0[1-9]|1[0-2])(-([0-2][0-9]|3[01])(T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(\.\d+)?(Z|([+-]([01][0-9]|2[0-3]):[0-5][0-9])))?)?)?$/

        // Check if the string matches the ISO 8601 format
        if (!iso8601Regex.test(dateString)) {
            return false
        }

        // Parse the date using the Date object
        const date = new Date(dateString)
        return date.toISOString() === dateString
    }

    private static transformValue(value: ValueRaw): Value
    private static transformValue(value: Value): ValueRaw
    private static transformValue(value: Value | ValueRaw): Value | ValueRaw {
        if (value instanceof Date) {
            return value.toISOString() as DateTime
        } else if (
            typeof value === 'string' && FieldValues.isValidISO8601(value)
        ) {
            return new Date(value)
        } else {
            return value
        }
    }

    // TODO(@joscha): use FieldValues.transformValue(data.value) from above
    private static transformFieldValue(fieldValue: FieldValue): FieldValueRaw
    private static transformFieldValue(fieldValue: FieldValueRaw): FieldValue
    private static transformFieldValue(
        fieldValue: FieldValueRaw | FieldValue,
    ): FieldValue | FieldValueRaw {
        if (fieldValue.created_at instanceof Date) {
            // we have a non-raw object, convert dates to strings
            const temp: FieldValueRaw = {
                ...fieldValue,
                value: fieldValue.value instanceof Date
                    ? fieldValue.value.toISOString() as DateTime
                    : fieldValue.value as ValueRaw,
                updated_at: fieldValue.updated_at === null
                    ? null
                    : fieldValue.updated_at instanceof Date
                    ? fieldValue.updated_at.toISOString() as DateTime
                    : fieldValue.updated_at,
                created_at: fieldValue.created_at.toISOString() as DateTime,
            }
            return temp
        } else {
            const temp: FieldValue = {
                ...fieldValue,
                // TODO(@joscha): introspection of the value shape is not ideal, as it will transform a text value that happens
                // to be a valid ISO date string into a Date object. This is a limitation of the current design.
                // A way around this can be to fetch the field definition and use that to determine the value type.
                // The attached cost is an additional API request for each field value in string shape, which is not ideal.
                value: typeof fieldValue.value === 'string' &&
                        FieldValues.isValidISO8601(fieldValue.value)
                    ? new Date(fieldValue.value)
                    : fieldValue.value,
                updated_at: fieldValue.updated_at === null
                    ? null
                    : new Date(fieldValue.updated_at),
                created_at: new Date(fieldValue.created_at),
            }
            return temp
        }
    }

    /**
     * Fetches field values based on the provided parameters.
     *
     * @returns An array of field value objects.
     *
     * @example
     * ```typescript
     * const fieldValues = await affinity.fieldValues.getAll({ person_id: 1234 })
     * console.log(fieldValues)
     * ```
     */
    async all(params: AllQueryParameters): Promise<FieldValueResponse> {
        const response = await this.axios.get<FieldValueResponse>(
            fieldValuesUrl(),
            {
                params,
                transformResponse: [
                    ...defaultTransformers(),
                    (json: FieldValueResponseRaw) => {
                        return json.map(FieldValues.transformFieldValue)
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Creates a new field value.
     *
     * @param data - Object containing the data for creating a new field value
     * @param data.field_id - The unique identifier of the field (column) that the field value is associated with.
     * @param data.entity_id - The unique identifier of the entity (person, organization, or opportunity) that the field value is associated with.
     * @param data.value - The value to be associated with the field.
     * @param data.list_entry_id - (Optional) The unique identifier of the list entry (list row) that the field value is associated with.
     * @returns The created field value object.
     *
     * @example
     * ```typescript
     * const newFieldValue = await affinity.fieldValues.create({
     *     field_id: 1284,
     *     entity_id: 38706,
     *     value: "Architecture"
     * })
     * console.log(newFieldValue)
     * ```
     */
    async create(data: CreateFieldValueRequest): Promise<FieldValue> {
        const response = await this.axios.post<FieldValue>(
            fieldValuesUrl(),
            {
                ...data,
                value: FieldValues.transformValue(data.value),
            },
            {
                transformResponse: [
                    ...defaultTransformers(),
                    (json: FieldValueRaw) => {
                        return FieldValues.transformFieldValue(json)
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Updates an existing field value.
     *
     * @param data - Object containing the data for updating a field value
     * @param data.field_value_id - The unique ID of the field value that needs to be updated.
     * @param data.value - The new value to be associated with the field value.
     * @returns The updated field value object.
     *
     * @example
     * ```typescript
     * const updatedFieldValue = await affinity.fieldValues.update({
     *     field_value_id: 20406836,
     *     value: "Healthcare"
     * })
     * console.log(updatedFieldValue)
     * ```
     */
    async update(data: UpdateFieldValueRequest): Promise<FieldValue> {
        const response = await this.axios.put<FieldValue>(
            fieldValuesUrl(data.field_value_id),
            { value: FieldValues.transformValue(data.value) },
            {
                transformResponse: [
                    ...defaultTransformers(),
                    (json: FieldValueRaw) => {
                        return FieldValues.transformFieldValue(json)
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Deletes a specific field value.
     *
     * @returns boolean indicating whether the field value was successfully deleted.
     *
     * @example
     * ```typescript
     * const success = await affinity.fieldValues.delete({
     *     field_value_id: 20406836
     * })
     * console.log(success ? 'Field value deleted': 'Field value not deleted')
     * ```
     */
    async delete(
        { field_value_id }: { field_value_id: number },
    ): Promise<boolean> {
        const response = await this.axios.delete<{ success: boolean }>(
            fieldValuesUrl(field_value_id),
        )
        return response.data.success === true
    }
}
