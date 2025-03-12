import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration.ts'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware.ts';

import { Attendee } from '../models/Attendee.ts';
import { AuthenticationError } from '../models/AuthenticationError.ts';
import { AuthorizationError } from '../models/AuthorizationError.ts';
import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { BadRequestError } from '../models/BadRequestError.ts';
import { ChatMessage } from '../models/ChatMessage.ts';
import { CompaniesValue } from '../models/CompaniesValue.ts';
import { CompaniesValueUpdate } from '../models/CompaniesValueUpdate.ts';
import { Company } from '../models/Company.ts';
import { CompanyData } from '../models/CompanyData.ts';
import { CompanyListEntry } from '../models/CompanyListEntry.ts';
import { CompanyPaged } from '../models/CompanyPaged.ts';
import { CompanyReference } from '../models/CompanyReference.ts';
import { CompanyValue } from '../models/CompanyValue.ts';
import { CompanyValueUpdate } from '../models/CompanyValueUpdate.ts';
import { ConflictError } from '../models/ConflictError.ts';
import { DateValue } from '../models/DateValue.ts';
import { Dropdown } from '../models/Dropdown.ts';
import { DropdownReference } from '../models/DropdownReference.ts';
import { DropdownValue } from '../models/DropdownValue.ts';
import { DropdownValueUpdate } from '../models/DropdownValueUpdate.ts';
import { DropdownsValue } from '../models/DropdownsValue.ts';
import { DropdownsValueUpdate } from '../models/DropdownsValueUpdate.ts';
import { Email } from '../models/Email.ts';
import { Errors } from '../models/Errors.ts';
import { Field } from '../models/Field.ts';
import { FieldMetadata } from '../models/FieldMetadata.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { FieldPaged } from '../models/FieldPaged.ts';
import { FieldUpdate } from '../models/FieldUpdate.ts';
import { FieldValue } from '../models/FieldValue.ts';
import { FieldValueUpdate } from '../models/FieldValueUpdate.ts';
import { FloatValue } from '../models/FloatValue.ts';
import { FloatsValue } from '../models/FloatsValue.ts';
import { FormulaNumber } from '../models/FormulaNumber.ts';
import { FormulaValue } from '../models/FormulaValue.ts';
import { Grant } from '../models/Grant.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObjectErrorsInner } from '../models/InlineObjectErrorsInner.ts';
import { Interaction } from '../models/Interaction.ts';
import { InteractionValue } from '../models/InteractionValue.ts';
import { List } from '../models/List.ts';
import { ListEntry } from '../models/ListEntry.ts';
import { ListEntryBatchOperationResponse } from '../models/ListEntryBatchOperationResponse.ts';
import { ListEntryBatchOperationUpdateFields } from '../models/ListEntryBatchOperationUpdateFields.ts';
import { ListEntryBatchOperationUpdateFieldsUpdatesInner } from '../models/ListEntryBatchOperationUpdateFieldsUpdatesInner.ts';
import { ListEntryBatchOperations } from '../models/ListEntryBatchOperations.ts';
import { ListEntryPaged } from '../models/ListEntryPaged.ts';
import { ListEntryWithEntity } from '../models/ListEntryWithEntity.ts';
import { ListEntryWithEntityPaged } from '../models/ListEntryWithEntityPaged.ts';
import { ListPaged } from '../models/ListPaged.ts';
import { ListWithType } from '../models/ListWithType.ts';
import { ListWithTypePaged } from '../models/ListWithTypePaged.ts';
import { Location } from '../models/Location.ts';
import { LocationValue } from '../models/LocationValue.ts';
import { LocationsValue } from '../models/LocationsValue.ts';
import { Meeting } from '../models/Meeting.ts';
import { MethodNotAllowedError } from '../models/MethodNotAllowedError.ts';
import { ModelError } from '../models/ModelError.ts';
import { NotAcceptableError } from '../models/NotAcceptableError.ts';
import { NotFoundError } from '../models/NotFoundError.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { NotImplementedError } from '../models/NotImplementedError.ts';
import { Opportunity } from '../models/Opportunity.ts';
import { OpportunityListEntry } from '../models/OpportunityListEntry.ts';
import { OpportunityPaged } from '../models/OpportunityPaged.ts';
import { OpportunityWithFields } from '../models/OpportunityWithFields.ts';
import { Pagination } from '../models/Pagination.ts';
import { Person } from '../models/Person.ts';
import { PersonData } from '../models/PersonData.ts';
import { PersonListEntry } from '../models/PersonListEntry.ts';
import { PersonPaged } from '../models/PersonPaged.ts';
import { PersonReference } from '../models/PersonReference.ts';
import { PersonValue } from '../models/PersonValue.ts';
import { PersonValueUpdate } from '../models/PersonValueUpdate.ts';
import { PersonsValue } from '../models/PersonsValue.ts';
import { PersonsValueUpdate } from '../models/PersonsValueUpdate.ts';
import { PhoneCall } from '../models/PhoneCall.ts';
import { RankedDropdown } from '../models/RankedDropdown.ts';
import { RankedDropdownReference } from '../models/RankedDropdownReference.ts';
import { RankedDropdownValue } from '../models/RankedDropdownValue.ts';
import { RankedDropdownValueUpdate } from '../models/RankedDropdownValueUpdate.ts';
import { RateLimitError } from '../models/RateLimitError.ts';
import { SavedView } from '../models/SavedView.ts';
import { SavedViewPaged } from '../models/SavedViewPaged.ts';
import { ServerError } from '../models/ServerError.ts';
import { Tenant } from '../models/Tenant.ts';
import { TextValue } from '../models/TextValue.ts';
import { TextsValue } from '../models/TextsValue.ts';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError.ts';
import { UnsupportedMediaTypeError } from '../models/UnsupportedMediaTypeError.ts';
import { User } from '../models/User.ts';
import { ValidationError } from '../models/ValidationError.ts';
import { WhoAmI } from '../models/WhoAmI.ts';
import { ObservableAuthApi } from './ObservableAPI.ts';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.ts";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     */
    public getV2AuthWhoamiWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<WhoAmI>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2AuthWhoamiWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     */
    public getV2AuthWhoami(_options?: PromiseConfigurationOptions): Promise<WhoAmI> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2AuthWhoami(observableOptions);
        return result.toPromise();
    }


}



