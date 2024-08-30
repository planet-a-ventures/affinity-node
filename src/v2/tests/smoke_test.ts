import { afterEach, beforeEach, describe, it } from '@std/testing/bdd'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { apiKey, isLiveRun } from '../../v1/tests/env.ts'

import { ObjectAuthApi } from '../generated/types/ObjectParamAPI.ts'
import { createConfiguration } from '../generated/configuration.ts'
import { List, ListsApi } from '../index.ts'

describe('whoami', () => {
    let mock: MockAdapter
    let authApi: ObjectAuthApi

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

    beforeEach(() => {
        if (!isLiveRun()) {
            mock = new MockAdapter(axios)
        }

        authApi = new ObjectAuthApi(config)
    })
    afterEach(() => {
        mock?.reset()
    })

    it.skip('can be called', async (t) => {
        // mock?.onGet(whoAmIUrl()).reply(
        //     200,
        //     await getRawFixture('auth/whoami/whoami.raw.response.json'),
        // )
        const res = await authApi.getV2AuthWhoami()
        console.log(res.tenant.name)
        //assertInstanceOf(res.grant.createdAt, Date)
        //await assertSnapshot(t, res)
    })

    it('can read a list', async (t) => {
        const listsApi = new ListsApi(config)
        const res = await listsApi.getV2ListsListidSavedViewsViewidListEntries({
            listId: 260971,
            viewId: 1777562,
        })

        console.log(res)
    })
})
