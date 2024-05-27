import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity, ListType } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { listEntriesUrl } from '../urls.ts'
import { PagingParameters } from '../list_entries.ts'

describe('list_entries', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        if (!isLiveRun()) {
            mock = new MockAdapter(axios, { onNoMatch: 'throwException' })
        }
        affinity = new Affinity(apiKey() || 'api_key')
    })
    afterEach(() => {
        mock?.reset()
    })

    it('can get all', async (t) => {
        mock?.onGet(listEntriesUrl(247888)).reply(
            200,
            await getRawFixture('list_entries/all.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({ list_id: 247888 })
        await assertSnapshot(t, res)
    })

    it('can get a page', async (t) => {
        const params = {
            page_size: 1,
        }
        const list_id = 247888
        mock?.onGet(listEntriesUrl(list_id), {
            params,
        }).reply(
            200,
            await getRawFixture('list_entries/paginated.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({
            list_id,
            ...params,
        })
        await assertSnapshot(t, res)
    })

    it('can get a following page', async (t) => {
        const params = {
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6Mn0',
        }
        const list_id = 247888
        mock?.onGet(listEntriesUrl(list_id)).reply(
            200,
            await getRawFixture(
                `list_entries/paginated.${params.page_token}.raw.response.json`,
            ),
        )
        const res = await affinity.lists.entries.all({
            list_id,
            ...params,
        })
        await assertSnapshot(t, res)
    })

    it('can deal with a last empty page', async (t) => {
        const params = {
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6M30',
        }
        const list_id = 247888
        mock?.onGet(listEntriesUrl(list_id)).reply(
            200,
            await getRawFixture(
                `list_entries/paginated.${params.page_token}.raw.response.json`,
            ),
        )
        const res = await affinity.lists.entries.all({
            list_id,
            ...params,
        })
        await assertSnapshot(t, res)
    })

    it('iterates over all entries', async (t) => {
        const list_id = 247888
        const page_size = 1
        {
            // set up pages sequentially, each referencing the one after
            const { default: pages } = await import(
                './fixtures/list_entries/paginated.iterator.combined.response.json',
                {
                    with: {
                        type: 'json',
                    },
                }
            )

            pages.forEach((page, i) => {
                const { next_page_token: previous_page_token } = pages[i - 1] ||
                    {}
                const params: PagingParameters = {
                    page_size,
                }
                if (previous_page_token) {
                    params.page_token = previous_page_token
                }
                // console.log('Setting up page', params, page.list_entries)
                mock?.onGet(listEntriesUrl(list_id), {
                    params,
                }).reply(
                    200,
                    page,
                )
            })
        }

        let page = 0
        for await (
            const entries of affinity.lists.entries.pagedIterator({
                list_id,
                page_size,
            })
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of entries`,
            })
        }
    })

    describe('get', () => {
        it('fetches a list entry by id', async (t) => {
            const params = { list_id: 450, list_entry_id: 16367 }

            mock.onGet(listEntriesUrl(params.list_id, params.list_entry_id))
                .reply(
                    200,
                    await getRawFixture('list_entries/get.raw.response.json'),
                )

            const res = await affinity.lists.entries.get(params)
            await assertSnapshot(t, res)
        })
    })
})
