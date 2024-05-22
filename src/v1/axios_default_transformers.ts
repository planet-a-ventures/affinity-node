import axios, { AxiosResponseTransformer } from 'axios'

export const defaultTransformers = (): AxiosResponseTransformer[] => {
    const { transformResponse = [] } = axios.defaults
    return Array.isArray(transformResponse)
        ? transformResponse
        : [transformResponse]
}
