import { AxiosInstance } from 'axios'
import { enumFromValue } from './enum_from_value.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import { whoAmIUrl } from './urls.ts'

/**
 * TODO(@joscha): Enum is most likely incomplete
 */
export enum GrantType {
    API_KEY = 'api_key',
}

/**
 * TODO(@joscha): Enum is most likely incomplete
 */
export enum Scope {
    EXTERNAL_API = 'external_api',
}

export type Tenant = {
    /** Tenant ID; unrelated to any entity the current Affinity instance */
    id: number
    name: string
    /** `https://<subdomain>.affinity.co` */
    subdomain: string
}

export type User = {
    /** User ID; This is also the ID of the person in the current Affinity instance.
     * E.g. you can use it to get the person via `https://<subdomain>.affinity.co/persons/<id>`
     */
    id: number
    firstName: string
    lastName: string
    /** The primary email of the user */
    email: string
}

type WhoAmIResponseRaw = {
    tenant: Tenant
    user: User
    grant: {
        type: string
        scope: string
        createdAt: string
    }
}

export type WhoAmIResponse = {
    /**
     * Information about the Affinity instance the user belongs to.
     */
    tenant: Tenant
    /**
     * Data about the user whose API key was used for the endpoint.
     */
    user: User
    /**
     * Data about the type of authentication and metadata about the API key.
     */
    grant: {
        type: GrantType
        scope: Scope
        createdAt: Date
    }
}

/**
 * @module
 */
export class Auth {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    /**
     * Gets information about the user sending the request, and their affiliate company.
     * There are no query or path parameters for this method. The information needed is contained within the API key.
     *
     * [More information](https://api-docs.affinity.co/#the-whoami-resource)
     */
    async whoAmI(): Promise<WhoAmIResponse> {
        const response = await this.axios.get<WhoAmIResponse>(whoAmIUrl(), {
            transformResponse: [
                ...defaultTransformers(),
                (json: WhoAmIResponseRaw) => {
                    return {
                        ...json,
                        grant: {
                            createdAt: new Date(json.grant.createdAt),
                            // TODO(@joscha): when the API is complete, throw here on undefined values
                            type: enumFromValue(json.grant.type, GrantType),
                            // TODO(@joscha): when the API is complete, throw here on undefined values
                            scope: enumFromValue(json.grant.scope, Scope),
                        },
                    }
                },
            ],
        })
        return response.data
    }
}
