import axios, { type AxiosInstance } from 'axios'
import { whoAmI } from './whoami.ts'
import { rateLimit } from './rate_limit.ts'
import { lists } from './lists.ts'
export type { GrantType, Scope, WhoAmIResponse } from './whoami.ts'
export { HttpError } from './error_transformer.ts'

export default class Affinity {
    protected readonly api: AxiosInstance

    /**
     * @param axios An axios instance. You can use the default axios instance or create a new one.
     * @param apiKey https://support.affinity.co/hc/en-us/articles/360032633992-How-to-obtain-your-API-Key
     */
    constructor(
        readonly apiKey: string,
        readonly axiosInstance?: AxiosInstance,
    ) {
        this.api = axiosInstance || axios.create({
            baseURL: 'https://api.affinity.co',
            auth: {
                username: '',
                password: apiKey,
            },
        })
    }

    public whoAmI = whoAmI

    public rateLimit = rateLimit

    public lists = lists
}
