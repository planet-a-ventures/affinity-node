import { enumFromValue } from './enum_from_value.ts'
import { errorTransformer } from './error_transformer.ts'
import type Affinity from './index.ts'

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

type WhoAmIResponseRaw = {
    tenant: {
        id: number
        name: string
        subdomain: string
    }
    user: {
        id: number
        firstName: string
        lastName: string
        email: string
    }
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
    tenant: WhoAmIResponseRaw['tenant']
    /**
     * Data about the user whose api key was used for the endpoint.
     */
    user: WhoAmIResponseRaw['user']
    /**
     * Data about the type of authentication and metadata about the api key.
     */
    grant: {
        type: GrantType
        scope: Scope
        createdAt: Date
    }
}

/**
 * Gets information about the user sending the request, and their affiliate company.
 * There are no query or path parameters for this method. The information needed is contained within the API key.
 *
 * See https://api-docs.affinity.co/#the-whoami-resource
 */
export async function whoAmI(this: Affinity): Promise<WhoAmIResponse> {
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
