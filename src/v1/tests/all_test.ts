import { assertInstanceOf } from '@std/assert/mod.ts'
import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'
import * as path from '@std/path/mod.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Affinity from '../index.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))
const apiKey = Deno.env.get('API_KEY')
const isLiveRun = typeof apiKey !== 'undefined'

async function getRawFixture(filePath: string) {
    return await Deno.readTextFile(path.join(__dirname, 'fixtures', filePath))
}

describe('Affinity', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        if (!isLiveRun) {
            mock = new MockAdapter(axios)
        }
        affinity = new Affinity(apiKey || 'api_key')
    })
    afterEach(() => {
        mock?.reset()
    })

    describe('whoami', () => {
        it('can be called', async (t) => {
            mock?.onGet('/auth/whoami').reply(
                200,
                await getRawFixture('whoami.raw.response.json'),
            )
            const res = await affinity.whoAmI()

            assertInstanceOf(res.grant.createdAt, Date)
            await assertSnapshot(t, res, {
                path: '__snapshots__/whoami.ts.snap',
            })
        })
    })

    describe('rate_limit', () => {
        it('can be called', async (t) => {
            mock?.onGet('/rate-limit').reply(
                200,
                await getRawFixture('rate_limit.raw.response.json'),
            )
            const res = await affinity.rateLimit()
            await assertSnapshot(t, res, {
                path: '__snapshots__/rate_limit.ts.snap',
            })
        })
    })

    describe('lists', () => {
        it('can get all', async (t) => {
            mock?.onGet('/lists').reply(
                200,
                await getRawFixture('lists.all.raw.response.json'),
            )
            const res = await affinity.lists.all()
            await assertSnapshot(t, res, {
                path: '__snapshots__/lists.ts.snap',
            })
        })

        it('can get one', async (t) => {
            mock?.onGet('/lists/123').reply(
                200,
                await getRawFixture('lists.single.raw.response.json'),
            )
            const res = await affinity.lists.get(123)
            await assertSnapshot(t, res, {
                path: '__snapshots__/lists.ts.snap',
            })
        })
    })
})
