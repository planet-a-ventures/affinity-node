import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions } from '../configuration.ts'
import type { Middleware } from '../middleware.ts';

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

import { ObservableAuthApi } from "./ObservableAPI.ts";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.ts";

export interface AuthApiGetV2AuthWhoamiRequest {
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     * @param param the request object
     */
    public getV2AuthWhoamiWithHttpInfo(param: AuthApiGetV2AuthWhoamiRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WhoAmI>> {
        return this.api.getV2AuthWhoamiWithHttpInfo( options).toPromise();
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     * @param param the request object
     */
    public getV2AuthWhoami(param: AuthApiGetV2AuthWhoamiRequest = {}, options?: ConfigurationOptions): Promise<WhoAmI> {
        return this.api.getV2AuthWhoami( options).toPromise();
    }

}

import { ObservableCompaniesApi } from "./ObservableAPI.ts";
import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi.ts";

export interface CompaniesApiGetV2CompaniesRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApigetV2Companies
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApigetV2Companies
     */
    limit?: number
    /**
     * Company IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof CompaniesApigetV2Companies
     */
    ids?: Array<number>
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompaniesApigetV2Companies
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof CompaniesApigetV2Companies
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface CompaniesApiGetV2CompaniesFieldsRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApigetV2CompaniesFields
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApigetV2CompaniesFields
     */
    limit?: number
}

export interface CompaniesApiGetV2CompaniesIdRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApigetV2CompaniesId
     */
    id: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompaniesApigetV2CompaniesId
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof CompaniesApigetV2CompaniesId
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface CompaniesApiGetV2CompaniesIdListEntriesRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApigetV2CompaniesIdListEntries
     */
    id: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApigetV2CompaniesIdListEntries
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApigetV2CompaniesIdListEntries
     */
    limit?: number
}

export interface CompaniesApiGetV2CompaniesIdListsRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApigetV2CompaniesIdLists
     */
    id: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApigetV2CompaniesIdLists
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApigetV2CompaniesIdLists
     */
    limit?: number
}

