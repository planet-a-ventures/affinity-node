// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { Company } from '../models/Company.ts';
import { CompanyPaged } from '../models/CompanyPaged.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { ListEntryPaged } from '../models/ListEntryPaged.ts';
import { ListPaged } from '../models/ListPaged.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { ValidationErrors } from '../models/ValidationErrors.ts';

/**
 * no description
 */
export class CompaniesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param ids Company IDs
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async getV2Companies(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v2/companies';

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
        if (ids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ids, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("ids", serializedParam);
            }
        }

        // Query Params
        if (fieldIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldIds, "Array<string>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("fieldIds", serializedParam);
            }
        }

        // Query Params
        if (fieldTypes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldTypes, "Array<'enriched' | 'global' | 'relationship-intelligence'>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("fieldTypes", serializedParam);
            }
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
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2CompaniesFields(cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v2/companies/fields';

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
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async getV2CompaniesId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CompaniesApi", "getV2CompaniesId", "id");
        }




        // Path Params
        const localVarPath = '/v2/companies/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldIds, "Array<string>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("fieldIds", serializedParam);
            }
        }

        // Query Params
        if (fieldTypes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldTypes, "Array<'enriched' | 'global' | 'relationship-intelligence'>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("fieldTypes", serializedParam);
            }
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
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2CompaniesIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CompaniesApi", "getV2CompaniesIdListEntries", "id");
        }




        // Path Params
        const localVarPath = '/v2/companies/{id}/list-entries'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2CompaniesIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CompaniesApi", "getV2CompaniesIdLists", "id");
        }




        // Path Params
        const localVarPath = '/v2/companies/{id}/lists'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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

export class CompaniesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2Companies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2CompaniesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CompanyPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompanyPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyPaged", ""
            ) as CompanyPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrors", ""
            ) as ValidationErrors;
            throw new ApiException<ValidationErrors>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: AuthorizationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthorizationErrors", ""
            ) as AuthorizationErrors;
            throw new ApiException<AuthorizationErrors>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompanyPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompanyPaged", ""
            ) as CompanyPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2CompaniesFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2CompaniesFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FieldMetadataPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FieldMetadataPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FieldMetadataPaged", ""
            ) as FieldMetadataPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrors", ""
            ) as ValidationErrors;
            throw new ApiException<ValidationErrors>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FieldMetadataPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FieldMetadataPaged", ""
            ) as FieldMetadataPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2CompaniesId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2CompaniesIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Company >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Company = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Company", ""
            ) as Company;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrors", ""
            ) as ValidationErrors;
            throw new ApiException<ValidationErrors>(response.httpStatusCode, "Bad Request", body, response.headers);
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Company = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Company", ""
            ) as Company;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2CompaniesIdListEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2CompaniesIdListEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntryPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryPaged", ""
            ) as ListEntryPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrors", ""
            ) as ValidationErrors;
            throw new ApiException<ValidationErrors>(response.httpStatusCode, "Bad Request", body, response.headers);
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListEntryPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryPaged", ""
            ) as ListEntryPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2CompaniesIdLists
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2CompaniesIdListsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPaged", ""
            ) as ListPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrors", ""
            ) as ValidationErrors;
            throw new ApiException<ValidationErrors>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPaged", ""
            ) as ListPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
