import { errorTransformer } from './error_transformer.ts'
import type Affinity from './index.ts'

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
    /** List-level "Admin" role */
    ADMIN = 0,
    /** List-level "Basic" role */
    BASIC = 1,
    /** List-level "Standard" role */
    STANDARD = 2,
}

export type ListResponse = {
    /** The unique identifier of the list object. */
    'id': number
    /**
     * The type of the entities (people, organizations, or opportunities) contained within the list.
     * Each list only supports one entity type.
     */
    'type': ListType
    /** The title of the list that is displayed in Affinity. */
    'name': string
    /**
     * When true, the list is publicly accessible to all users in your Affinity account.
     * When false, the list is private to the list's owner and (explicitly set) additional users.
     */
    'public': boolean
    /**
     * The unique ID of the internal person who owns the list.
     * See [here](https://support.affinity.co/hc/en-us/articles/360029432951-List-Level-Permissions) for permissions held by a list's owner.
     */
    'owner_id': number
    /**
     * The unique ID of the internal person who created the list.
     * If the list was created via API, this is the internal person corresponding to the API key that was used.
     */
    'creator_id': number
    /**
     * The number of list entries contained within the list.
     */
    'list_size': number
    /**
     * The list of additional internal persons with permissions on the list.
     */
    'additional_permissions': {
        'internal_person_id': number
        'role_id': RoleId
    }[]
}

// The raw response from the API and the one we expose are compatible.
type ListResponseRaw = ListResponse

/**
 * Returns a collection of all the lists visible to you.
 *
 * @returns An array of all the list resources for lists visible to you. Each list resource in the array includes the id, name, and type (refer to the list resource above for further help).
 */
export async function lists(this: Affinity): Promise<ListResponse[]> {
    return (await this.api.get<ListResponse[]>('/lists', {
        transformResponse: [
            errorTransformer,
            (json: ListResponseRaw[]) => json,
        ],
    })).data
}
