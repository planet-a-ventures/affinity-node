import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { listEntriesUrl } from '../urls.ts'
import { PagingParameters } from '../list_entries.ts'
import { mockPagingFromAllEndpoint } from './mock_paging_from_all_endpoint.ts'

describe('list_entries', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        if (!isLiveRun()) {
            // see https://github.com/ctimmerm/axios-mock-adapter/issues/400
            // deno-lint-ignore no-explicit-any
            mock = new MockAdapter(axios as any, {
                onNoMatch: 'throwException',
            })
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

    it('iterates over all entries', async (t) => {
        const list_id = 247888
        const page_size = 1

        await mockPagingFromAllEndpoint(
            './fixtures/list_entries/all.raw.response.json',
            {
                page_size,
            },
            'list_entries',
            () => listEntriesUrl(list_id),
            mock,
        )

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
