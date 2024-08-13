import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { personFieldsUrl, personsUrl } from '../urls.ts'
import type { SearchPersonsRequest } from '../persons.ts'
import { mockPagingFromAllEndpoint } from './mock_paging_from_all_endpoint.ts'

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

    it('can get a specific person', async (t) => {
        const person_id = 54576635
        mock?.onGet(personsUrl(person_id)).reply(
            200,
            await getRawFixture('persons/get.raw.response.json'),
        )
        const res = await affinity.persons.get({ person_id })
        await assertSnapshot(t, res)
    })

    it('can search for persons', async (t) => {
        const request = { term: 'joscha' }
        mock?.onGet(personsUrl(), { params: request }).reply(
            200,
            await getRawFixture('persons/search.raw.response.json'),
        )
        const res = await affinity.persons.search(request)
        await assertSnapshot(t, res)
    })

    it('can search for persons with the appropriate dates', async (t) => {
        const myDate = new Date(0)
        const request: SearchPersonsRequest = {
            min_first_email_date: myDate,
            term: 'Joscha',
            with_interaction_dates: true,
        }
        mock?.onGet(personsUrl(), {
            params: {
                term: request.term,
                min_first_email_date: myDate.toISOString(),
                with_interaction_dates: true,
            },
        }).reply(
            200,
            await getRawFixture('persons/search_with_dates.raw.response.json'),
        )
        const res = await affinity.persons.search(request)
        await assertSnapshot(t, res)
    })

    it('can create a new person', async (t) => {
        const data = {
            first_name: 'Alice',
            last_name: 'Doe',
            emails: ['alice@affinity.co'],
            organization_ids: [1687449],
        }
        mock?.onPost(personsUrl()).reply(
            201,
            await getRawFixture('persons/create.raw.response.json'),
        )
        const res = await affinity.persons.create(data)
        await assertSnapshot(t, res)
    })

    it('can update a person', async (t) => {
        const data = {
            person_id: 860197,
            first_name: 'Allison',
            emails: [
                'alice@affinity.co',
                'allison@example.com',
                'allison@gmail.com',
            ],
        }
        mock?.onPut(personsUrl(data.person_id)).reply(
            200,
            await getRawFixture('persons/update.raw.response.json'),
        )
        const res = await affinity.persons.update(data)
        await assertSnapshot(t, res)
    })

    it('can delete a person', async (t) => {
        const person_id = 860197
        mock?.onDelete(personsUrl(person_id)).reply(200, {
            success: true,
        })
        const res = await affinity.persons.delete({ person_id })
        await assertSnapshot(t, res)
    })

    it('can get global person fields', async (t) => {
        mock?.onGet(personFieldsUrl()).reply(
            200,
            await getRawFixture('persons/get_fields.raw.response.json'),
        )
        const res = await affinity.persons.getFields()
        await assertSnapshot(t, res)
    })

    it('iterates over all persons', async (t) => {
        const params: SearchPersonsRequest = {
            term: 'joscha',
            page_size: 1,
        }

        await mockPagingFromAllEndpoint(
            './fixtures/persons/search.raw.response.json',
            params,
            'persons',
            personsUrl,
            mock,
        )

        // {
        //     // set up pages sequentially, each referencing the one after
        //     const { default: pages } = await import(
        //         './fixtures/persons/paginated.iterator.combined.response.json',
        //         {
        //             with: {
        //                 type: 'json',
        //             },
        //         }
        //     )

        //     pages.forEach((page, i) => {
        //         const { next_page_token: previous_page_token } = pages[i - 1] ||
        //             {}
        //         const data: SearchPersonsRequest = {
        //             ...params,
        //         }
        //         if (previous_page_token) {
        //             data.page_token = previous_page_token
        //         }
        //         // console.log('Setting up page', params, page.list_entries)
        //         mock?.onGet(personsUrl(), {
        //             params: data,
        //         }).reply(
        //             200,
        //             page,
        //         )
        //     })
        // }

        let page = 0
        for await (
            const entries of affinity.persons.searchIterator(params)
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of persons`,
            })
        }
    })
})
