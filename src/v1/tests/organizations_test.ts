import { assertSnapshot } from '@std/testing/snapshot'
import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Affinity } from '../index.ts'
import { getRawFixture } from './get_raw_fixture.ts'
import { apiKey, isLiveRun } from './env.ts'
import { organizationFieldsUrl, organizationsUrl } from '../urls.ts'
import type { SearchOrganizationsRequest } from '../organizations.ts'
import { mockPagingFromAllEndpoint } from './mock_paging_from_all_endpoint.ts'

describe('organizations', () => {
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

    it('can get a specific organization', async (t) => {
        const organization_id = 64779194
        mock?.onGet(organizationsUrl(organization_id)).reply(
            200,
            await getRawFixture('organizations/get.raw.response.json'),
        )
        const res = await affinity.organizations.get({ organization_id })
        await assertSnapshot(t, res)
    })

    it('can search for organizations', async (t) => {
        const request = { term: 'affinity' }
        mock?.onGet(organizationsUrl(), { params: request }).reply(
            200,
            await getRawFixture('organizations/search.raw.response.json'),
        )
        const res = await affinity.organizations.search(request)
        await assertSnapshot(t, res)
    })

    it('can search for organizations with the appropriate dates', async (t) => {
        const myDate = new Date(1717428411010)
        const request: SearchOrganizationsRequest = {
            min_first_email_date: myDate,
            term: 'affinity',
            with_interaction_dates: true,
        }
        mock?.onGet(organizationsUrl(), {
            params: {
                term: request.term,
                min_first_email_date: myDate.toISOString(),
                with_interaction_dates: true,
            },
        }).reply(
            200,
            await getRawFixture('organizations/search.raw.response.json'),
        )
        const res = await affinity.organizations.search(request)
        await assertSnapshot(t, res)
    })

    it('can create a new organization', async (t) => {
        const data = {
            name: 'Acme Corporation',
            domain: 'acme.co',
            person_ids: [38706],
        }
        mock?.onPost(organizationsUrl()).reply(
            201,
            await getRawFixture('organizations/create.raw.response.json'),
        )
        const res = await affinity.organizations.create(data)
        await assertSnapshot(t, res)
    })

    it('can update an organization', async (t) => {
        const data = {
            organization_id: 120611418,
            name: 'Acme Corp.',
            person_ids: [38706, 89734],
        }
        mock?.onPut(organizationsUrl(data.organization_id)).reply(
            200,
            await getRawFixture('organizations/update.raw.response.json'),
        )
        const res = await affinity.organizations.update(data)
        await assertSnapshot(t, res)
    })

    it('can delete an organization', async (t) => {
        const organization_id = 120611418
        mock?.onDelete(organizationsUrl(organization_id)).reply(200, {
            success: true,
        })
        const res = await affinity.organizations.delete({ organization_id })
        await assertSnapshot(t, res)
    })

    it('can get global organization fields', async (t) => {
        mock?.onGet(organizationFieldsUrl()).reply(
            200,
            await getRawFixture('organizations/get_fields.raw.response.json'),
        )
        const res = await affinity.organizations.getFields()
        await assertSnapshot(t, res)
    })

    it('iterates over all organizations', async (t) => {
        const params: SearchOrganizationsRequest = {
            term: 'affinity',
            page_size: 1,
        }

        await mockPagingFromAllEndpoint(
            './fixtures/organizations/search.raw.response.json',
            params,
            'organizations',
            organizationsUrl,
            mock,
        )

        let page = 0
        for await (
            const entries of affinity.organizations.searchIterator(params)
        ) {
            await assertSnapshot(t, entries, {
                name: `page ${++page} of organizations`,
            })
        }
    })
})
