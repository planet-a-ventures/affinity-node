import axios, { AxiosResponseTransformer } from 'axios'
import { AffinityApiError } from './errors.ts'

const errorTransformer: AxiosResponseTransformer = (data, headers, status) => {
    if (status && (status < 200 || status >= 300)) {
        throw new AffinityApiError(status, data)
    }
    return data
}

export const defaultTransformers = (): AxiosResponseTransformer[] => {
    const { transformResponse = [] } = axios.defaults
    return Array.isArray(transformResponse)
        ? [...transformResponse, errorTransformer]
        : [transformResponse, errorTransformer]
}
