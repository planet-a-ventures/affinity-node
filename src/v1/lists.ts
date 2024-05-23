import type { AxiosInstance } from 'axios'
import { ListEntries } from './list_entries.ts'
import { listsUrl } from './urls.ts'
import { ListEntries } from './list_entries.ts'
import { listsUrl } from './urls.ts'

export enum ListType {
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
    type: ListType

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

export type CreateQuery = {
    /**
     * The title of the list that is displayed in Affinity.
     */
    name: string

    /**
     * The type of the entities (people, organizations, or opportunities) contained within the list.
     * Each list only supports one entity type.
     */
    type: ListType

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

export type Field =
    & {
        id: number
        name: string
        value_type: FieldValueType
        allows_multiple: boolean
    }
    & ({
        value_type: FieldValueType.RANKED_DROPDOWN
        dropdown_options: {
            id: number
            text: string
            rank: number
            color: number
        }[]
    } | {
        value_type: Exclude<FieldValueType, FieldValueType.RANKED_DROPDOWN>
        dropdown_options: []
    })

export type SingleListResponse = BaseListResponse & {
    fields: Field[]
}

export type GetQuery = {
    /** The unique ID of the list object to be retrieved. */
    listId: number
}

export class Lists {
    /** @hidden */
    constructor(protected readonly api: AxiosInstance) {
        this.entries = new ListEntries(this.api)
    }

    /**
     * Returns a collection of all the lists visible to you.
     *
     * @returns An array of all the list resources for lists visible to you. Each list resource in the array includes the id, name, and type (refer to the list resource above for further help).
     */
    async all(): Promise<ListResponse[]> {
        return (await this.api.get<ListResponse[]>(listsUrl())).data
    }

    /**
     * Creates a new list with the specified properties.
     *
     * @returns The newly created list resource.
     */
    async create(query: CreateQuery): Promise<SingleListResponse> {
        return (await this.api.post<SingleListResponse>(listsUrl(), query)).data
    }

    /**
     * Gets the details for a specific list given the existing list id.
     *
     * @returns The details of the list resource corresponding to the list ID specified in the path parameter.
     * These details include an array of the fields that are specific to this list.
     * An appropriate error is returned if an invalid list is supplied.
     */
    async get(query: GetQuery): Promise<SingleListResponse> {
        return (await this.api.get<SingleListResponse>(listsUrl(query.listId)))
            .data
    }

    public readonly entries: ListEntries
}
