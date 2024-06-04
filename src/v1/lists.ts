import type { AxiosInstance } from 'axios'
import { ListEntries } from './list_entries.ts'
import { listsUrl } from './urls.ts'
import { Branded } from './brand.ts'

export enum EntityType {
    /** Type specifying a list of people. */
    PERSON = 0,
    /** Type specifying a list of organizations. */
    ORGANIZATION = 1,
    /** Type specifying a list of opportunities. */
    OPPORTUNITIES = 8,
}

/**
 * See [here](https://support.affinity.co/hc/en-us/articles/360029432951-List-Level-Permissions) for details on the permissions held by these roles.
 */
export enum RoleId {
    /** List-level `Admin` role */
    ADMIN = 0,
    /** List-level `Basic` role */
    BASIC = 1,
    /** List-level `Standard` role */
    STANDARD = 2,
}

export type BaseListResponse = {
    /**
     * The unique identifier of the list object.
     */
    id: number

    /**
     * The type of the entities (people, organizations, or opportunities) contained within the list.
     * Each list only supports one entity type.
     */
    type: EntityType

    /**
     * The title of the list that is displayed in Affinity.
     */
    name: string

    /**
     * When true, the list is publicly accessible to all users in your Affinity account.
     * When false, the list is private to the list's owner and (explicitly set) additional users.
     */
    public: boolean

    /**
     * The unique ID of the internal person who owns the list.
     * See [here](https://support.affinity.co/hc/en-us/articles/360029432951-List-Level-Permissions) for permissions held by a list's owner.
     */
    owner_id: number

    /**
     * The number of list entries contained within the list.
     */
    list_size: number
}

export type ListPermission = {
    internal_person_id: number
    role_id: RoleId
}

export type ListResponse = BaseListResponse & {
    /**
     * The unique ID of the internal person who created the list.
     * If the list was created via API, this is the internal person corresponding to the API key that was used.
     */
    creator_id: number

    /**
     * A list of additional internal persons and the permissions they have on the list.
     */
    additional_permissions: ListPermission[]
}

export type ListCreateParameters = {
    /**
     * The title of the list that is displayed in Affinity.
     */
    name: string

    /**
     * The type of the entities (people, organizations, or opportunities) contained within the list.
     * Each list only supports one entity type.
     */
    type: EntityType

    /**
     * Set to true to make the list publicly accessible to all users in your Affinity account.
     * Set to false to make the list private to the list's owner and additional users.
     */
    is_public: boolean

    /**
     * The unique ID of the internal person who should own the list.
     * Defaults to the owner of the API key being used.
     * See [here](https://support.affinity.co/hc/en-us/articles/360029432951-List-Level-Permissions) for permissions held by a list's owner.
     */
    owner_id?: number

    /**
     * A list of additional internal persons and the permissions they should have on the list.
     */
    additional_permissions?: ListPermission[]
}

/**
 * All the Types listed below can be referred through looking at the Affinity web app as well.
 *
 * *Notes*: The API currently does not support updating and modifying fields. This must be done through the web product.
 */
export enum FieldValueType {
    /**
     * This type enables you to add person objects as a value.
     * Eg: External Source, Owner, Friends
     */
    PERSON = 0,

    /**
     * This type enables you to add organization objects as a value.
     * Eg: Place of work, Co-Investors
     */
    ORGANIZATION = 1,

    /**
     * This type allows you to add text values into a single cell.
     * This is best used when you want to store information that is unique to a person or organization.
     * Eg: Interests, Stage, Industry
     */
    DROPDOWN = 2,

    /**
     * This type enables you to add number as a value.
     * Eg: Deal Size, Check Size, Revenue
     */
    NUMBER = 3,

    /**
     * This type enables you to add date as a value.
     * Eg: Date of Event, Birthday
     */
    DATE = 4,

    /**
     * This type enables you to add a smart Google Maps location as a value.
     * Eg: Address
     */
    LOCATION = 5,

    /**
     * This type enables you to add a long text block as a value. Eg: Summary
     */
    TEXT = 6,

    /**
     * This type allows you to add values in a particular order as well as assign colors to them.
     * This is the equivalent of a pick list.
     * Eg: Status, Priority, Ranking
     */
    RANKED_DROPDOWN = 7,
}

export type DropdownOption = {
    id: number
    text: string
    rank: number
    color: number
}

