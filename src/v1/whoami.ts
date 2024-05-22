import { AxiosInstance } from 'axios'
import { enumFromValue } from './enum_from_value.ts'
import { errorTransformer } from './error_transformer.ts'

/**
 * TODO(@joscha): most likely incomplete
 */
export enum GrantType {
    API_KEY = 'api_key',
}

/**
 * TODO(@joscha): most likely incomplete
 */
export enum Scope {
    EXTERNAL_API = 'external_api',
}

export type Tenant = {
    id: number
    name: string
    subdomain: string
}

export type User = {
    id: number
    firstName: string
    lastName: string
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
     * Data about the user whose api key was used for the endpoint.
     */
    user: User
    /**
     * Data about the type of authentication and metadata about the api key.
     */
    grant: {
        type: GrantType
        scope: Scope
        createdAt: Date
    }
}

export class WhoAmI {
    /** @hidden */
    constructor(protected readonly api: AxiosInstance) {
    }

    /**
     * Gets information about the user sending the request, and their affiliate company.
     * There are no query or path parameters for this method. The information needed is contained within the API key.
     *
     * See https://api-docs.affinity.co/#the-whoami-resource
     */
    async get(): Promise<WhoAmIResponse> {
        return (await this.api.get<WhoAmIResponse>('/auth/whoami', {
            transformResponse: [
                errorTransformer,
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
        })).data
    }
}
