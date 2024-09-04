import axios, { type AxiosInstance } from 'axios'
import { Auth } from './auth.ts'
import { RateLimit } from './rate_limit.ts'
import { Lists } from './lists.ts'
import { Fields } from './fields.ts'
import { FieldValues } from './field_values.ts'
import { FieldValueChanges } from './field_value_changes.ts'
import { Organizations } from './organizations.ts'
import { Persons } from './persons.ts'
import { EntityFiles } from './entity_files.ts'
import { Notes } from './notes.ts'
export type * as ListEntries from './list_entries.ts'
export type * as Lists from './lists.ts'
export type * as Fields from './fields.ts'
export type * as RateLimit from './rate_limit.ts'
export type * as WhoAmI from './auth.ts'
export type * as FieldValues from './field_values.ts'
export type * as FieldValueChanges from './field_value_changes.ts'
export type * as Organizations from './organizations.ts'
export type * as Persons from './persons.ts'
export type * as EntityFiles from './entity_files.ts'
export type * as Notes from './notes.ts'
export type * as PagedRequest from './paged_request.ts'
export type * as PagedResponse from './paged_response.ts'
export type * as Types from './types.ts'
export type * as CreateSearchIteratorFn from './create_search_iterator_fn.ts'
export { EntityType, FieldValueType, RoleId } from './lists.ts'
export { AffinityApiError } from './errors.ts'
export { ActionType } from './field_value_changes.ts'
export type { Brand, Branded } from './brand.ts'
export { PersonType } from './persons.ts'

/**
 * @module
 */
export class Affinity {
    protected readonly axios: AxiosInstance

    /**
     * @param apiKey The Affinity API key. [How to get yours](https://support.affinity.co/hc/en-us/articles/360032633992-How-to-obtain-your-API-Key).
     * @param axiosInstance An axios instance. You can use the default axios instance or bring your own. If you bring your own, it won't be reconfigured.
     */
    constructor(
        apiKey: string,
        axiosInstance?: AxiosInstance,
    ) {
        this.axios = axiosInstance || axios.create()
        this.axios.defaults.headers.common['X-Requested-With'] =
            '@planet-a/affinity-node'
        this.axios.defaults.auth = {
            username: '',
            password: apiKey,
        }
        this.axios.defaults.baseURL = 'https://api.affinity.co'

        this.lists = new Lists(this.axios)
        this.rateLimit = new RateLimit(this.axios)
        this.auth = new Auth(this.axios)
        this.fields = new Fields(this.axios)
        this.fieldValues = new FieldValues(this.axios)
        this.fieldValueChanges = new FieldValueChanges(this.axios)
        this.organizations = new Organizations(this.axios)
        this.persons = new Persons(this.axios)
        this.entityFiles = new EntityFiles(this.axios)
        this.notes = new Notes(this.axios)
    }

    public readonly auth: Auth

    public readonly rateLimit: RateLimit

    public readonly lists: Lists

    public readonly fields: Fields

    public readonly fieldValues: FieldValues

    public readonly fieldValueChanges: FieldValueChanges

    public readonly organizations: Organizations

    public readonly persons: Persons

    public readonly entityFiles: EntityFiles

    public readonly notes: Notes
}
