// TODO: better import syntax?
import {
    BaseAPIRequestFactory,
    COLLECTION_FORMATS,
    RequiredError,
} from './baseapi.ts'
import { Configuration } from '../configuration.ts'
import {
    HttpFile,
    HttpInfo,
    HttpMethod,
    RequestContext,
    ResponseContext,
} from '../http/http.ts'
import { ObjectSerializer } from '../models/ObjectSerializer.ts'
import { ApiException } from './exception.ts'
import { canConsumeForm, isCodeInRange } from '../util.ts'
import { SecurityAuthentication } from '../auth/auth.ts'

import { AuthenticationErrors } from '../models/AuthenticationErrors.ts'
import { NotFoundErrors } from '../models/NotFoundErrors.ts'
import { WhoAmI } from '../models/WhoAmI.ts'

/**
 * no description
 */
export class AuthApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Returns metadata about the current user.
     * Get current user
     */
    public async getV2AuthWhoami(
        _options?: Configuration,
    ): Promise<RequestContext> {
        let _config = _options || this.configuration

        // Path Params
        const localVarPath = '/v2/auth/whoami'

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(
            localVarPath,
            HttpMethod.GET,
        )
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

        let authMethod: SecurityAuthentication | undefined
        // Apply auth methods
        authMethod = _config.authMethods['bearerAuth']
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext)
        }

        const defaultAuth: SecurityAuthentication | undefined =
            _options?.authMethods?.default ||
            this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext)
        }

        return requestContext
    }
}

export class AuthApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2AuthWhoami
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async getV2AuthWhoamiWithHttpInfo(
        response: ResponseContext,
    ): Promise<HttpInfo<WhoAmI>> {
        const contentType = ObjectSerializer.normalizeMediaType(
            response.headers['content-type'],
        )
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: WhoAmI = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'WhoAmI',
                '',
            ) as WhoAmI
            return new HttpInfo(
                response.httpStatusCode,
                response.headers,
                response.body,
                body,
            )
        }
        if (isCodeInRange('401', response.httpStatusCode)) {
            const body: AuthenticationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'AuthenticationErrors',
                '',
            ) as AuthenticationErrors
            throw new ApiException<AuthenticationErrors>(
                response.httpStatusCode,
                'Unauthorized',
                body,
                response.headers,
            )
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'NotFoundErrors',
                '',
            ) as NotFoundErrors
            throw new ApiException<NotFoundErrors>(
                response.httpStatusCode,
                'Not Found',
                body,
                response.headers,
            )
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WhoAmI = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'WhoAmI',
                '',
            ) as WhoAmI
            return new HttpInfo(
                response.httpStatusCode,
                response.headers,
                response.body,
                body,
            )
        }

        throw new ApiException<string | Blob | undefined>(
            response.httpStatusCode,
            'Unknown API Status Code!',
            await response.getBodyAsAny(),
            response.headers,
        )
    }
}
