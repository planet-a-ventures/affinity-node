import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration.ts'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware.ts';

import { Attendee } from '../models/Attendee.ts';
import { AttendeesPreview } from '../models/AttendeesPreview.ts';
import { AuthenticationError } from '../models/AuthenticationError.ts';
import { AuthorizationError } from '../models/AuthorizationError.ts';
import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { BadRequestError } from '../models/BadRequestError.ts';
import { ChatMessage } from '../models/ChatMessage.ts';
import { CompaniesValue } from '../models/CompaniesValue.ts';
import { CompaniesValueUpdate } from '../models/CompaniesValueUpdate.ts';
import { Company } from '../models/Company.ts';
import { CompanyData } from '../models/CompanyData.ts';
import { CompanyDataPaged } from '../models/CompanyDataPaged.ts';
import { CompanyListEntry } from '../models/CompanyListEntry.ts';
import { CompanyMergeRequest } from '../models/CompanyMergeRequest.ts';
import { CompanyMergeResponse } from '../models/CompanyMergeResponse.ts';
import { CompanyMergeState } from '../models/CompanyMergeState.ts';
import { CompanyMergeStatePaged } from '../models/CompanyMergeStatePaged.ts';
import { CompanyMergeTask } from '../models/CompanyMergeTask.ts';
import { CompanyMergeTaskPaged } from '../models/CompanyMergeTaskPaged.ts';
import { CompanyMergeTaskResultsSummary } from '../models/CompanyMergeTaskResultsSummary.ts';
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
import { Interaction } from '../models/Interaction.ts';
import { InteractionValue } from '../models/InteractionValue.ts';
import { InteractionsCall } from '../models/InteractionsCall.ts';
import { InteractionsCallCreator } from '../models/InteractionsCallCreator.ts';
import { InteractionsCallPaged } from '../models/InteractionsCallPaged.ts';
import { InteractionsChatMessage } from '../models/InteractionsChatMessage.ts';
import { InteractionsChatMessagePaged } from '../models/InteractionsChatMessagePaged.ts';
import { InteractionsEmail } from '../models/InteractionsEmail.ts';
import { InteractionsEmailPaged } from '../models/InteractionsEmailPaged.ts';
import { InteractionsMeeting } from '../models/InteractionsMeeting.ts';
import { InteractionsMeetingCreator } from '../models/InteractionsMeetingCreator.ts';
import { InteractionsMeetingOrganizer } from '../models/InteractionsMeetingOrganizer.ts';
import { InteractionsMeetingPaged } from '../models/InteractionsMeetingPaged.ts';
import { List } from '../models/List.ts';
import { ListEntry } from '../models/ListEntry.ts';
import { ListEntryBatchOperationRequest } from '../models/ListEntryBatchOperationRequest.ts';
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
import { NotesAiNotetakerReplyNote } from '../models/NotesAiNotetakerReplyNote.ts';
import { NotesAiNotetakerRootNote } from '../models/NotesAiNotetakerRootNote.ts';
import { NotesBaseNote } from '../models/NotesBaseNote.ts';
import { NotesBaseReply } from '../models/NotesBaseReply.ts';
import { NotesBaseRootNote } from '../models/NotesBaseRootNote.ts';
import { NotesCallInteraction } from '../models/NotesCallInteraction.ts';
import { NotesChatMessageInteraction } from '../models/NotesChatMessageInteraction.ts';
import { NotesCompaniesPreview } from '../models/NotesCompaniesPreview.ts';
import { NotesContent } from '../models/NotesContent.ts';
import { NotesEmailInteraction } from '../models/NotesEmailInteraction.ts';
import { NotesEntitiesNote } from '../models/NotesEntitiesNote.ts';
import { NotesInteraction } from '../models/NotesInteraction.ts';
import { NotesInteractionNote } from '../models/NotesInteractionNote.ts';
import { NotesMeetingInteraction } from '../models/NotesMeetingInteraction.ts';
import { NotesMention } from '../models/NotesMention.ts';
import { NotesNote } from '../models/NotesNote.ts';
import { NotesNotesPaged } from '../models/NotesNotesPaged.ts';
import { NotesOpportunitiesPreview } from '../models/NotesOpportunitiesPreview.ts';
import { NotesPermissionSettings } from '../models/NotesPermissionSettings.ts';
import { NotesPersonMention } from '../models/NotesPersonMention.ts';
import { NotesPersonsPreview } from '../models/NotesPersonsPreview.ts';
import { NotesRepliesPaged } from '../models/NotesRepliesPaged.ts';
import { NotesReply } from '../models/NotesReply.ts';
import { NotesUserReplyNote } from '../models/NotesUserReplyNote.ts';
import { Opportunity } from '../models/Opportunity.ts';
import { OpportunityListEntry } from '../models/OpportunityListEntry.ts';
import { OpportunityPaged } from '../models/OpportunityPaged.ts';
import { OpportunityWithFields } from '../models/OpportunityWithFields.ts';
import { Pagination } from '../models/Pagination.ts';
import { PaginationWithTotalCount } from '../models/PaginationWithTotalCount.ts';
import { Person } from '../models/Person.ts';
import { PersonData } from '../models/PersonData.ts';
import { PersonDataPaged } from '../models/PersonDataPaged.ts';
import { PersonDataPreview } from '../models/PersonDataPreview.ts';
import { PersonListEntry } from '../models/PersonListEntry.ts';
import { PersonMergeRequest } from '../models/PersonMergeRequest.ts';
import { PersonMergeResponse } from '../models/PersonMergeResponse.ts';
import { PersonMergeState } from '../models/PersonMergeState.ts';
import { PersonMergeStatePaged } from '../models/PersonMergeStatePaged.ts';
import { PersonMergeTask } from '../models/PersonMergeTask.ts';
import { PersonMergeTaskPaged } from '../models/PersonMergeTaskPaged.ts';
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
import { Responses400 } from '../models/Responses400.ts';
import { Responses400ErrorsInner } from '../models/Responses400ErrorsInner.ts';
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
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     */
    public v2AuthWhoamiGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<WhoAmI>> {
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
        const result = this.api.v2AuthWhoamiGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     */
    public v2AuthWhoamiGET(_options?: PromiseConfigurationOptions): Promise<WhoAmI> {
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
        const result = this.api.v2AuthWhoamiGET(observableOptions);
        return result.toPromise();
    }


}