/**
 * Represents a field in a list.
 *
 * Each field object has a unique `id`. It also has a `name`, which determines the name of the field, and `allows_multiple`, which determines whether multiple values can be added to a single cell for that field.
 *
 * Affinity is extremely flexible and customizable, and a lot of that power comes from our ability to support many different value types for fields. Numbers, dates, and locations are all examples of value types, and you can search, sort, or filter all of them.
 */
export type Field =
    & {
        /**
         * The unique identifier of the field object.
         */
        id: number

        /**
         * The name of the field.
         */
        name: string

        /**
         * The unique identifier of the list that the field object belongs to if it is specific to a list. This is null if the field is global.
         */
        list_id: number | null

        /**
         * This determines whether multiple values can be added to a single cell for the field.
         */
        allows_multiple: boolean

        /**
         * This field describes what values can be associated with the field. This can be one of many values, as described in the table below.
         */
        value_type: FieldValueType

        /**
         * The data source for the enriched field. Will appear as none for custom fields and certain list-specific fields (e.g. Status). Fields auto-created for certain integrations will also be called out here (e.g. Mailchimp).
         *
         * TODO(@joscha): This is currently modeled as a string, but should probably be an enum. Going by [this](https://www.affinity.co/product/data-enrichment#pitchbook-data) there should possibly also be a "pitchbook" value.
         */
        enrichment_source:
            | string
            | Branded<string, 'none'>
            | Branded<string, 'crunchbase'>
            | Branded<string, 'dealroom'>
            | Branded<string, 'affinity-data'>

        /**
         * Whether this field supports historical tracking.
         * See {@link FieldValueChanges} for more information.
         */
        track_changes: boolean
    }
    & ({
        /**
         * Represents a field of type "Ranked Dropdown".
         */
        value_type: FieldValueType.RANKED_DROPDOWN

        /**
         * Affinity supports pre-entered dropdown options for fields of the "Ranked Dropdown" value_type. The array is empty unless there are valid dropdown options for the field of the "Ranked Dropdown" value type.
         */
        dropdown_options: DropdownOption[]
    } | {
        /**
         * Represents a field of type other than "Ranked Dropdown".
         */
        value_type: Exclude<FieldValueType, FieldValueType.RANKED_DROPDOWN>

        /**
         * The array of dropdown options is empty for fields of type other than "Ranked Dropdown".
         */
        dropdown_options: never[]
    })

export type SingleListResponse = BaseListResponse & {
    fields: Field[]
}

export type GetQuery = {
    /** The unique ID of the list object to be retrieved. */
    list_id: number
}

/**
 * @module
 */
export class Lists {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
        this.entries = new ListEntries(this.axios)
    }

    /**
     * Returns a collection of all the lists visible to you.
     *
     * @returns An array of all the list resources for lists visible to you. Each list resource in the array includes the id, name, and type.
     *
     * @example
     * ```typescript
     * const lists = await affinity.lists.all()
     * console.log(`The first of ${lists.length} list is named`, lists?.[0].name)
     * ```
     */
    async all(): Promise<ListResponse[]> {
        const response = await this.axios.get<ListResponse[]>(listsUrl())
        return response.data
    }

    /**
     * Creates a new list with the specified properties.
     *
     * @returns The newly created list resource.
     *
     * @example
     * ```typescript
     * const list = await affinity.lists.create({
     *     name: 'My List of Organizations',
     *     type: ListType.ORGANIZATION,
     *     is_public: true,
     * })
     * console.log('The ID of the newly created list is', list.id)
     * ```
     */
    async create(query: ListCreateParameters): Promise<SingleListResponse> {
        const response = await this.axios.post<SingleListResponse>(
            listsUrl(),
            query,
        )
        return response.data
    }

    /**
     * Gets the details for a specific list given the existing list id.
     *
     * @returns The details of the list resource corresponding to the list ID specified in the path parameter.
     * These details include an array of the fields that are specific to this list.
     * An appropriate error is returned if an invalid list is supplied.
     *
     * @example
     * ```typescript
     * const list = await affinity.lists.get({ list_id: 123 })
     * console.log('The name of the list is', list.name)
     * ```
     */
    async get(query: GetQuery): Promise<SingleListResponse> {
        const response = await this.axios.get<SingleListResponse>(
            listsUrl(query.list_id),
        )
        return response.data
    }

    public readonly entries: ListEntries
}
