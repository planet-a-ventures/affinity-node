import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'
import { assertEquals } from '@std/assert/mod.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
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
        const params = { list_id: 247888 }
        const fixture = await getRawFixture(
            'list_entries/all.raw.response.json',
        )
        mock?.onGet(listEntriesUrl(params.list_id)).reply(200, fixture)
        const res = await affinity.lists.entries.all(params)
        await assertSnapshot(t, res)
    })

    it('can get a page', async (t) => {
        const params = {
            page_size: 1,
            list_id: 247888,
        }
        const fixture = await getRawFixture(
            'list_entries/paginated.raw.response.json',
        )
        const { list_id, ...rest } = params
        mock?.onGet(listEntriesUrl(list_id), rest).reply(
            200,
            fixture,
        )
        const res = await affinity.lists.entries.all(params)
        await assertSnapshot(t, res)
    })

    it('can get a following page', async (t) => {
        const params = {
            list_id: 247888,
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6Mn0',
        }
        const fixture = await getRawFixture(
            `list_entries/paginated.${params.page_token}.raw.response.json`,
        )
        const { list_id, ...rest } = params
        mock?.onGet(listEntriesUrl(list_id), rest).reply(
            200,
            fixture,
        )
        const res = await affinity.lists.entries.all(params)
        await assertSnapshot(t, res)
    })

    it('can deal with a last empty page', async (t) => {
        const params = {
            list_id: 247888,
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6M30',
        }
        const fixture = await getRawFixture(
            `list_entries/paginated.${params.page_token}.raw.response.json`,
        )
        const { list_id, ...rest } = params
        mock?.onGet(listEntriesUrl(list_id), rest).reply(
            200,
            fixture,
        )
        const res = await affinity.lists.entries.all(params)
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
            const fixture = await getRawFixture(
                'list_entries/get.raw.response.json',
            )

            mock.onGet(listEntriesUrl(params.list_id, params.list_entry_id))
                .reply(
                    200,
                    fixture,
                )

            const res = await affinity.lists.entries.get(params)
            await assertSnapshot(t, res)
        })
    })

    describe('delete', () => {
        it('deletes a list entry by id', async (t) => {
            const params = { list_id: 450, list_entry_id: 16367 }
            const fixture = JSON.stringify({ success: true })

            mock.onDelete(listEntriesUrl(params.list_id, params.list_entry_id))
                .reply(204, fixture)

            const success = await affinity.lists.entries.delete(params)
            assertEquals(success, true)
        })
    })

    describe('create', () => {
        it('creates a new list entry', async (t) => {
            const params = { list_id: 450, entity_id: 38706, creator_id: 123 }
            const fixture = await getRawFixture(
                'list_entries/create.raw.response.json',
            )

            mock.onPost(listEntriesUrl(params.list_id))
                .reply(201, fixture)

            const res = await affinity.lists.entries.create(params)
            await assertSnapshot(t, res)
        })
    })
})
