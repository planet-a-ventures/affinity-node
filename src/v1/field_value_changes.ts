import type { AxiosInstance } from 'axios'

import type { Person } from './list_entries.ts'
import type { DateTime } from './types.ts'
import { fieldValueChangesUrl } from './urls.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import type { Field } from './lists.ts'

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    & Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            & Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, never>>
    }[Keys]

/**
 * Enum for Action Type.
 */
export enum ActionType {
    /**
     * Represents the action type for creating a field value change.
     */
    CREATE = 0,
    /**
     * Represents the action type for deleting a field value change.
     */
    DELETE = 1,
    /**
     * Represents the action type for updating a field value change.
     */
    UPDATE = 2,
}

export type Changer = {
    /**
     * The unique identifier of the changer.
     */
    id: number
} & Person

export type Value = {
    /**
     * The unique identifier of the value.
     */
    id: number
    /**
     * Represents the field's value.
     */
    text: string
    /**
     * The rank of the value.
     *
     * TODO(@joscha): can this be null for some value types?
     */
    rank: number
    /**
     * The color associated with the value.
     */
    color: number
}

/**
 * Represents the response object for a field value change.
 *
 * *Note*: There are some extra attributes returned by this endpoint; they will be deprecated soon and should not be used.
 */
export type FieldValueChangeRaw = {
    /**
     * The unique identifier of the field value change object.
     */
    id: number
    /**
     * The unique identifier of the field the value change is associated with.
     */
    field_id: number
    /**
     * The unique identifier of the person, organization, or opportunity object the field value change is associated with.
     */
    entity_id: number
    /**
     * The unique identifier of the list entry object the field value change is associated with.
     */
    list_entry_id: number
    /**
     * Describes the action behind this field value change.
     */
    action_type: ActionType
    /**
     * The changer object.
     */
    changer: Changer
    /**
     * The timestamp when the field value change occurred.
     */
    changed_at: DateTime
    /**
     * Represents the field's value.
     *
     * This attribute can take on many different types, depending on the field `value_type`.
     * When the action type is {@link ActionType.DELETE}, `value` represents the old value; otherwise, it represents the new value.
     */
    value: Value
}

export type FieldValueChangeResponseRaw = FieldValueChangeRaw[]

export type FieldValueChange = Omit<FieldValueChangeRaw, 'changed_at'> & {
    changed_at: Date
}

export type FieldValueChangeResponse = FieldValueChange[]

/**
 * Only one of these properties can be present at a time
 */
export interface GetFieldValueChangesRequestFilter {
    /**
     * A unique ID that represents a person object whose field value changes are to be retrieved.
     */
    person_id: number
    /**
     * A unique ID that represents an organization object whose field value changes are to be retrieved.
     */
    organization_id: number
    /**
     * A unique ID that represents an opportunity object whose field value changes are to be retrieved.
     */
    opportunity_id: number
    /**
     * A unique ID that represents a list entry object whose field value changes are to be retrieved.
     */
    list_entry_id: number
}

export type GetFieldValueChangesRequestBase = {
    /**
     * A unique ID that represents a field object whose field values changes are to be retrieved.
     */
    field_id: number
    /**
     * An integer that filters field value changes that were created with this specific action type.
     */
    action_type?: ActionType
}

export type GetFieldValueChangesRequest =
    | GetFieldValueChangesRequestBase
    | (
        & GetFieldValueChangesRequestBase
        & RequireOnlyOne<
            GetFieldValueChangesRequestFilter,
            keyof GetFieldValueChangesRequestFilter
        >
    )

/**
 * Field value changes allow you to see historical changes to the values of fields in Affinity.
 * This is especially useful for tracking progress through statuses (e.g. Lead --> Closed Won).
 *
 * *Supported field types*:
 * Not all fields can track historical changes.
 * Fields that are automatically created and "enriched" by Affinity do not support change tracking.
 *
 * Among fields that are not enriched, only the ones with the following data types support change tracking:
 *
 * Multi-valued fields:
 * - {@link FieldValueType.PERSON}
 * - {@link FieldValueType.ORGANIZATION}
 * - {@link FieldValueType.NUMBER}
 * - {@link FieldValueType.LOCATION}
 *
 * Single-valued fields:
 * - {@link FieldValueType.PERSON}
 * - {@link FieldValueType.ORGANIZATION}
 * - {@link FieldValueType.NUMBER}
 * - {@link FieldValueType.DATE}
 * - {@link FieldValueType.LOCATION}
 * - {@link FieldValueType.RANKED_DROPDOWN}
 *
 * You can also see if a field does so by looking at the {@link Field.track_changes} attribute in the Field Resource. The API will return an appropriate error if the field doesn't support historical tracking.
 */
export class FieldValueChanges {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static transformFieldValueChange(
        fieldValueChange: FieldValueChangeRaw,
    ): FieldValueChange {
        return {
            ...fieldValueChange,
            changed_at: new Date(fieldValueChange.changed_at),
        }
    }

    /**
     * Returns all field values changes attached to a specific field.
     * Field value changes can be filtered by `action_type`, person, organization, opportunity or `list_entry` by passing in the appropriate parameter.
     */
    async all(
        params: GetFieldValueChangesRequest,
    ): Promise<FieldValueChangeResponse> {
        const response = await this.axios.get<FieldValueChangeResponse>(
            fieldValueChangesUrl(),
            {
                params,
                transformResponse: [
                    ...defaultTransformers(),
                    (json: FieldValueChangeResponseRaw) => {
                        return json.map(
                            FieldValueChanges.transformFieldValueChange,
                        )
                    },
                ],
            },
        )
        return response.data
    }
}
