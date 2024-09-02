import { assert } from '@std/assert'
import { Pagination } from './index.ts'

// deno-lint-ignore no-explicit-any
export type PagedFn<T> = (...params: any[]) => Promise<{
    data: Array<T> | null
    pagination: Pagination
}>

/**
 * Given a function that returns a paged response, return an async generator that yields all pages.
 *
 * @example
 * ```ts
 * const paginatedCompanies = paginated(companiesApi.getV2Companies.bind(companiesApi))
 * for await (const page of paginatedCompanies({ limit: 1 })) {
 *    console.log(page)
 * }
 * ```
 */
export const paginated = <T>(
    pagedFn: PagedFn<T>,
): (...args: Parameters<typeof pagedFn>) => AsyncGenerator<Array<T>> => {
    return async function* (...args: Parameters<typeof pagedFn>) {
        let page = await pagedFn(...args)
        if (!page.data || page.data.length === 0) {
            yield []
            return
        }

        while (page.data && page.data.length > 0) {
            const { data, pagination } = page
            yield data

            if (!pagination.nextUrl) {
                break
            }

            // We could parse all query params here and mix them back in
            // for now we just grab the cursor and keep the others local
            const cursor = new URLSearchParams(
                new URL(pagination.nextUrl).search,
            ).get('cursor')
            assert(cursor, 'Expected cursor to be present')
            const [query, ...rest] = args
            page = await pagedFn({
                ...query || {},
                cursor,
            }, ...rest)
        }
    }
}
