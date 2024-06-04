import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity, FieldValueChanges } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { fieldValueChangesUrl } from '../urls.ts'
import { GetFieldValueChangesRequest } from '../field_value_changes.ts'

describe('field_value_changes', () => {
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

    it('can get all field value changes', async (t) => {
        const params: GetFieldValueChangesRequest = {
            field_id: 236333,
            list_entry_id: 15709964,
        }
        mock?.onGet(fieldValueChangesUrl(), { params }).reply(
            200,
            await getRawFixture('field_value_changes/all.raw.response.json'),
        )
        const res = await affinity.fieldValueChanges.all(params)
        await assertSnapshot(t, res)
    })
})
