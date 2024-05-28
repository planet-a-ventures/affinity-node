import { assertSnapshot } from '@std/testing/snapshot.ts'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd.ts'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { fieldsUrl } from '../urls.ts'
import { FieldCreateParameters } from '../fields.ts'

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

    describe('create', () => {
        it('creates a new field', async (t) => {
            const data: FieldCreateParameters = {
                name: '[Deals] Amount',
                entity_type: 1,
                value_type: 3,
                list_id: 11,
                allows_multiple: false,
                is_list_specific: true,
                is_required: false,
            }
            const fixture = await getRawFixture(
                'fields/create.raw.response.json',
            )

            mock.onPost(fieldsUrl()).reply(201, fixture)

            const res = await affinity.fields.create(data)
            await assertSnapshot(t, res)
        })
    })
})
