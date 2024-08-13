import { assert, assertEquals } from '@std/assert'
import * as path from '@std/path'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import { assertSnapshot } from '@std/testing/snapshot'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Buffer } from 'jsr:@std/io/buffer'
import { Readable } from 'node:stream'
import { buffer } from 'node:stream/consumers'
import { AllEntityFileRequest } from '../entity_files.ts'
import { Affinity } from '../index.ts'
import { entityFilesUrl } from '../urls.ts'
import { apiKey, isLiveRun } from './env.ts'
import { getRawFixture, readFixtureFile } from './get_raw_fixture.ts'
import { mockPagingFromAllEndpoint } from './mock_paging_from_all_endpoint.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const multipartFormDataHeaderMatcher = {
    headers: {
        asymmetricMatch: (headers: Record<string, string>) => {
            assertEquals(headers['Content-Type'], 'multipart/form-data')
            return true
        },
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

describe('entityFiles', () => {
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
        const res = await affinity.entityFiles.all({
            person_id: 170614434,
        })
        await assertSnapshot(t, res)
    })

    it('can get a single file', async (t) => {
        mock?.onGet(entityFilesUrl(131)).reply(
            200,
            await getRawFixture('entity_files/get.raw.response.json'),
        )
        const res = await affinity.entityFiles.get(131)
        await assertSnapshot(t, res)
    })

    it('can upload files from path', async (t) => {
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
        const localPath = path.join(
            __dirname,
            'fixtures',
            'entity_files',
            'test.pdf',
        )
        const res = await affinity.entityFiles.upload({
            person_id: 170614434,
            files: [
                localPath,
            ],
        })
        assert(res)
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

    it('can download a file', async (t) => {
        const pdfContents = await readFixtureFile('./entity_files/test.pdf')

        mock?.onGet(entityFilesUrl(6534776, true)).reply(
            200,
            readableFromArray(pdfContents),
        )

        const stream = await affinity.entityFiles.download(6534776)
        const buf: ArrayBuffer = await buffer(stream)

        const expected = new Buffer()
        expected.read(pdfContents)
        assertEquals(new Buffer(buf), expected)
    })

    it('iterates over all entity files', async (t) => {
        const params: AllEntityFileRequest = {
            person_id: 142,
            page_size: 1,
        }

        await mockPagingFromAllEndpoint(
            './fixtures/entity_files/all.raw.response.json',
            params,
            'entity_files',
            entityFilesUrl,
            mock,
        )

        let page = 0
        for await (
            const entries of affinity.entityFiles.pagedIterator(params)
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of entity files`,
            })
        }
    })
})

function readableFromArray(arr: Uint8Array) {
    return new Readable({
        read(size: number) {
            this.push(arr)
            this.push(null)
        },
    })
}
