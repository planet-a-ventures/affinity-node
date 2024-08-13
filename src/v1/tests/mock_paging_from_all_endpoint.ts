import { assert } from '@std/assert'
import MockAdapter from 'axios-mock-adapter'
import type { AllNotesRequest } from '../notes.ts'
import { PagedRequest } from '../paged_request.ts'

/**
 * This mocks a paged request from an all endpoint. It sets up the mock to return the pages sequentially, each referencing the one after.
 */
export async function mockPagingFromAllEndpoint<
    REQUEST_T extends PagedRequest,
    ALL_RESPONSE_T,
>(
    pathToAllResponse: string,
    request: REQUEST_T,
    key: keyof ALL_RESPONSE_T,
    urlGenerator: () => string,
    mock?: MockAdapter,
) {
    if (!mock) {
        // nothing to do for us
        return
    }
    // set up pages sequentially, each referencing the one after
    const json = await import(
        pathToAllResponse,
        {
            with: {
                type: 'json',
            },
        }
    )
    const response: ALL_RESPONSE_T = json.default

    let arr
    if (Array.isArray(response)) {
        // asymmetric API
        arr = response
    } else {
        assert(
            Array.isArray(response[key]),
            `key  '${String(key)}' must contain an array`,
        )
        arr = response[key]
    }
    assert(request.page_size, 'page_size must be set')

    const url = urlGenerator()
    let previous_page_token: string | null = null
    // TODO(@joscha): this code currently only works for page_size 1
    for (let i = 0; i <= arr.length; i += request.page_size) {
        const chunk = arr.slice(i, i + request.page_size)
        const data: AllNotesRequest = {
            ...request,
        }
        if (previous_page_token) {
            data.page_token = previous_page_token
        }
        const mockResponse = {
            [key]: chunk,
            next_page_token: chunk.length ? `page_token_${i}` : null,
        }

        // console.log('Setting up page', url, data, mockResponse)
        mock?.onGet(url, {
            params: data,
        }).reply(
            200,
            mockResponse,
        )

        previous_page_token = mockResponse.next_page_token
    }
}
