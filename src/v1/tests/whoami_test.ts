import { assertInstanceOf } from '@std/assert/mod.ts'
import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'

describe('whoami', () => {
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

    it('can be called', async (t) => {
        mock?.onGet('/auth/whoami').reply(
            200,
            await getRawFixture('whoami/whoami.raw.response.json'),
        )
        const res = await affinity.whoAmI.get()
        assertInstanceOf(res.grant.createdAt, Date)
        await assertSnapshot(t, res)
    })
})
