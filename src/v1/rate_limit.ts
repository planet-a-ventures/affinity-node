import type { AxiosInstance } from 'axios'
import { defaultTransformers } from './axios_default_transformers.ts'
import { rateLimitUrl } from './urls.ts'

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
    /** The maximum number of calls for each period. Please note, this can be `Infinity`. */
    limit: number | typeof Infinity
    /** The number of calls remaining before reset. Please note, this can be `Infinity`. */
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

/**
 * @module
 */
export class RateLimit {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    /**
     * The rate limit endpoint allows you to see your monthly account-level and per minute user-level API limits and usage.
     * The monthly account-level call limit resets at the end of each calendar month.
     *
     * More details [here](https://api-docs.affinity.co/#rate-limits).
     *
     * @returns The rate limit resource, a JSON body of data including limits, calls remaining, seconds until reset and call count.
     *
     * @example
     * ```typescript
     * const rateLimit = await affinity.rateLimit.get()
     * console.log(`You have ${rateLimit.rate.org_monthly.remaining} calls left this month.`)
     * ```
     */
    async get(): Promise<RateLimitResponse> {
        const response = await this.axios.get<RateLimitResponse>(
            rateLimitUrl(),
            {
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
            },
        )
        return response.data
    }
}

const unlimitedToNumber = (value: number | 'unlimited') =>
    value === 'unlimited' ? Infinity : value
