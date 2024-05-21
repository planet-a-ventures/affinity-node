import { type AxiosResponseTransformer } from 'axios'

export class HttpError extends Error {
    constructor(public readonly statusCode: number) {
        super(`Request failed with status ${statusCode}`)
    }
}

export const errorTransformer: AxiosResponseTransformer = function (
    data,
    _,
    status,
) {
    if (status && (status < 200 || status >= 300)) {
        throw new HttpError(status)
    }
    return JSON.parse(data) as unknown
}
