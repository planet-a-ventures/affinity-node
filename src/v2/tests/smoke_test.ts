import { afterEach, describe, it } from '@std/testing/bdd'
import { apiKey, isLiveRun } from '../../v1/tests/env.ts'

import { assertEquals } from '@std/assert'
import fetchMock from 'fetch-mock'
import { createConfiguration } from '../generated/configuration.ts'
import { ObjectAuthApi } from '../generated/types/ObjectParamAPI.ts'
import { ListsApi } from '../index.ts'

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
        const authApi = new ObjectAuthApi(config)

        const res = await authApi.getV2AuthWhoami()
        assertEquals(res.tenant.name, 'Planet A')
    })

    it.skip('can read a list', async (t) => {
        const listsApi = new ListsApi(config)
        const res = await listsApi.getV2ListsListidSavedViewsViewidListEntries({
            listId: 260971,
            viewId: 1777562,
        })

        console.log(res)
    })
})
