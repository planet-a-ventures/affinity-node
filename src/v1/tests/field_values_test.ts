import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity, FieldValues } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { fieldValuesUrl } from '../urls.ts'

describe('field_values', () => {
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

    it('can get all', async (t) => {
        const params = { person_id: 38706 }
        mock?.onGet(fieldValuesUrl(), { params }).reply(
            200,
            await getRawFixture('field_values/get_all.raw.response.json'),
        )
        const res = await affinity.fieldValues.all(params)
        await assertSnapshot(t, res)
    })

    it('can create a new field value', async (t) => {
        const data = {
            field_id: 1284,
            entity_id: 38706,
            value: 'Architecture',
        }
        mock?.onPost(fieldValuesUrl()).reply(
            201,
            await getRawFixture('field_values/create.raw.response.json'),
        )
        const res = await affinity.fieldValues.create(data)
        await assertSnapshot(t, res)
    })

    it('can update a field value', async (t) => {
        const data = {
            field_value_id: 20406836,
            value: 'Healthcare',
        }
        mock?.onPut(fieldValuesUrl(data.field_value_id), {
            value: data.value,
        }).reply(
            200,
            await getRawFixture('field_values/update.raw.response.json'),
        )
        const res = await affinity.fieldValues.update(data)
        await assertSnapshot(t, res)
    })

    it('can update a field value with a date ', async (t) => {
        const data = {
            field_value_id: 123456,
            value: new Date(500000000000),
        }
        mock?.onPut(fieldValuesUrl(data.field_value_id), {
            value: data.value.toISOString(),
        }).reply(
            200,
            await getRawFixture('field_values/update2.raw.response.json'),
        )
        const res = await affinity.fieldValues.update(data)
        await assertSnapshot(t, res)
    })

    it('can delete a field value', async (t) => {
        const field_value_id = 20406836
        mock?.onDelete(fieldValuesUrl(field_value_id)).reply(200, {
            success: true,
        })
        const res = await affinity.fieldValues.delete({ field_value_id })
        assertEquals(res, true)
    })
})
