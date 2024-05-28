import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { fieldsUrl } from '../urls.ts'

describe('fields', () => {
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

    describe('all', () => {
        it('fetches all fields', async (t) => {
            const fixture = await getRawFixture('fields/all.raw.response.json')

            mock.onGet(fieldsUrl()).reply(200, fixture)

            const res = await affinity.fields.all()
            await assertSnapshot(t, res)
        })
    })
})
