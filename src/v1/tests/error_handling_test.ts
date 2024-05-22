import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'
import { Affinity } from '../index.ts'
import { assertRejects } from '@std/assert/mod.ts'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { AffinityApiError } from '../errors.ts'

describe('error handling', () => {
    let mock: MockAdapter
    let affinity: Affinity

    beforeEach(() => {
        mock = new MockAdapter(axios)
        affinity = new Affinity('api_key')
    })
    afterEach(() => {
        mock.reset()
    })

    it('can handle 401', async () => {
        mock.onGet('/auth/whoami').reply(401)
        await assertRejects(
            () => affinity.whoAmI.get(),
            AffinityApiError,
        )
    })
})
