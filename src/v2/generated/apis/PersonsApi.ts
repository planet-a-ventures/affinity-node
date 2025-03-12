// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { ListEntryPaged } from '../models/ListEntryPaged.ts';
import { ListPaged } from '../models/ListPaged.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { Person } from '../models/Person.ts';
import { PersonPaged } from '../models/PersonPaged.ts';
import { ValidationErrors } from '../models/ValidationErrors.ts';

/**
 * no description
 */
export class PersonsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param ids People IDs
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async getV2Persons(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v2/persons';

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
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2PersonsFields(cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v2/persons/fields';

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
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async getV2PersonsId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PersonsApi", "getV2PersonsId", "id");
        }




        // Path Params
        const localVarPath = '/v2/persons/{id}'
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
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2PersonsIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PersonsApi", "getV2PersonsIdListEntries", "id");
        }




        // Path Params
        const localVarPath = '/v2/persons/{id}/list-entries'
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
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2PersonsIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PersonsApi", "getV2PersonsIdLists", "id");
        }




        // Path Params
        const localVarPath = '/v2/persons/{id}/lists'
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

export class PersonsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2Persons
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2PersonsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PersonPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PersonPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonPaged", ""
            ) as PersonPaged;
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
            const body: PersonPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonPaged", ""
            ) as PersonPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2PersonsFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2PersonsFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FieldMetadataPaged >> {
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
     * @params response Response returned by the server for a request to getV2PersonsId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2PersonsIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Person >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Person = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Person", ""
            ) as Person;
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
            const body: Person = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Person", ""
            ) as Person;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2PersonsIdListEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2PersonsIdListEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryPaged >> {
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
     * @params response Response returned by the server for a request to getV2PersonsIdLists
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2PersonsIdListsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListPaged >> {
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
