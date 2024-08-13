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
import type { CreateNoteRequest } from '../notes.ts'
import { NoteType } from '../notes.ts'

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

    it('can get a specific note', async (t) => {
        const note_id = 20423470
        mock?.onGet(notesUrl(note_id)).reply(
            200,
            await getRawFixture('notes/get.raw.response.json'),
        )
        const res = await affinity.notes.get({ note_id })
        await assertSnapshot(t, res)
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

    it('can create a new note', async (t) => {
        const data: CreateNoteRequest = {
            organization_ids: [297551634],
            content: 'This is an <strong>important</strong> note',
            type: NoteType.HTML,
            created_at: new Date('2021-01-01T00:00:00Z'),
        }
        mock?.onPost(notesUrl()).reply(
            201,
            await getRawFixture('notes/create.raw.response.json'),
        )
        const res = await affinity.notes.create(data)
        await assertSnapshot(t, res)
    })

    it('can update a note', async (t) => {
        const data = {
            note_id: 20423298,
            content: 'This is a <strong>super super important</strong> note',
        }
        mock?.onPut(notesUrl(data.note_id)).reply(
            200,
            await getRawFixture('notes/update.raw.response.json'),
        )
        const res = await affinity.notes.update(data)
        await assertSnapshot(t, res)
    })

    it('can delete a note', async (t) => {
        const note_id = 20423298
        mock?.onDelete(notesUrl(note_id)).reply(200, {
            success: true,
        })
        const res = await affinity.notes.delete({ note_id })
        await assertSnapshot(t, res)
    })
})
