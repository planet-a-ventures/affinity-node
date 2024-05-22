import type { AxiosInstance } from 'axios'
import { defaultTransformers } from './axios_default_transformers.ts'

type RateLimitRaw = {
    limit: number | 'unlimited'
    remaining: number | 'unlimited'
    reset: number
    used: number
}

type RateLimitResponseRaw = {
    rate: {
        org_monthly: RateLimitRaw
        api_key_per_minute: RateLimitRaw
    }
}

export type RateLimitBoundary = {
    /** The maximum number of calls for each period. Please note, this can be Infinity. */
    limit: number | typeof Infinity
    /** The number of calls remaining before reset. Please note, this can be Infinity. */
    remaining: number | typeof Infinity
    /** Time in seconds until call count resets. */
    reset: number
    /** The number of calls that have been used. */
    used: number
}

export type RateLimitResponse = {
    /**
     * Type of rate limit.
     */
    rate: {
        /** Monthly rate limit per organization. */
        org_monthly: RateLimitBoundary
        /** Per minute rate limit per API key. */
        api_key_per_minute: RateLimitBoundary
    }
}

export class RateLimit {
    /** @hidden */
    constructor(protected readonly api: AxiosInstance) {
    }

    /**
     * Gets information about the user sending the request, and their affiliate company.
     * There are no query or path parameters for this method. The information needed is contained within the API key.
     *
     * See https://api-docs.affinity.co/#the-whoami-resource
     */
    async get(): Promise<RateLimitResponse> {
        return (await this.api.get<RateLimitResponse>('/rate-limit', {
            transformResponse: [
                ...defaultTransformers(),
                (json: RateLimitResponseRaw) => {
                    return {
                        rate: {
                            org_monthly: {
                                ...json.rate.org_monthly,
                                limit: unlimitedToNumber(
                                    json.rate.org_monthly.limit,
                                ),
                                remaining: unlimitedToNumber(
                                    json.rate.org_monthly.remaining,
                                ),
                            },
                            api_key_per_minute: {
                                ...json.rate.api_key_per_minute,
                                limit: unlimitedToNumber(
                                    json.rate.api_key_per_minute.limit,
                                ),
                                remaining: unlimitedToNumber(
                                    json.rate.api_key_per_minute.remaining,
                                ),
                            },
                        },
                    }
                },
            ],
        })).data
    }
}

const unlimitedToNumber = (value: number | 'unlimited') =>
    value === 'unlimited' ? Infinity : value
