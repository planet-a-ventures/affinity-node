import { assert, assertEquals } from '@std/assert'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { assertSnapshot } from '@std/testing/snapshot'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { entityFilesUrl } from '../urls.ts'
import { apiKey, isLiveRun } from './env.ts'
import { getRawFixture, readFixtureFile } from './get_raw_fixture.ts'
import { buffer } from 'node:stream/consumers'
import { Buffer } from 'jsr:@std/io/buffer'

const multipartFormDataHeaderMatcher = {
    asymmetricMatch: (headers: Record<string, string>) => {
        assertEquals(headers['Content-Type'], 'multipart/form-data')
        return true
    },
}

const createSnapshotBodyMatcher = (t: Deno.TestContext) => ({
    asymmetricMatch: async (reqBody: FormData) => {
        const data: Record<string, unknown> = Object.fromEntries(
            reqBody.entries(),
        )
        if (reqBody.has('files[]')) {
            // normal serialization overwrites duplicated keys, so we need to handle this case
            data['files[]'] = reqBody.getAll('files[]')
        }
        await assertSnapshot(t, data)
        return true
    },
})

describe('persons', () => {
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

    it('can list all files', async (t) => {
        mock?.onGet(entityFilesUrl()).reply(
            200,
            await getRawFixture('entity_files/all.raw.response.json'),
        )
        const res = await affinity.entityFiles.all()
        await assertSnapshot(t, res)
    })

    it('can upload a file', async (t) => {
        mock
            ?.onPost(
                entityFilesUrl(),
                createSnapshotBodyMatcher(t),
                multipartFormDataHeaderMatcher,
            )
            .reply(
                200,
                { success: true },
            )
        const res = await affinity.entityFiles.upload({
            person_id: 170614434,
            files: [
                new File(
                    [
                        await readFixtureFile('./entity_files/test.pdf'),
                    ],
                    'test.pdf',
                ),
            ],
        })
        assert(res)
    })

    it('can upload multiple files', async (t) => {
        mock
            ?.onPost(
                entityFilesUrl(),
                createSnapshotBodyMatcher(t),
                multipartFormDataHeaderMatcher,
            )
            .reply(
                200,
                { success: true },
            )
        const res = await affinity.entityFiles.upload({
            person_id: 170614434,
            files: [
                new File(
                    [await readFixtureFile('./entity_files/test.pdf')],
                    'test1.pdf',
                ),
                new File(
                    [await readFixtureFile('./entity_files/test.pdf')],
                    'test2.pdf',
                ),
            ],
        })
        assert(res)
    })

    it.only('can download a file', async (t) => {
        // mock?.onGet(entityFilesUrl(6534776, true)).reply(
        //     200,
        //     await readFixtureFile('./entity_files/test.pdf'),
        // )
        const stream = await affinity.entityFiles.download(6534776)
        const buf: ArrayBuffer = await buffer(stream)
        const pdfContents = await readFixtureFile('./entity_files/test.pdf')
        const expected = new Buffer()
        expected.read(pdfContents)
        assertEquals(new Buffer(buf), expected)
    })
})
