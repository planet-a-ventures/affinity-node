import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'

describe('rate_limit', () => {
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
        mock?.onGet('/rate-limit').reply(
            200,
            await getRawFixture('rate_limit/rate_limit.raw.response.json'),
        )
        const res = await affinity.rateLimit.get()
        await assertSnapshot(t, res)
    })
})
