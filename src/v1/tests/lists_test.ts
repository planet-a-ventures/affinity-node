import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity, EntityType } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { listsUrl } from '../urls.ts'

describe('lists', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        if (!isLiveRun()) {
            // see https://github.com/ctimmerm/axios-mock-adapter/issues/400
            // deno-lint-ignore no-explicit-any
            mock = new MockAdapter(axios as any)
        }
        affinity = new Affinity(apiKey() || 'api_key')
    })
    afterEach(() => {
        mock?.reset()
    })

    it('can get all', async (t) => {
        mock?.onGet(listsUrl()).reply(
            200,
            await getRawFixture('lists/all.raw.response.json'),
        )
        const res = await affinity.lists.all()
        await assertSnapshot(t, res)
    })

    it('can get one', async (t) => {
        const list_id = 123
        mock?.onGet(listsUrl(list_id)).reply(
            200,
            await getRawFixture('lists/single.raw.response.json'),
        )
        const res = await affinity.lists.get({ list_id })
        await assertSnapshot(t, res)
    })

    it('can create', async (t) => {
        mock?.onPost(listsUrl()).reply(
            201,
            await getRawFixture('lists/create.raw.response.json'),
        )
        const res = await affinity.lists.create({
            name: 'My List of Organizations',
            type: EntityType.ORGANIZATION,
            is_public: true,
        })
        await assertSnapshot(t, res)
    })
})
