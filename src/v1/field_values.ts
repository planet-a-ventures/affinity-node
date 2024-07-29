import type { AxiosInstance } from 'axios'
import { defaultTransformers } from './axios_default_transformers.ts'
import type { FieldBase } from './fields.ts'
import { FieldValueType } from './lists.ts'
import type { DateTime, Replace } from './types.ts'
import { fieldValuesUrl } from './urls.ts'
export type { DateTime } from './types.ts'

export type DropdownValue = {
    /**
     * The unique identifier of the value.
     */
    id: number
    /**
     * Represents the field's value.
     */
    text: string
    /**
     * The color associated with the value.
     */
    color: number
}

export type RankedDropdownValue =
    & DropdownValue
    & {
        /**
         * The rank of the value.
         */
        rank: number
    }
export type NumberValue = number
export type PersonValue = number
export type OrganizationValue = number
export type LocationValue = {
    city: string | null
    state: string | null
    country: string | null
    street_address: string | null
}

export type TextValue = string

export type ValueRaw =
    | DropdownValue
    | RankedDropdownValue
    | NumberValue
    | PersonValue
    | OrganizationValue
    | LocationValue
    | DateTime
    | TextValue
export type Value = Exclude<ValueRaw, DateTime> | Date

export interface FieldValueRawValues
    extends Record<keyof FieldValueType, ValueRaw> {
    [FieldValueType.RANKED_DROPDOWN]: RankedDropdownValue
    [FieldValueType.DROPDOWN]: DropdownValue
    [FieldValueType.NUMBER]: NumberValue
    [FieldValueType.PERSON]: PersonValue
    [FieldValueType.ORGANIZATION]: OrganizationValue
    [FieldValueType.LOCATION]: LocationValue
    [FieldValueType.DATE]: DateTime
    [FieldValueType.TEXT]: TextValue
}

export interface FieldValueValues extends Record<keyof FieldValueType, Value> {
    [FieldValueType.RANKED_DROPDOWN]: RankedDropdownValue
    [FieldValueType.DROPDOWN]: DropdownValue
    [FieldValueType.NUMBER]: NumberValue
    [FieldValueType.PERSON]: PersonValue
    [FieldValueType.ORGANIZATION]: OrganizationValue
    [FieldValueType.LOCATION]: LocationValue
    [FieldValueType.DATE]: Date
    [FieldValueType.TEXT]: TextValue
}

type ValueTypeMixin<T extends (FieldValueRawValues | FieldValueValues)> =
    | {
        value_type: FieldValueType.DROPDOWN
        value: T[FieldValueType.DROPDOWN]
    }
    | {
        value_type: FieldValueType.RANKED_DROPDOWN
        value: T[FieldValueType.RANKED_DROPDOWN]
    }
    | {
        value_type: FieldValueType.NUMBER
        value: T[FieldValueType.NUMBER]
    }
    | {
        value_type: FieldValueType.PERSON
        value: T[FieldValueType.PERSON]
    }
    | {
        value_type: FieldValueType.ORGANIZATION
        value: T[FieldValueType.ORGANIZATION]
    }
    | {
        value_type: FieldValueType.LOCATION
        value: T[FieldValueType.LOCATION]
    }
    | {
        value_type: FieldValueType.DATE
        value: T[FieldValueType.DATE]
    }
    | {
        value_type: FieldValueType.TEXT
        value: T[FieldValueType.TEXT]
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
export type FieldValueRaw =
    & FieldBase
    & {
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
         * The unique identifier of the list entry object the field value is associated with.
         * This only exists if the field the value is associated with is list-specific, `null` marks a global field value.
         */
        list_entry_id: number | null
        /**
         * The string representing the time when the field value was created.
         */
        created_at: DateTime
        /**
         * The string representing the last time the field value was updated.
         */
        updated_at: DateTime | null
    }
    & ValueTypeMixin<FieldValueRawValues>

export type FieldValueResponseRaw = FieldValueRaw[]

export type FieldValue = Replace<
    FieldValueRaw,
    & {
        updated_at: Date | null
        created_at: Date
    }
    & ValueTypeMixin<FieldValueValues>
>

export type FieldValueResponse = FieldValue[]

export type CreateFieldValueRequest = {
    field_id: number
    entity_id: number
    /**
     * The value of the field value.
     * In case of a {@link FieldValueType.DROPDOWN} or {@link FieldValueType.RANKED_DROPDOWN} field, this should be the text of the value.
     */
    value: Exclude<Value, DropdownValue | RankedDropdownValue>
    list_entry_id?: number
}

export type UpdateFieldValueRequest = {
    field_value_id: number
    value: Value
}

export type AllQueryParameters =
    | {
        /** The unique ID of the person object whose field values are to be retrieved. */
        person_id: number
    }
    | {
        /** The unique ID of the organization object whose field values are to be retrieved. */
        organization_id: number
    }
    | {
        /** The unique ID of the opportunity object whose field values are to be retrieved. */
        opportunity_id: number
    }
    | {
        /** The unique ID of the list entry object whose field values are to be retrieved. */
        list_entry_id: number
    }

/**
 * @module
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

    private static transformFieldValue(
        fieldValue: FieldValueRaw,
    ): FieldValue {
        return {
            ...fieldValue,
            value: fieldValue.value_type === FieldValueType.DATE
                ? new Date(fieldValue.value)
                : fieldValue.value,
            updated_at: fieldValue.updated_at === null
                ? null
                : new Date(fieldValue.updated_at),
            created_at: new Date(fieldValue.created_at),
        } as // TODO(@joscha): remove this ugly cast
        FieldValue
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
                value: data.value instanceof Date
                    ? data.value.toISOString()
                    : data.value,
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
            {
                value: data.value instanceof Date
                    ? data.value.toISOString()
                    : data.value,
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
