import { assertInstanceOf } from '@std/assert'
import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { whoAmIUrl } from '../urls.ts'

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
        mock?.onGet(whoAmIUrl()).reply(
            200,
            await getRawFixture('auth/whoami/whoami.raw.response.json'),
        )
        const res = await affinity.auth.whoAmI()
        assertInstanceOf(res.grant.createdAt, Date)
        await assertSnapshot(t, res)
    })
})
