import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { Affinity } from '../index.ts'
import { assertRejects } from '@std/assert'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { AffinityApiError } from '../errors.ts'
import { whoAmIUrl } from '../urls.ts'

describe('error handling', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        // see https://github.com/ctimmerm/axios-mock-adapter/issues/400
        // deno-lint-ignore no-explicit-any
        mock = new MockAdapter(axios as any)
        affinity = new Affinity('api_key')
    })
    afterEach(() => {
        mock.reset()
    })

    it('can handle 401', async () => {
        mock.onGet(whoAmIUrl()).reply(401, { valid: 'json' })
        await assertRejects(
            () => affinity.auth.whoAmI(),
            AffinityApiError,
        )
    })
})