import { ObservableCallsApi } from './ObservableAPI.ts';

import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi.ts";
export class PromiseCallsApi {
    private api: ObservableCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallsApiRequestFactory,
        responseProcessor?: CallsApiResponseProcessor
    ) {
        this.api = new ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2CallsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InteractionsCallPaged>> {
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
        const result = this.api.v2CallsGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2CallsGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<InteractionsCallPaged> {
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
        const result = this.api.v2CallsGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }


}



import { ObservableChatMessagesApi } from './ObservableAPI.ts';

import { ChatMessagesApiRequestFactory, ChatMessagesApiResponseProcessor} from "../apis/ChatMessagesApi.ts";
export class PromiseChatMessagesApi {
    private api: ObservableChatMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChatMessagesApiRequestFactory,
        responseProcessor?: ChatMessagesApiResponseProcessor
    ) {
        this.api = new ObservableChatMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2ChatMessagesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InteractionsChatMessagePaged>> {
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
        const result = this.api.v2ChatMessagesGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2ChatMessagesGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<InteractionsChatMessagePaged> {
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
        const result = this.api.v2ChatMessagesGET(cursor, limit, filter, observableOptions);
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
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param companyId Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2CompaniesCompanyIdGETWithHttpInfo(companyId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
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
        const result = this.api.v2CompaniesCompanyIdGETWithHttpInfo(companyId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param companyId Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2CompaniesCompanyIdGET(companyId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<Company> {
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
        const result = this.api.v2CompaniesCompanyIdGET(companyId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListEntriesGETWithHttpInfo(companyId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
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
        const result = this.api.v2CompaniesCompanyIdListEntriesGETWithHttpInfo(companyId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListEntriesGET(companyId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryPaged> {
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
        const result = this.api.v2CompaniesCompanyIdListEntriesGET(companyId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListsGETWithHttpInfo(companyId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPaged>> {
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
        const result = this.api.v2CompaniesCompanyIdListsGETWithHttpInfo(companyId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListsGET(companyId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListPaged> {
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
        const result = this.api.v2CompaniesCompanyIdListsGET(companyId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns relevant notes for a given company which includes directly attached notes and notes attached to persons on this company.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Company
     * @param companyId Company\&#39;s ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2CompaniesCompanyIdNotesGETWithHttpInfo(companyId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
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
        const result = this.api.v2CompaniesCompanyIdNotesGETWithHttpInfo(companyId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns relevant notes for a given company which includes directly attached notes and notes attached to persons on this company.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Company
     * @param companyId Company\&#39;s ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2CompaniesCompanyIdNotesGET(companyId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<NotesNotesPaged> {
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
        const result = this.api.v2CompaniesCompanyIdNotesGET(companyId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesFieldsGETWithHttpInfo(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
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
        const result = this.api.v2CompaniesFieldsGETWithHttpInfo(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesFieldsGET(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldMetadataPaged> {
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
        const result = this.api.v2CompaniesFieldsGET(cursor, limit, observableOptions);
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
    public v2CompaniesGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyPaged>> {
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
        const result = this.api.v2CompaniesGETWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
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
    public v2CompaniesGET(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<CompanyPaged> {
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
        const result = this.api.v2CompaniesGET(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCompanyMergesApi } from './ObservableAPI.ts';

import { CompanyMergesApiRequestFactory, CompanyMergesApiResponseProcessor} from "../apis/CompanyMergesApi.ts";
export class PromiseCompanyMergesApi {
    private api: ObservableCompanyMergesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyMergesApiRequestFactory,
        responseProcessor?: CompanyMergesApiResponseProcessor
    ) {
        this.api = new ObservableCompanyMergesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter company merges using Affinity Filtering Language
     */
    public v2CompanyMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyMergeStatePaged>> {
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
        const result = this.api.v2CompanyMergesGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter company merges using Affinity Filtering Language
     */
    public v2CompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<CompanyMergeStatePaged> {
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
        const result = this.api.v2CompanyMergesGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param mergeId Company merge ID
     */
    public v2CompanyMergesMergeIdGETWithHttpInfo(mergeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyMergeState>> {
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
        const result = this.api.v2CompanyMergesMergeIdGETWithHttpInfo(mergeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param mergeId Company merge ID
     */
    public v2CompanyMergesMergeIdGET(mergeId: number, _options?: PromiseConfigurationOptions): Promise<CompanyMergeState> {
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
        const result = this.api.v2CompanyMergesMergeIdGET(mergeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param companyMergeRequest
     */
    public v2CompanyMergesPOSTWithHttpInfo(companyMergeRequest: CompanyMergeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyMergeResponse>> {
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
        const result = this.api.v2CompanyMergesPOSTWithHttpInfo(companyMergeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param companyMergeRequest
     */
    public v2CompanyMergesPOST(companyMergeRequest: CompanyMergeRequest, _options?: PromiseConfigurationOptions): Promise<CompanyMergeResponse> {
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
        const result = this.api.v2CompanyMergesPOST(companyMergeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksCompanyMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyMergeTaskPaged>> {
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
        const result = this.api.v2TasksCompanyMergesGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksCompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<CompanyMergeTaskPaged> {
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
        const result = this.api.v2TasksCompanyMergesGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param taskId Company merge task ID
     */
    public v2TasksCompanyMergesTaskIdGETWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyMergeTask>> {
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
        const result = this.api.v2TasksCompanyMergesTaskIdGETWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param taskId Company merge task ID
     */
    public v2TasksCompanyMergesTaskIdGET(taskId: string, _options?: PromiseConfigurationOptions): Promise<CompanyMergeTask> {
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
        const result = this.api.v2TasksCompanyMergesTaskIdGET(taskId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEmailsApi } from './ObservableAPI.ts';

import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi.ts";
export class PromiseEmailsApi {
    private api: ObservableEmailsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailsApiRequestFactory,
        responseProcessor?: EmailsApiResponseProcessor
    ) {
        this.api = new ObservableEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2EmailsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InteractionsEmailPaged>> {
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
        const result = this.api.v2EmailsGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2EmailsGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<InteractionsEmailPaged> {
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
        const result = this.api.v2EmailsGET(cursor, limit, filter, observableOptions);
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
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
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
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
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
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
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
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
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
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
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
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
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
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
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
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
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
     * Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry
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
     * Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry
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
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param listEntryBatchOperationRequest
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId: number, listEntryId: number, listEntryBatchOperationRequest: ListEntryBatchOperationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryBatchOperationResponse>> {
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
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId, listEntryId, listEntryBatchOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param listEntryBatchOperationRequest
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId: number, listEntryId: number, listEntryBatchOperationRequest: ListEntryBatchOperationRequest, _options?: PromiseConfigurationOptions): Promise<ListEntryBatchOperationResponse> {
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
        const result = this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId, listEntryId, listEntryBatchOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
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
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
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

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsGETWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SavedViewPaged>> {
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
        const result = this.api.v2ListsListIdSavedViewsGETWithHttpInfo(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsGET(listId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<SavedViewPaged> {
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
        const result = this.api.v2ListsListIdSavedViewsGET(listId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public v2ListsListIdSavedViewsViewIdGETWithHttpInfo(listId: number, viewId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SavedView>> {
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
        const result = this.api.v2ListsListIdSavedViewsViewIdGETWithHttpInfo(listId, viewId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public v2ListsListIdSavedViewsViewIdGET(listId: number, viewId: number, _options?: PromiseConfigurationOptions): Promise<SavedView> {
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
        const result = this.api.v2ListsListIdSavedViewsViewIdGET(listId, viewId, observableOptions);
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
    public v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(listId: number, viewId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
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
        const result = this.api.v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(listId, viewId, cursor, limit, observableOptions);
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
    public v2ListsListIdSavedViewsViewIdListEntriesGET(listId: number, viewId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryWithEntityPaged> {
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
        const result = this.api.v2ListsListIdSavedViewsViewIdListEntriesGET(listId, viewId, cursor, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMeetingsApi } from './ObservableAPI.ts';

import { MeetingsApiRequestFactory, MeetingsApiResponseProcessor} from "../apis/MeetingsApi.ts";
export class PromiseMeetingsApi {
    private api: ObservableMeetingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MeetingsApiRequestFactory,
        responseProcessor?: MeetingsApiResponseProcessor
    ) {
        this.api = new ObservableMeetingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2MeetingsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InteractionsMeetingPaged>> {
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
        const result = this.api.v2MeetingsGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2MeetingsGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<InteractionsMeetingPaged> {
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
        const result = this.api.v2MeetingsGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNotesApi } from './ObservableAPI.ts';

import { NotesApiRequestFactory, NotesApiResponseProcessor} from "../apis/NotesApi.ts";
export class PromiseNotesApi {
    private api: ObservableNotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotesApiRequestFactory,
        responseProcessor?: NotesApiResponseProcessor
    ) {
        this.api = new ObservableNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns all notes, with the exception of replies. You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `id`                        | Filter notes by id                                              | `int32`    | `=`                                  | `id=1`                          | | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get all Notes
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesGETWithHttpInfo(totalCount?: boolean, cursor?: string, limit?: number, filter?: string, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
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
        const result = this.api.v2NotesGETWithHttpInfo(totalCount, cursor, limit, filter, includes, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns all notes, with the exception of replies. You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `id`                        | Filter notes by id                                              | `int32`    | `=`                                  | `id=1`                          | | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get all Notes
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesGET(totalCount?: boolean, cursor?: string, limit?: number, filter?: string, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: PromiseConfigurationOptions): Promise<NotesNotesPaged> {
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
        const result = this.api.v2NotesGET(totalCount, cursor, limit, filter, includes, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param noteId The id of the Note to get attached Companies
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompanyDataPaged>> {
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
        const result = this.api.v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param noteId The id of the Note to get attached Companies
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedCompaniesGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CompanyDataPaged> {
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
        const result = this.api.v2NotesNoteIdAttachedCompaniesGET(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param noteId The id of the Note to get attached Opportunities
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
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
        const result = this.api.v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param noteId The id of the Note to get attached Opportunities
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedOpportunitiesGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<OpportunityPaged> {
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
        const result = this.api.v2NotesNoteIdAttachedOpportunitiesGET(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param noteId The id of the Note to get attached Persons
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedPersonsGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonDataPaged>> {
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
        const result = this.api.v2NotesNoteIdAttachedPersonsGETWithHttpInfo(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param noteId The id of the Note to get attached Persons
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedPersonsGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<PersonDataPaged> {
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
        const result = this.api.v2NotesNoteIdAttachedPersonsGET(noteId, totalCount, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param noteId The id of the Note
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesNoteIdGETWithHttpInfo(noteId: number, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesNote>> {
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
        const result = this.api.v2NotesNoteIdGETWithHttpInfo(noteId, includes, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param noteId The id of the Note
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesNoteIdGET(noteId: number, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: PromiseConfigurationOptions): Promise<NotesNote> {
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
        const result = this.api.v2NotesNoteIdGET(noteId, includes, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  This endpoint returns reply notes for a given note id. You can filter replies using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get replies for a Note
     * @param noteId Note ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2NotesNoteIdRepliesGETWithHttpInfo(noteId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesRepliesPaged>> {
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
        const result = this.api.v2NotesNoteIdRepliesGETWithHttpInfo(noteId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  This endpoint returns reply notes for a given note id. You can filter replies using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get replies for a Note
     * @param noteId Note ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2NotesNoteIdRepliesGET(noteId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<NotesRepliesPaged> {
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
        const result = this.api.v2NotesNoteIdRepliesGET(noteId, filter, cursor, limit, totalCount, observableOptions);
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
    public v2OpportunitiesGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
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
        const result = this.api.v2OpportunitiesGETWithHttpInfo(cursor, limit, ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public v2OpportunitiesGET(cursor?: string, limit?: number, ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<OpportunityPaged> {
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
        const result = this.api.v2OpportunitiesGET(cursor, limit, ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param opportunityId Opportunity ID
     */
    public v2OpportunitiesOpportunityIdGETWithHttpInfo(opportunityId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Opportunity>> {
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
        const result = this.api.v2OpportunitiesOpportunityIdGETWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param opportunityId Opportunity ID
     */
    public v2OpportunitiesOpportunityIdGET(opportunityId: number, _options?: PromiseConfigurationOptions): Promise<Opportunity> {
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
        const result = this.api.v2OpportunitiesOpportunityIdGET(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns Notes for a given Opportunity which includes directly attached notes and those attached to persons on this Opportunity.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for an Opportunity
     * @param opportunityId Opportunity ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(opportunityId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
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
        const result = this.api.v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(opportunityId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns Notes for a given Opportunity which includes directly attached notes and those attached to persons on this Opportunity.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for an Opportunity
     * @param opportunityId Opportunity ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2OpportunitiesOpportunityIdNotesGET(opportunityId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<NotesNotesPaged> {
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
        const result = this.api.v2OpportunitiesOpportunityIdNotesGET(opportunityId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePersonMergesApi } from './ObservableAPI.ts';

import { PersonMergesApiRequestFactory, PersonMergesApiResponseProcessor} from "../apis/PersonMergesApi.ts";
export class PromisePersonMergesApi {
    private api: ObservablePersonMergesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonMergesApiRequestFactory,
        responseProcessor?: PersonMergesApiResponseProcessor
    ) {
        this.api = new ObservablePersonMergesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter person merges using Affinity Filtering Language
     */
    public v2PersonMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonMergeStatePaged>> {
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
        const result = this.api.v2PersonMergesGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter person merges using Affinity Filtering Language
     */
    public v2PersonMergesGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<PersonMergeStatePaged> {
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
        const result = this.api.v2PersonMergesGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param mergeId Person merge ID
     */
    public v2PersonMergesMergeIdGETWithHttpInfo(mergeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonMergeState>> {
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
        const result = this.api.v2PersonMergesMergeIdGETWithHttpInfo(mergeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param mergeId Person merge ID
     */
    public v2PersonMergesMergeIdGET(mergeId: number, _options?: PromiseConfigurationOptions): Promise<PersonMergeState> {
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
        const result = this.api.v2PersonMergesMergeIdGET(mergeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param personMergeRequest
     */
    public v2PersonMergesPOSTWithHttpInfo(personMergeRequest: PersonMergeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonMergeResponse>> {
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
        const result = this.api.v2PersonMergesPOSTWithHttpInfo(personMergeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param personMergeRequest
     */
    public v2PersonMergesPOST(personMergeRequest: PersonMergeRequest, _options?: PromiseConfigurationOptions): Promise<PersonMergeResponse> {
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
        const result = this.api.v2PersonMergesPOST(personMergeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksPersonMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonMergeTaskPaged>> {
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
        const result = this.api.v2TasksPersonMergesGETWithHttpInfo(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksPersonMergesGET(cursor?: string, limit?: number, filter?: string, _options?: PromiseConfigurationOptions): Promise<PersonMergeTaskPaged> {
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
        const result = this.api.v2TasksPersonMergesGET(cursor, limit, filter, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param taskId Person merge task ID
     */
    public v2TasksPersonMergesTaskIdGETWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonMergeTask>> {
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
        const result = this.api.v2TasksPersonMergesTaskIdGETWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param taskId Person merge task ID
     */
    public v2TasksPersonMergesTaskIdGET(taskId: string, _options?: PromiseConfigurationOptions): Promise<PersonMergeTask> {
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
        const result = this.api.v2TasksPersonMergesTaskIdGET(taskId, observableOptions);
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
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsFieldsGETWithHttpInfo(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
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
        const result = this.api.v2PersonsFieldsGETWithHttpInfo(cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsFieldsGET(cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<FieldMetadataPaged> {
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
        const result = this.api.v2PersonsFieldsGET(cursor, limit, observableOptions);
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
    public v2PersonsGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PersonPaged>> {
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
        const result = this.api.v2PersonsGETWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
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
    public v2PersonsGET(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<PersonPaged> {
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
        const result = this.api.v2PersonsGET(cursor, limit, ids, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param personId Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2PersonsPersonIdGETWithHttpInfo(personId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Person>> {
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
        const result = this.api.v2PersonsPersonIdGETWithHttpInfo(personId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param personId Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2PersonsPersonIdGET(personId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: PromiseConfigurationOptions): Promise<Person> {
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
        const result = this.api.v2PersonsPersonIdGET(personId, fieldIds, fieldTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListEntriesGETWithHttpInfo(personId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
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
        const result = this.api.v2PersonsPersonIdListEntriesGETWithHttpInfo(personId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListEntriesGET(personId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListEntryPaged> {
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
        const result = this.api.v2PersonsPersonIdListEntriesGET(personId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListsGETWithHttpInfo(personId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPaged>> {
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
        const result = this.api.v2PersonsPersonIdListsGETWithHttpInfo(personId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListsGET(personId: number, cursor?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ListPaged> {
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
        const result = this.api.v2PersonsPersonIdListsGET(personId, cursor, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns notes for a given person id which includes directly attached notes, notes on meetings this person attended, and notes where this person is mentioned.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Person
     * @param personId Persons ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2PersonsPersonIdNotesGETWithHttpInfo(personId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
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
        const result = this.api.v2PersonsPersonIdNotesGETWithHttpInfo(personId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns notes for a given person id which includes directly attached notes, notes on meetings this person attended, and notes where this person is mentioned.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Person
     * @param personId Persons ID
     * @param [filter] Filter options
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [totalCount] Include total count of the collection in the pagination response
     */
    public v2PersonsPersonIdNotesGET(personId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: PromiseConfigurationOptions): Promise<NotesNotesPaged> {
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
        const result = this.api.v2PersonsPersonIdNotesGET(personId, filter, cursor, limit, totalCount, observableOptions);
        return result.toPromise();
    }


}



