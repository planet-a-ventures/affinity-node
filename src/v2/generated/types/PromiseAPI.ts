import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { Attendee } from '../models/Attendee.ts';
import { AuthenticationError } from '../models/AuthenticationError.ts';
import { AuthenticationErrors } from '../models/AuthenticationErrors.ts';
import { AuthorizationError } from '../models/AuthorizationError.ts';
import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { ChatMessage } from '../models/ChatMessage.ts';
import { CompaniesValue } from '../models/CompaniesValue.ts';
import { Company } from '../models/Company.ts';
import { CompanyData } from '../models/CompanyData.ts';
import { CompanyListEntry } from '../models/CompanyListEntry.ts';
import { CompanyPaged } from '../models/CompanyPaged.ts';
import { CompanyValue } from '../models/CompanyValue.ts';
import { ConflictError } from '../models/ConflictError.ts';
import { DateValue } from '../models/DateValue.ts';
import { Dropdown } from '../models/Dropdown.ts';
import { DropdownValue } from '../models/DropdownValue.ts';
import { DropdownsValue } from '../models/DropdownsValue.ts';
import { Email } from '../models/Email.ts';
import { EmptyMessageBodyError } from '../models/EmptyMessageBodyError.ts';
import { Errors } from '../models/Errors.ts';
import { Field } from '../models/Field.ts';
import { FieldMetadata } from '../models/FieldMetadata.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { FieldValue } from '../models/FieldValue.ts';
import { FloatValue } from '../models/FloatValue.ts';
import { FloatsValue } from '../models/FloatsValue.ts';
import { FormulaNumber } from '../models/FormulaNumber.ts';
import { FormulaValue } from '../models/FormulaValue.ts';
import { GenericError } from '../models/GenericError.ts';
import { Grant } from '../models/Grant.ts';
import { Interaction } from '../models/Interaction.ts';
import { InteractionValue } from '../models/InteractionValue.ts';
import { InvalidAcceptHeaderError } from '../models/InvalidAcceptHeaderError.ts';
import { InvalidMessageBodyError } from '../models/InvalidMessageBodyError.ts';
import { InvalidVersionHeaderError } from '../models/InvalidVersionHeaderError.ts';
import { List } from '../models/List.ts';
import { ListEntry } from '../models/ListEntry.ts';
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
import { NotFoundError } from '../models/NotFoundError.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { Opportunity } from '../models/Opportunity.ts';
import { OpportunityListEntry } from '../models/OpportunityListEntry.ts';
import { OpportunityPaged } from '../models/OpportunityPaged.ts';
import { OpportunityWithFields } from '../models/OpportunityWithFields.ts';
import { Pagination } from '../models/Pagination.ts';
import { Person } from '../models/Person.ts';
import { PersonData } from '../models/PersonData.ts';
import { PersonListEntry } from '../models/PersonListEntry.ts';
import { PersonPaged } from '../models/PersonPaged.ts';
import { PersonValue } from '../models/PersonValue.ts';
import { PersonsValue } from '../models/PersonsValue.ts';
import { PhoneCall } from '../models/PhoneCall.ts';
import { RankedDropdown } from '../models/RankedDropdown.ts';
import { RankedDropdownValue } from '../models/RankedDropdownValue.ts';
import { RateLimitError } from '../models/RateLimitError.ts';
import { SavedView } from '../models/SavedView.ts';
import { SavedViewPaged } from '../models/SavedViewPaged.ts';
import { ServerError } from '../models/ServerError.ts';
import { Tenant } from '../models/Tenant.ts';
import { TextValue } from '../models/TextValue.ts';
import { TextsValue } from '../models/TextsValue.ts';
import { TooManyMultipartFilesError } from '../models/TooManyMultipartFilesError.ts';
import { User } from '../models/User.ts';
import { ValidationError } from '../models/ValidationError.ts';
import { ValidationErrors } from '../models/ValidationErrors.ts';
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
    public getV2AuthWhoamiWithHttpInfo(_options?: Configuration): Promise<HttpInfo<WhoAmI>> {
        const result = this.api.getV2AuthWhoamiWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     */
    public getV2AuthWhoami(_options?: Configuration): Promise<WhoAmI> {
        const result = this.api.getV2AuthWhoami(_options);
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
    public getV2CompaniesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<HttpInfo<CompanyPaged>> {
        const result = this.api.getV2CompaniesWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options);
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
    public getV2Companies(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<CompanyPaged> {
        const result = this.api.getV2Companies(cursor, limit, ids, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<FieldMetadataPaged>> {
        const result = this.api.getV2CompaniesFieldsWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFields(cursor?: string, limit?: number, _options?: Configuration): Promise<FieldMetadataPaged> {
        const result = this.api.getV2CompaniesFields(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.getV2CompaniesIdWithHttpInfo(id, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<Company> {
        const result = this.api.getV2CompaniesId(id, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListEntryPaged>> {
        const result = this.api.getV2CompaniesIdListEntriesWithHttpInfo(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<ListEntryPaged> {
        const result = this.api.getV2CompaniesIdListEntries(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListPaged>> {
        const result = this.api.getV2CompaniesIdListsWithHttpInfo(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<ListPaged> {
        const result = this.api.getV2CompaniesIdLists(id, cursor, limit, _options);
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
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListWithTypePaged>> {
        const result = this.api.getV2ListsWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2Lists(cursor?: string, limit?: number, _options?: Configuration): Promise<ListWithTypePaged> {
        const result = this.api.getV2Lists(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public getV2ListsListidWithHttpInfo(listId: number, _options?: Configuration): Promise<HttpInfo<ListWithType>> {
        const result = this.api.getV2ListsListidWithHttpInfo(listId, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public getV2ListsListid(listId: number, _options?: Configuration): Promise<ListWithType> {
        const result = this.api.getV2ListsListid(listId, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidFieldsWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<FieldMetadataPaged>> {
        const result = this.api.getV2ListsListidFieldsWithHttpInfo(listId, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidFields(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<FieldMetadataPaged> {
        const result = this.api.getV2ListsListidFields(listId, cursor, limit, _options);
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
    public getV2ListsListidListEntriesWithHttpInfo(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        const result = this.api.getV2ListsListidListEntriesWithHttpInfo(listId, cursor, limit, fieldIds, fieldTypes, _options);
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
    public getV2ListsListidListEntries(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Promise<ListEntryWithEntityPaged> {
        const result = this.api.getV2ListsListidListEntries(listId, cursor, limit, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<SavedViewPaged>> {
        const result = this.api.getV2ListsListidSavedViewsWithHttpInfo(listId, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViews(listId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<SavedViewPaged> {
        const result = this.api.getV2ListsListidSavedViews(listId, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewidWithHttpInfo(listId: number, viewId: number, _options?: Configuration): Promise<HttpInfo<SavedView>> {
        const result = this.api.getV2ListsListidSavedViewsViewidWithHttpInfo(listId, viewId, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewid(listId: number, viewId: number, _options?: Configuration): Promise<SavedView> {
        const result = this.api.getV2ListsListidSavedViewsViewid(listId, viewId, _options);
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
    public getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId: number, viewId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        const result = this.api.getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId, viewId, cursor, limit, _options);
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
    public getV2ListsListidSavedViewsViewidListEntries(listId: number, viewId: number, cursor?: string, limit?: number, _options?: Configuration): Promise<ListEntryWithEntityPaged> {
        const result = this.api.getV2ListsListidSavedViewsViewidListEntries(listId, viewId, cursor, limit, _options);
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
    public getV2OpportunitiesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, _options?: Configuration): Promise<HttpInfo<OpportunityPaged>> {
        const result = this.api.getV2OpportunitiesWithHttpInfo(cursor, limit, ids, _options);
        return result.toPromise();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public getV2Opportunities(cursor?: string, limit?: number, ids?: Array<number>, _options?: Configuration): Promise<OpportunityPaged> {
        const result = this.api.getV2Opportunities(cursor, limit, ids, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesIdWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Opportunity>> {
        const result = this.api.getV2OpportunitiesIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesId(id: number, _options?: Configuration): Promise<Opportunity> {
        const result = this.api.getV2OpportunitiesId(id, _options);
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
    public getV2PersonsWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<HttpInfo<PersonPaged>> {
        const result = this.api.getV2PersonsWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options);
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
    public getV2Persons(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<PersonPaged> {
        const result = this.api.getV2Persons(cursor, limit, ids, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<FieldMetadataPaged>> {
        const result = this.api.getV2PersonsFieldsWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFields(cursor?: string, limit?: number, _options?: Configuration): Promise<FieldMetadataPaged> {
        const result = this.api.getV2PersonsFields(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<HttpInfo<Person>> {
        const result = this.api.getV2PersonsIdWithHttpInfo(id, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Promise<Person> {
        const result = this.api.getV2PersonsId(id, fieldIds, fieldTypes, _options);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListEntryPaged>> {
        const result = this.api.getV2PersonsIdListEntriesWithHttpInfo(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<ListEntryPaged> {
        const result = this.api.getV2PersonsIdListEntries(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ListPaged>> {
        const result = this.api.getV2PersonsIdListsWithHttpInfo(id, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Promise<ListPaged> {
        const result = this.api.getV2PersonsIdLists(id, cursor, limit, _options);
        return result.toPromise();
    }


}



