import type { PagedResponse } from './paged_response.ts'
import type { PagedRequest } from './paged_request.ts'

// TODO(@joscha): this is a mess, simplify types here whilst preserving the required paged request/response types
export const createSearchIteratorFn = <
    FN extends (r: PAGED_REQUEST) => Promise<PAGED_RESPONSE>,
    PAGED_REQUEST extends PagedRequest,
    PAGED_RESPONSE extends
        & PagedResponse
        & Record<PAYLOAD_KEY, SINGLE_RESPONSE[]>,
    PAYLOAD_KEY extends string =
        & keyof Omit<PAGED_RESPONSE, keyof PagedResponse>
        & string,
    SINGLE_RESPONSE = object,
>(searchFn: FN, key: PAYLOAD_KEY) => {
    type Single = ReturnType<FN> extends Promise<infer T> ? T : never
    type Unwrapped = Single extends { [key in PAYLOAD_KEY]: infer T } ? T
        : never
    async function* searchIterator(
        params:
            & Omit<Parameters<FN>[0], keyof PagedRequest>
            & Omit<PAGED_REQUEST, 'page_token'>,
    ): AsyncGenerator<Unwrapped> {
        let page_token: string | undefined = undefined
        while (true) {
            const response: PAGED_RESPONSE = await searchFn(
                // TODO(@joscha): remove cast
                (page_token ? { ...params, page_token } : params) as Parameters<
                    FN
                >[0],
            )

            // TODO(@joscha): remove cast
            yield response[key] as Unwrapped

            if (response.next_page_token === null) {
                // no more pages to fetch
                return
            } else {
                page_token = response.next_page_token
            }
        }
    }
    return searchIterator
}
