// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { Errors } from '../models/Errors.ts';
import { Field } from '../models/Field.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { FieldPaged } from '../models/FieldPaged.ts';
import { FieldUpdate } from '../models/FieldUpdate.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { ListEntryBatchOperationResponse } from '../models/ListEntryBatchOperationResponse.ts';
import { ListEntryBatchOperationUpdateFields } from '../models/ListEntryBatchOperationUpdateFields.ts';
import { ListEntryWithEntity } from '../models/ListEntryWithEntity.ts';
import { ListEntryWithEntityPaged } from '../models/ListEntryWithEntityPaged.ts';
import { ListWithType } from '../models/ListWithType.ts';
import { ListWithTypePaged } from '../models/ListWithTypePaged.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { SavedView } from '../models/SavedView.ts';
import { SavedViewPaged } from '../models/SavedViewPaged.ts';

/**
 * no description
 */
export class ListsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2ListsListidSavedViews(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "getV2ListsListidSavedViews", "listId");
        }




        // Path Params
        const localVarPath = '/v2/lists/{listId}/saved-views'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

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
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public async getV2ListsListidSavedViewsViewid(listId: number, viewId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "getV2ListsListidSavedViewsViewid", "listId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("ListsApi", "getV2ListsListidSavedViewsViewid", "viewId");
        }


        // Path Params
        const localVarPath = '/v2/lists/{listId}/saved-views/{viewId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'viewId' + '}', encodeURIComponent(String(viewId)));

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
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async getV2ListsListidSavedViewsViewidListEntries(listId: number, viewId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "getV2ListsListidSavedViewsViewidListEntries", "listId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("ListsApi", "getV2ListsListidSavedViewsViewidListEntries", "viewId");
        }




        // Path Params
        const localVarPath = '/v2/lists/{listId}/saved-views/{viewId}/list-entries'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'viewId' + '}', encodeURIComponent(String(viewId)));

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
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async v2ListsGET(cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v2/lists';

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
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async v2ListsListIdFieldsGET(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdFieldsGET", "listId");
        }




        // Path Params
        const localVarPath = '/v2/lists/{listId}/fields'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

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
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public async v2ListsListIdGET(listId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdGET", "listId");
        }


        // Path Params
        const localVarPath = '/v2/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

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
     * Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a List
     * @param listId List ID
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async v2ListsListIdListEntriesGET(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesGET", "listId");
        }






        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

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
        if (fieldIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldIds, "Array<string>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("fieldIds", serializedParam);
            }
        }

        // Query Params
        if (fieldTypes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(fieldTypes, "Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>", "string");
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
     *  | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     */
    public async v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(listId: number, listEntryId: number, fieldId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET", "listId");
        }


        // verify required parameter 'listEntryId' is not null or undefined
        if (listEntryId === null || listEntryId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET", "listEntryId");
        }


        // verify required parameter 'fieldId' is not null or undefined
        if (fieldId === null || fieldId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET", "fieldId");
        }


        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'listEntryId' + '}', encodeURIComponent(String(listEntryId)))
            .replace('{' + 'fieldId' + '}', encodeURIComponent(String(fieldId)));

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
     *  | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     * @param fieldUpdate 
     */
    public async v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(listId: number, listEntryId: number, fieldId: string, fieldUpdate: FieldUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST", "listId");
        }


        // verify required parameter 'listEntryId' is not null or undefined
        if (listEntryId === null || listEntryId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST", "listEntryId");
        }


        // verify required parameter 'fieldId' is not null or undefined
        if (fieldId === null || fieldId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST", "fieldId");
        }


        // verify required parameter 'fieldUpdate' is not null or undefined
        if (fieldUpdate === null || fieldUpdate === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST", "fieldUpdate");
        }


        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'listEntryId' + '}', encodeURIComponent(String(listEntryId)))
            .replace('{' + 'fieldId' + '}', encodeURIComponent(String(fieldId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(fieldUpdate, "FieldUpdate", ""),
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
     *  | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param ids Field IDs for which to return field data
     * @param types Field Types for which to return field data
     * @param cursor Cursor for the next or previous page
     * @param limit Number of items to include in the page
     */
    public async v2ListsListIdListEntriesListEntryIdFieldsGET(listId: number, listEntryId: number, ids?: Array<string>, types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsGET", "listId");
        }


        // verify required parameter 'listEntryId' is not null or undefined
        if (listEntryId === null || listEntryId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsGET", "listEntryId");
        }






        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries/{listEntryId}/fields'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'listEntryId' + '}', encodeURIComponent(String(listEntryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ids, "Array<string>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("ids", serializedParam);
            }
        }

        // Query Params
        if (types !== undefined) {
            const serializedParams = ObjectSerializer.serialize(types, "Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>", "string");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("types", serializedParam);
            }
        }

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
     * | ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param body 
     */
    public async v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId: number, listEntryId: number, body: ListEntryBatchOperationUpdateFields, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsPATCH", "listId");
        }


        // verify required parameter 'listEntryId' is not null or undefined
        if (listEntryId === null || listEntryId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsPATCH", "listEntryId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdFieldsPATCH", "body");
        }


        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries/{listEntryId}/fields'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'listEntryId' + '}', encodeURIComponent(String(listEntryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ListEntryBatchOperationUpdateFields", ""),
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
     * | ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldIds Field IDs for which to return field data
     * @param fieldTypes Field Types for which to return field data
     */
    public async v2ListsListIdListEntriesListEntryIdGET(listId: number, listEntryId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdGET", "listId");
        }


        // verify required parameter 'listEntryId' is not null or undefined
        if (listEntryId === null || listEntryId === undefined) {
            throw new RequiredError("ListsApi", "v2ListsListIdListEntriesListEntryIdGET", "listEntryId");
        }




        // Path Params
        const localVarPath = '/v2/lists/{listId}/list-entries/{listEntryId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)))
            .replace('{' + 'listEntryId' + '}', encodeURIComponent(String(listEntryId)));

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
            const serializedParams = ObjectSerializer.serialize(fieldTypes, "Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>", "string");
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

}

