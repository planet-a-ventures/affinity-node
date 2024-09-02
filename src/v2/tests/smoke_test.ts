import { afterEach, describe, it } from '@std/testing/bdd'
import { apiKey, isLiveRun } from '../../v1/tests/env.ts'

import { assertSnapshot } from '@std/testing/snapshot'
import fetchMock from 'fetch-mock'
import {
    AuthApi,
    CompaniesApi,
    createConfiguration,
    paginated,
} from '../index.ts'

describe('whoami', () => {
    const config = createConfiguration({
        authMethods: {
            bearerAuth: {
                tokenProvider: {
                    getToken: async () => {
                        return await apiKey() || 'api_key'
                    },
                },
            },
        },
    })

    afterEach(() => {
        fetchMock.reset()
    })

    it('can be called', async (t) => {
        if (!isLiveRun()) {
            fetchMock.get('https://api.affinity.co/v2/auth/whoami', {
                'tenant': {
                    'id': 123,
                    'name': 'Planet A',
                    'subdomain': 'planet',
                },
                'user': {
                    'id': 1234567,
                    'firstName': 'Joscha',
                    'lastName': 'Feth',
                    'emailAddress': 'j@p-a.com',
                },
                'grant': {
                    'type': 'api-key',
                    'scopes': ['api'],
                    'createdAt': '2024-06-24T10:22:21Z',
                },
            })
        }
        const authApi = new AuthApi(config)

        const auth = await authApi.getV2AuthWhoami()
        await assertSnapshot(t, auth)
    })

    it('can read a list and page through it', async (t) => {
        if (!isLiveRun()) {
            fetchMock.get('https://api.affinity.co/v2/companies?limit=1', {
                'data': [
                    {
                        'id': 123,
                        'name': 'Planet A',
                        'domain': 'planet-a.com',
                        'domains': ['planet-a.com'],
                        'isGlobal': true,
                        'fields': undefined,
                    },
                ],
                'pagination': {
                    'prevUrl': null,
                    'nextUrl':
                        'https://api.affinity.co/v2/companies?cursor=123',
                },
            })
            fetchMock.get(
                'https://api.affinity.co/v2/companies?cursor=123&limit=1',
                {
                    'data': [
                        {
                            'id': 123,
                            'name': 'Planet B',
                            'domain': 'planet-b.com',
                            'domains': ['planet-b.com'],
                            'isGlobal': false,
                            'fields': undefined,
                        },
                    ],
                    'pagination': {
                        'prevUrl': 'https://api.affinity.co/v2/companies',
                        'nextUrl': null,
                    },
                },
            )
        }
        const companiesApi = new CompaniesApi(config)

        for await (
            const page of paginated(
                companiesApi.getV2Companies.bind(companiesApi),
            )({
                limit: 1,
            })
        ) {
            await assertSnapshot(t, page)
        }
    })
})
