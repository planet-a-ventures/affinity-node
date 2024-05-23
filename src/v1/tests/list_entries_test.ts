import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity, ListType } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'

describe('list_entries', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        if (!isLiveRun()) {
            mock = new MockAdapter(axios)
        }
        affinity = new Affinity(apiKey() || 'api_key')
    })
    afterEach(() => {
        mock?.reset()
    })

    it('can get all', async (t) => {
        mock?.onGet('/lists').reply(
            200,
            await getRawFixture('list_entries/all.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({ listId: 247888 })
        await assertSnapshot(t, res)
    })

    it('can get a page', async (t) => {
        mock?.onGet('/lists').reply(
            200,
            await getRawFixture('list_entries/paginated.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({
            listId: 247888,
            page_size: 1,
        })
        await assertSnapshot(t, res)
    })

    it('can get a following page', async (t) => {
        mock?.onGet('/lists').reply(
            200,
            await getRawFixture('list_entries/paginated.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({
            listId: 247888,
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6Mn0',
        })
        await assertSnapshot(t, res)
    })

    it('can deal with a last empty page', async (t) => {
        mock?.onGet('/lists').reply(
            200,
            await getRawFixture('list_entries/paginated.raw.response.json'),
        )
        const res = await affinity.lists.entries.all({
            listId: 247888,
            page_size: 1,
            page_token:
                'eyJwYXJhbXMiOnsibGlzdF9pZCI6IjI0Nzg4OCJ9LCJwYWdlX3NpemUiOjEsIm9mZnNldCI6M30',
        })
        await assertSnapshot(t, res)
    })

    it('iterates over all entries', async (t) => {
        mock?.onGet('/lists').reply(
            200,
            await getRawFixture('list_entries/paginated.raw.response.json'),
        )
        let page = 0
        for await (
            const entries of affinity.lists.entries.pagedIterator({
                listId: 247888,
                page_size: 1,
            })
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of entries`,
            })
        }
    })
})