export class ObjectCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(configuration: Configuration, requestFactory?: CompaniesApiRequestFactory, responseProcessor?: CompaniesApiResponseProcessor) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param param the request object
     */
    public getV2CompaniesWithHttpInfo(param: CompaniesApiGetV2CompaniesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CompanyPaged>> {
        return this.api.getV2CompaniesWithHttpInfo(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param param the request object
     */
    public getV2Companies(param: CompaniesApiGetV2CompaniesRequest = {}, options?: ConfigurationOptions): Promise<CompanyPaged> {
        return this.api.getV2Companies(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param param the request object
     */
    public getV2CompaniesFieldsWithHttpInfo(param: CompaniesApiGetV2CompaniesFieldsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        return this.api.getV2CompaniesFieldsWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param param the request object
     */
    public getV2CompaniesFields(param: CompaniesApiGetV2CompaniesFieldsRequest = {}, options?: ConfigurationOptions): Promise<FieldMetadataPaged> {
        return this.api.getV2CompaniesFields(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param param the request object
     */
    public getV2CompaniesIdWithHttpInfo(param: CompaniesApiGetV2CompaniesIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.getV2CompaniesIdWithHttpInfo(param.id, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param param the request object
     */
    public getV2CompaniesId(param: CompaniesApiGetV2CompaniesIdRequest, options?: ConfigurationOptions): Promise<Company> {
        return this.api.getV2CompaniesId(param.id, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param param the request object
     */
    public getV2CompaniesIdListEntriesWithHttpInfo(param: CompaniesApiGetV2CompaniesIdListEntriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        return this.api.getV2CompaniesIdListEntriesWithHttpInfo(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param param the request object
     */
    public getV2CompaniesIdListEntries(param: CompaniesApiGetV2CompaniesIdListEntriesRequest, options?: ConfigurationOptions): Promise<ListEntryPaged> {
        return this.api.getV2CompaniesIdListEntries(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param param the request object
     */
    public getV2CompaniesIdListsWithHttpInfo(param: CompaniesApiGetV2CompaniesIdListsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        return this.api.getV2CompaniesIdListsWithHttpInfo(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param param the request object
     */
    public getV2CompaniesIdLists(param: CompaniesApiGetV2CompaniesIdListsRequest, options?: ConfigurationOptions): Promise<ListPaged> {
        return this.api.getV2CompaniesIdLists(param.id, param.cursor, param.limit,  options).toPromise();
    }

}

import { ObservableListsApi } from "./ObservableAPI.ts";
import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi.ts";

export interface ListsApiGetV2ListsListidSavedViewsRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViews
     */
    listId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetV2ListsListidSavedViews
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViews
     */
    limit?: number
}

export interface ListsApiGetV2ListsListidSavedViewsViewidRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViewsViewid
     */
    listId: number
    /**
     * Saved view ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViewsViewid
     */
    viewId: number
}

export interface ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViewsViewidListEntries
     */
    listId: number
    /**
     * Saved view ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViewsViewidListEntries
     */
    viewId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetV2ListsListidSavedViewsViewidListEntries
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApigetV2ListsListidSavedViewsViewidListEntries
     */
    limit?: number
}

export interface ListsApiV2ListsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApiv2ListsGET
     */
    limit?: number
}

export interface ListsApiV2ListsListIdFieldsGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdFieldsGET
     */
    listId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdFieldsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApiv2ListsListIdFieldsGET
     */
    limit?: number
}

export interface ListsApiV2ListsListIdGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdGET
     */
    listId: number
}

export interface ListsApiV2ListsListIdListEntriesGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesGET
     */
    listId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdListEntriesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesGET
     */
    limit?: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ListsApiv2ListsListIdListEntriesGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;list&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof ListsApiv2ListsListIdListEntriesGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>
}

export interface ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdGET
     */
    listEntryId: number
    /**
     * Field ID
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdGET
     */
    fieldId: string
}

export interface ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     */
    listEntryId: number
    /**
     * Field ID
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     */
    fieldId: string
    /**
     * 
     * @type FieldUpdate
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     */
    fieldUpdate: FieldUpdate
}

export interface ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    listEntryId: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    ids?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;list&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    limit?: number
}

export interface ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsPATCH
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsPATCH
     */
    listEntryId: number
    /**
     * 
     * @type ListEntryBatchOperationUpdateFields
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsPATCH
     */
    body: ListEntryBatchOperationUpdateFields
}

export interface ListsApiV2ListsListIdListEntriesListEntryIdGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdGET
     */
    listEntryId: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;list&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>
}

export class ObjectListsApi {
    private api: ObservableListsApi

    public constructor(configuration: Configuration, requestFactory?: ListsApiRequestFactory, responseProcessor?: ListsApiResponseProcessor) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param param the request object
     */
    public getV2ListsListidSavedViewsWithHttpInfo(param: ListsApiGetV2ListsListidSavedViewsRequest, options?: ConfigurationOptions): Promise<HttpInfo<SavedViewPaged>> {
        return this.api.getV2ListsListidSavedViewsWithHttpInfo(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param param the request object
     */
    public getV2ListsListidSavedViews(param: ListsApiGetV2ListsListidSavedViewsRequest, options?: ConfigurationOptions): Promise<SavedViewPaged> {
        return this.api.getV2ListsListidSavedViews(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param param the request object
     */
    public getV2ListsListidSavedViewsViewidWithHttpInfo(param: ListsApiGetV2ListsListidSavedViewsViewidRequest, options?: ConfigurationOptions): Promise<HttpInfo<SavedView>> {
        return this.api.getV2ListsListidSavedViewsViewidWithHttpInfo(param.listId, param.viewId,  options).toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param param the request object
     */
    public getV2ListsListidSavedViewsViewid(param: ListsApiGetV2ListsListidSavedViewsViewidRequest, options?: ConfigurationOptions): Promise<SavedView> {
        return this.api.getV2ListsListidSavedViewsViewid(param.listId, param.viewId,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param param the request object
     */
    public getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(param: ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        return this.api.getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(param.listId, param.viewId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param param the request object
     */
    public getV2ListsListidSavedViewsViewidListEntries(param: ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest, options?: ConfigurationOptions): Promise<ListEntryWithEntityPaged> {
        return this.api.getV2ListsListidSavedViewsViewidListEntries(param.listId, param.viewId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param param the request object
     */
    public v2ListsGETWithHttpInfo(param: ListsApiV2ListsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListWithTypePaged>> {
        return this.api.v2ListsGETWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param param the request object
     */
    public v2ListsGET(param: ListsApiV2ListsGETRequest = {}, options?: ConfigurationOptions): Promise<ListWithTypePaged> {
        return this.api.v2ListsGET(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param param the request object
     */
    public v2ListsListIdFieldsGETWithHttpInfo(param: ListsApiV2ListsListIdFieldsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        return this.api.v2ListsListIdFieldsGETWithHttpInfo(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param param the request object
     */
    public v2ListsListIdFieldsGET(param: ListsApiV2ListsListIdFieldsGETRequest, options?: ConfigurationOptions): Promise<FieldMetadataPaged> {
        return this.api.v2ListsListIdFieldsGET(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param param the request object
     */
    public v2ListsListIdGETWithHttpInfo(param: ListsApiV2ListsListIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListWithType>> {
        return this.api.v2ListsListIdGETWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param param the request object
     */
    public v2ListsListIdGET(param: ListsApiV2ListsListIdGETRequest, options?: ConfigurationOptions): Promise<ListWithType> {
        return this.api.v2ListsListIdGET(param.listId,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a List
     * @param param the request object
     */
    public v2ListsListIdListEntriesGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        return this.api.v2ListsListIdListEntriesGETWithHttpInfo(param.listId, param.cursor, param.limit, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a List
     * @param param the request object
     */
    public v2ListsListIdListEntriesGET(param: ListsApiV2ListsListIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<ListEntryWithEntityPaged> {
        return this.api.v2ListsListIdListEntriesGET(param.listId, param.cursor, param.limit, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Field>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(param.listId, param.listEntryId, param.fieldId,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest, options?: ConfigurationOptions): Promise<Field> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(param.listId, param.listEntryId, param.fieldId,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(param.listId, param.listEntryId, param.fieldId, param.fieldUpdate,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(param.listId, param.listEntryId, param.fieldId, param.fieldUpdate,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<FieldPaged>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(param.listId, param.listEntryId, param.ids, param.types, param.cursor, param.limit,  options).toPromise();
    }

    /**
     *  | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGET(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest, options?: ConfigurationOptions): Promise<FieldPaged> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsGET(param.listId, param.listEntryId, param.ids, param.types, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryBatchOperationResponse>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(param.listId, param.listEntryId, param.body,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCH(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest, options?: ConfigurationOptions): Promise<ListEntryBatchOperationResponse> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCH(param.listId, param.listEntryId, param.body,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryWithEntity>> {
        return this.api.v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(param.listId, param.listEntryId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List [BETA]
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdGET(param: ListsApiV2ListsListIdListEntriesListEntryIdGETRequest, options?: ConfigurationOptions): Promise<ListEntryWithEntity> {
        return this.api.v2ListsListIdListEntriesListEntryIdGET(param.listId, param.listEntryId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

}

import { ObservableOpportunitiesApi } from "./ObservableAPI.ts";
import { OpportunitiesApiRequestFactory, OpportunitiesApiResponseProcessor} from "../apis/OpportunitiesApi.ts";

export interface OpportunitiesApiGetV2OpportunitiesRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof OpportunitiesApigetV2Opportunities
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof OpportunitiesApigetV2Opportunities
     */
    limit?: number
    /**
     * Opportunity IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof OpportunitiesApigetV2Opportunities
     */
    ids?: Array<number>
}

export interface OpportunitiesApiGetV2OpportunitiesIdRequest {
    /**
     * Opportunity ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof OpportunitiesApigetV2OpportunitiesId
     */
    id: number
}

export class ObjectOpportunitiesApi {
    private api: ObservableOpportunitiesApi

    public constructor(configuration: Configuration, requestFactory?: OpportunitiesApiRequestFactory, responseProcessor?: OpportunitiesApiResponseProcessor) {
        this.api = new ObservableOpportunitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param param the request object
     */
    public getV2OpportunitiesWithHttpInfo(param: OpportunitiesApiGetV2OpportunitiesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
        return this.api.getV2OpportunitiesWithHttpInfo(param.cursor, param.limit, param.ids,  options).toPromise();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param param the request object
     */
    public getV2Opportunities(param: OpportunitiesApiGetV2OpportunitiesRequest = {}, options?: ConfigurationOptions): Promise<OpportunityPaged> {
        return this.api.getV2Opportunities(param.cursor, param.limit, param.ids,  options).toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param param the request object
     */
    public getV2OpportunitiesIdWithHttpInfo(param: OpportunitiesApiGetV2OpportunitiesIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Opportunity>> {
        return this.api.getV2OpportunitiesIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param param the request object
     */
    public getV2OpportunitiesId(param: OpportunitiesApiGetV2OpportunitiesIdRequest, options?: ConfigurationOptions): Promise<Opportunity> {
        return this.api.getV2OpportunitiesId(param.id,  options).toPromise();
    }

}

import { ObservablePersonsApi } from "./ObservableAPI.ts";
import { PersonsApiRequestFactory, PersonsApiResponseProcessor} from "../apis/PersonsApi.ts";

export interface PersonsApiGetV2PersonsRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApigetV2Persons
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApigetV2Persons
     */
    limit?: number
    /**
     * People IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof PersonsApigetV2Persons
     */
    ids?: Array<number>
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonsApigetV2Persons
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof PersonsApigetV2Persons
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface PersonsApiGetV2PersonsFieldsRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApigetV2PersonsFields
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApigetV2PersonsFields
     */
    limit?: number
}

export interface PersonsApiGetV2PersonsIdRequest {
    /**
     * Person ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApigetV2PersonsId
     */
    id: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonsApigetV2PersonsId
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof PersonsApigetV2PersonsId
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface PersonsApiGetV2PersonsIdListEntriesRequest {
    /**
     * Persons ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApigetV2PersonsIdListEntries
     */
    id: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApigetV2PersonsIdListEntries
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApigetV2PersonsIdListEntries
     */
    limit?: number
}

export interface PersonsApiGetV2PersonsIdListsRequest {
    /**
     * Persons ID
     * Minimum: 1
     * Maximum: -9223372036854775616
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApigetV2PersonsIdLists
     */
    id: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApigetV2PersonsIdLists
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApigetV2PersonsIdLists
     */
    limit?: number
}

export class ObjectPersonsApi {
    private api: ObservablePersonsApi

    public constructor(configuration: Configuration, requestFactory?: PersonsApiRequestFactory, responseProcessor?: PersonsApiResponseProcessor) {
        this.api = new ObservablePersonsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param param the request object
     */
    public getV2PersonsWithHttpInfo(param: PersonsApiGetV2PersonsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PersonPaged>> {
        return this.api.getV2PersonsWithHttpInfo(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param param the request object
     */
    public getV2Persons(param: PersonsApiGetV2PersonsRequest = {}, options?: ConfigurationOptions): Promise<PersonPaged> {
        return this.api.getV2Persons(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param param the request object
     */
    public getV2PersonsFieldsWithHttpInfo(param: PersonsApiGetV2PersonsFieldsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        return this.api.getV2PersonsFieldsWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param param the request object
     */
    public getV2PersonsFields(param: PersonsApiGetV2PersonsFieldsRequest = {}, options?: ConfigurationOptions): Promise<FieldMetadataPaged> {
        return this.api.getV2PersonsFields(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param param the request object
     */
    public getV2PersonsIdWithHttpInfo(param: PersonsApiGetV2PersonsIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Person>> {
        return this.api.getV2PersonsIdWithHttpInfo(param.id, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param param the request object
     */
    public getV2PersonsId(param: PersonsApiGetV2PersonsIdRequest, options?: ConfigurationOptions): Promise<Person> {
        return this.api.getV2PersonsId(param.id, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param param the request object
     */
    public getV2PersonsIdListEntriesWithHttpInfo(param: PersonsApiGetV2PersonsIdListEntriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        return this.api.getV2PersonsIdListEntriesWithHttpInfo(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param param the request object
     */
    public getV2PersonsIdListEntries(param: PersonsApiGetV2PersonsIdListEntriesRequest, options?: ConfigurationOptions): Promise<ListEntryPaged> {
        return this.api.getV2PersonsIdListEntries(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param param the request object
     */
    public getV2PersonsIdListsWithHttpInfo(param: PersonsApiGetV2PersonsIdListsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        return this.api.getV2PersonsIdListsWithHttpInfo(param.id, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param param the request object
     */
    public getV2PersonsIdLists(param: PersonsApiGetV2PersonsIdListsRequest, options?: ConfigurationOptions): Promise<ListPaged> {
        return this.api.getV2PersonsIdLists(param.id, param.cursor, param.limit,  options).toPromise();
    }

}