import { ObservableCompaniesApi } from './ObservableAPI.ts';

import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi.ts";
export class PromiseCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompaniesApiRequestFactory,
        responseProcessor?: CompaniesApiResponseProcessor
    ) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Company IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Company IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2Companies(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<CompanyPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2Companies(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesFieldsWithHttpInfo(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFields(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldMetadataPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesFields(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesIdWithHttpInfo(id, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<Company> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesId(id, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesIdListEntriesWithHttpInfo(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntries(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesIdListEntries(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesIdListsWithHttpInfo(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdLists(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2CompaniesIdLists(id, cursor, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableListsApi } from './ObservableAPI.ts';

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi.ts";
export class PromiseListsApi {
    private api: ObservableListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SavedViewPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViewsWithHttpInfo(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViews(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<SavedViewPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViews(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewidWithHttpInfo(listId: number, viewId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SavedView>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViewsViewidWithHttpInfo(listId, viewId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewid(listId: number, viewId: number, _options?: PromiseConfigurationOptions): Promise<SavedView> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViewsViewid(listId, viewId, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId: number, viewId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId, viewId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsViewidListEntries(listId: number, viewId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryWithEntityPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2ListsListidSavedViewsViewidListEntries(listId, viewId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsGETWithHttpInfo(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListWithTypePaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsGETWithHttpInfo(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsGET(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListWithTypePaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsGET(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdFieldsGETWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdFieldsGETWithHttpInfo(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdFieldsGET(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldMetadataPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdFieldsGET(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public v2ListsListIdGETWithHttpInfo(listId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListWithType>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdGETWithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public v2ListsListIdGET(listId: number, _options?: PromiseConfigurationOptions): Promise<ListWithType> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdGET(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a List
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesGETWithHttpInfo(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesGETWithHttpInfo(listId, cursor, limit, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a List
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesGET(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<ListEntryWithEntityPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesGET(listId, cursor, limit, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(listId: number, listEntryId: number, fieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Field>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(listId, listEntryId, fieldId, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(listId: number, listEntryId: number, fieldId: string, _options?: PromiseConfigurationOptions): Promise<Field> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(listId, listEntryId, fieldId, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     * @param fieldUpdate
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(listId: number, listEntryId: number, fieldId: string, fieldUpdate: FieldUpdate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(listId, listEntryId, fieldId, fieldUpdate, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     * @param fieldUpdate
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(listId: number, listEntryId: number, fieldId: string, fieldUpdate: FieldUpdate, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(listId, listEntryId, fieldId, fieldUpdate, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [ids] Field IDs for which to return field data
     * @param [types] Field Types for which to return field data
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(listId: number, listEntryId: number, ids?: Array<string>, types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(listId, listEntryId, ids, types, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [ids] Field IDs for which to return field data
     * @param [types] Field Types for which to return field data
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGET(listId: number, listEntryId: number, ids?: Array<string>, types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsGET(listId, listEntryId, ids, types, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param body
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId: number, listEntryId: number, body: ListEntryBatchOperationUpdateFields, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryBatchOperationResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId, listEntryId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param body
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId: number, listEntryId: number, body: ListEntryBatchOperationUpdateFields, _options?: PromiseConfigurationOptions): Promise<ListEntryBatchOperationResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId, listEntryId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(listId: number, listEntryId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryWithEntity>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(listId, listEntryId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List [BETA]
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesListEntryIdGET(listId: number, listEntryId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<ListEntryWithEntity> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v2ListsListIdListEntriesListEntryIdGET(listId, listEntryId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOpportunitiesApi } from './ObservableAPI.ts';

import { OpportunitiesApiRequestFactory, OpportunitiesApiResponseProcessor} from "../apis/OpportunitiesApi.ts";
export class PromiseOpportunitiesApi {
    private api: ObservableOpportunitiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunitiesApiRequestFactory,
        responseProcessor?: OpportunitiesApiResponseProcessor
    ) {
        this.api = new ObservableOpportunitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public getV2OpportunitiesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2OpportunitiesWithHttpInfo(cursor, limit, ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public getV2Opportunities(cursor?: string, limit?: number, ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<OpportunityPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2Opportunities(cursor, limit, ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Opportunity>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2OpportunitiesIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesId(id: number, _options?: PromiseConfigurationOptions): Promise<Opportunity> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2OpportunitiesId(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePersonsApi } from './ObservableAPI.ts';

import { PersonsApiRequestFactory, PersonsApiResponseProcessor} from "../apis/PersonsApi.ts";
export class PromisePersonsApi {
    private api: ObservablePersonsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonsApiRequestFactory,
        responseProcessor?: PersonsApiResponseProcessor
    ) {
        this.api = new ObservablePersonsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] People IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] People IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2Persons(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<PersonPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2Persons(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsFieldsWithHttpInfo(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFields(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldMetadataPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsFields(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Person>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsIdWithHttpInfo(id, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<Person> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsId(id, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsIdListEntriesWithHttpInfo(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntries(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsIdListEntries(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsIdListsWithHttpInfo(id, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdLists(id: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListPaged> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getV2PersonsIdLists(id, cursor, limit, observableOptions);
        return result.toPromise();
    }


}



