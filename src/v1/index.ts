import axios, { type AxiosInstance } from 'axios'
import { WhoAmI } from './whoami.ts'
import { RateLimit } from './rate_limit.ts'
import { Lists } from './lists.ts'
import { AffinityApiError } from './errors.ts'
export type * as Lists from './lists.ts'
export type * as RateLimit from './rate_limit.ts'
export type * as WhoAmI from './whoami.ts'
export { FieldValueType, ListType, RoleId } from './lists.ts'
export { AffinityApiError } from './errors.ts'

export class Affinity {
    protected readonly api: AxiosInstance

    /**
     * @param apiKey The Affinity API key. [How to get yours](https://support.affinity.co/hc/en-us/articles/360032633992-How-to-obtain-your-API-Key).
     * @param axiosInstance An axios instance. You can use the default axios instance or bring your own. If you bring your own, it won't be reconfigured.
     */
    constructor(
        apiKey: string,
        axiosInstance?: AxiosInstance,
    ) {
        this.api = axiosInstance || axios.create({
            baseURL: 'https://api.affinity.co',
            headers: {
                'X-Requested-With': '@planet-a/affinity-node',
            },
            auth: {
                username: '',
                password: apiKey,
            },
        })
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                return Promise.reject(new AffinityApiError(error))
            },
        )
        this.lists = new Lists(this.api)
        this.rateLimit = new RateLimit(this.api)
        this.whoAmI = new WhoAmI(this.api)
    }

    public readonly whoAmI: WhoAmI

    public readonly rateLimit: RateLimit

    public readonly lists: Lists
}
