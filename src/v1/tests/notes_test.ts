import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { assertSnapshot } from '@std/testing/snapshot'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import type { AllNotesRequest } from '../notes.ts'
import { notesUrl } from '../urls.ts'
import { apiKey, isLiveRun } from './env.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { mockPagingFromAllEndpoint } from './mock_paging_from_all_endpoint.ts'

describe('notes', () => {
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

    it('can list all notes', async (t) => {
        mock?.onGet(notesUrl()).reply(
            200,
            await getRawFixture('notes/all.raw.response.json'),
        )
        const res = await affinity.notes.all({
            organization_id: 297551634,
        })
        await assertSnapshot(t, res)
    })

    it('iterates over all notes', async (t) => {
        const params: AllNotesRequest = {
            organization_id: 297551634,
            page_size: 1,
        }

        await mockPagingFromAllEndpoint(
            './fixtures/notes/all.raw.response.json',
            params,
            'notes',
            notesUrl,
            mock,
        )

        let page = 0
        for await (
            const entries of affinity.notes.pagedIterator(params)
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of notes`,
            })
        }
    })
})
