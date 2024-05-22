import { type AxiosResponseTransformer } from 'axios'

/**
 * TODO(@joscha): incorporate https://api-docs.affinity.co/#authentication into the error message.
 */
export class HttpError extends Error {
    /**
     * @param statusCode The HTTP status code of the failed request.
     */
    constructor(public readonly statusCode: number) {
        super(
            `Request failed with status ${statusCode}. See https://api-docs.affinity.co/#authentication for more information.`,
        )
    }
}

/**
 * @internal
 * @param data Checks if a given Axios response was successful (status code 2xx). If yes, parses the response as JSON; If not, throws an HttpError.
 * @returns Parsed JSON data
 */
export const errorTransformer: AxiosResponseTransformer = (
    data,
    _,
    status,
) => {
    if (status && (status < 200 || status >= 300)) {
        throw new HttpError(status)
    }
    return JSON.parse(data) as unknown
}
