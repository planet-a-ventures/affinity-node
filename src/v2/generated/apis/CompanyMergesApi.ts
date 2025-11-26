// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { CompanyMergeRequest } from '../models/CompanyMergeRequest.ts';
import { CompanyMergeResponse } from '../models/CompanyMergeResponse.ts';
import { CompanyMergeState } from '../models/CompanyMergeState.ts';
import { CompanyMergeStatePaged } from '../models/CompanyMergeStatePaged.ts';
import { CompanyMergeTask } from '../models/CompanyMergeTask.ts';
import { CompanyMergeTaskPaged } from '../models/CompanyMergeTaskPaged.ts';
import { Errors } from '../models/Errors.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { Responses400 } from '../models/Responses400.ts';

/**
 * no description
 */
export class CompanyMergesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param filter Filter company merges using Affinity Filtering Language
     */
    public async v2CompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v2/company-merges';

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

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param mergeId Company merge ID
     */
    public async v2CompanyMergesMergeIdGET(mergeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mergeId' is not null or undefined
        if (mergeId === null || mergeId === undefined) {
            throw new RequiredError("CompanyMergesApi", "v2CompanyMergesMergeIdGET", "mergeId");
        }


        // Path Params
        const localVarPath = '/v2/company-merges/{mergeId}'
            .replace('{' + 'mergeId' + '}', encodeURIComponent(String(mergeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param companyMergeRequest 
     */
    public async v2CompanyMergesPOST(companyMergeRequest: CompanyMergeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companyMergeRequest' is not null or undefined
        if (companyMergeRequest === null || companyMergeRequest === undefined) {
            throw new RequiredError("CompanyMergesApi", "v2CompanyMergesPOST", "companyMergeRequest");
        }


        // Path Params
        const localVarPath = '/v2/company-merges';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(companyMergeRequest, "CompanyMergeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param filter Filter tasks using Affinity Filtering Language
     */
    public async v2TasksCompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v2/tasks/company-merges';

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

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param taskId Company merge task ID
     */
    public async v2TasksCompanyMergesTaskIdGET(taskId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("CompanyMergesApi", "v2TasksCompanyMergesTaskIdGET", "taskId");
        }


        // Path Params
        const localVarPath = '/v2/tasks/company-merges/{taskId}'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class CompanyMergesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2CompanyMergesGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2CompanyMergesGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyMergeStatePaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompanyMergeStatePaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeStatePaged", ""
            ) as CompanyMergeStatePaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
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
            const body: CompanyMergeStatePaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeStatePaged", ""
            ) as CompanyMergeStatePaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2CompanyMergesMergeIdGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2CompanyMergesMergeIdGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyMergeState >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompanyMergeState = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeState", ""
            ) as CompanyMergeState;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "Not Found", body, response.headers);
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
            const body: CompanyMergeState = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeState", ""
            ) as CompanyMergeState;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2CompanyMergesPOST
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2CompanyMergesPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyMergeResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: CompanyMergeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeResponse", ""
            ) as CompanyMergeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
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
            const body: CompanyMergeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeResponse", ""
            ) as CompanyMergeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TasksCompanyMergesGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TasksCompanyMergesGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyMergeTaskPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompanyMergeTaskPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeTaskPaged", ""
            ) as CompanyMergeTaskPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
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
            const body: CompanyMergeTaskPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeTaskPaged", ""
            ) as CompanyMergeTaskPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TasksCompanyMergesTaskIdGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TasksCompanyMergesTaskIdGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyMergeTask >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompanyMergeTask = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeTask", ""
            ) as CompanyMergeTask;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Responses400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Responses400", ""
            ) as Responses400;
            throw new ApiException<Responses400>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "Not Found", body, response.headers);
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
            const body: CompanyMergeTask = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyMergeTask", ""
            ) as CompanyMergeTask;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