export class ListsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2ListsListidSavedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2ListsListidSavedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SavedViewPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SavedViewPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SavedViewPaged", ""
            ) as SavedViewPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: SavedViewPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SavedViewPaged", ""
            ) as SavedViewPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2ListsListidSavedViewsViewid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2ListsListidSavedViewsViewidWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SavedView >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SavedView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SavedView", ""
            ) as SavedView;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: SavedView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SavedView", ""
            ) as SavedView;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getV2ListsListidSavedViewsViewidListEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryWithEntityPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntryWithEntityPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntityPaged", ""
            ) as ListEntryWithEntityPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListEntryWithEntityPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntityPaged", ""
            ) as ListEntryWithEntityPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListWithTypePaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListWithTypePaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWithTypePaged", ""
            ) as ListWithTypePaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListWithTypePaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWithTypePaged", ""
            ) as ListWithTypePaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdFieldsGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdFieldsGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FieldMetadataPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FieldMetadataPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FieldMetadataPaged", ""
            ) as FieldMetadataPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
     * @params response Response returned by the server for a request to v2ListsListIdGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListWithType >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListWithType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWithType", ""
            ) as ListWithType;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListWithType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWithType", ""
            ) as ListWithType;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryWithEntityPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntryWithEntityPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntityPaged", ""
            ) as ListEntryWithEntityPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListEntryWithEntityPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntityPaged", ""
            ) as ListEntryWithEntityPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Field >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Field = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Field", ""
            ) as Field;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: Field = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Field", ""
            ) as Field;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesListEntryIdFieldsGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FieldPaged >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FieldPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FieldPaged", ""
            ) as FieldPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: FieldPaged = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FieldPaged", ""
            ) as FieldPaged;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesListEntryIdFieldsPATCH
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryBatchOperationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntryBatchOperationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryBatchOperationResponse", ""
            ) as ListEntryBatchOperationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListEntryBatchOperationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryBatchOperationResponse", ""
            ) as ListEntryBatchOperationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2ListsListIdListEntriesListEntryIdGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntryWithEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntryWithEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntity", ""
            ) as ListEntryWithEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ListEntryWithEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntryWithEntity", ""
            ) as ListEntryWithEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
