// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { InteractionsMeetingPaged } from '../models/InteractionsMeetingPaged.ts';
import { Responses400 } from '../models/Responses400.ts';

/**
 * no description
 */
export class MeetingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param filter Filter options
     */
    public async v2MeetingsGET(cursor?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v2/meetings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MeetingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MeetingsGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MeetingsGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InteractionsMeetingPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InteractionsMeetingPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InteractionsMeetingPaged", ""
            ) as InteractionsMeetingPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Errors", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InteractionsMeetingPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InteractionsMeetingPaged", ""
            ) as InteractionsMeetingPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
