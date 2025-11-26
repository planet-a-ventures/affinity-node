import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions } from '../configuration.ts'
import type { Middleware } from '../middleware.ts';

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
import { InteractionsCallPaged } from '../models/InteractionsCallPaged.ts';
import { InteractionsChatMessage } from '../models/InteractionsChatMessage.ts';
import { InteractionsChatMessagePaged } from '../models/InteractionsChatMessagePaged.ts';
import { InteractionsEmail } from '../models/InteractionsEmail.ts';
import { InteractionsEmailPaged } from '../models/InteractionsEmailPaged.ts';
import { InteractionsMeeting } from '../models/InteractionsMeeting.ts';
import { InteractionsMeetingPaged } from '../models/InteractionsMeetingPaged.ts';
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
import { NotesAiNotetakerReplyNote } from '../models/NotesAiNotetakerReplyNote.ts';
import { NotesAiNotetakerRootNote } from '../models/NotesAiNotetakerRootNote.ts';
import { NotesBaseNote } from '../models/NotesBaseNote.ts';
import { NotesBaseReply } from '../models/NotesBaseReply.ts';
import { NotesBaseReplyParent } from '../models/NotesBaseReplyParent.ts';
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

import { ObservableAuthApi } from "./ObservableAPI.ts";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.ts";

export interface AuthApiV2AuthWhoamiGETRequest {
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     * @param param the request object
     */
    public v2AuthWhoamiGETWithHttpInfo(param: AuthApiV2AuthWhoamiGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WhoAmI>> {
        return this.api.v2AuthWhoamiGETWithHttpInfo( options).toPromise();
    }

    /**
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     * @param param the request object
     */
    public v2AuthWhoamiGET(param: AuthApiV2AuthWhoamiGETRequest = {}, options?: ConfigurationOptions): Promise<WhoAmI> {
        return this.api.v2AuthWhoamiGET( options).toPromise();
    }

}

import { ObservableCallsApi } from "./ObservableAPI.ts";
import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi.ts";

export interface CallsApiV2CallsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CallsApiv2CallsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CallsApiv2CallsGET
     */
    limit?: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof CallsApiv2CallsGET
     */
    filter?: string
}

export class ObjectCallsApi {
    private api: ObservableCallsApi

    public constructor(configuration: Configuration, requestFactory?: CallsApiRequestFactory, responseProcessor?: CallsApiResponseProcessor) {
        this.api = new ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param param the request object
     */
    public v2CallsGETWithHttpInfo(param: CallsApiV2CallsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<InteractionsCallPaged>> {
        return this.api.v2CallsGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param param the request object
     */
    public v2CallsGET(param: CallsApiV2CallsGETRequest = {}, options?: ConfigurationOptions): Promise<InteractionsCallPaged> {
        return this.api.v2CallsGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

}

import { ObservableChatMessagesApi } from "./ObservableAPI.ts";
import { ChatMessagesApiRequestFactory, ChatMessagesApiResponseProcessor} from "../apis/ChatMessagesApi.ts";

export interface ChatMessagesApiV2ChatMessagesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ChatMessagesApiv2ChatMessagesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ChatMessagesApiv2ChatMessagesGET
     */
    limit?: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof ChatMessagesApiv2ChatMessagesGET
     */
    filter?: string
}

export class ObjectChatMessagesApi {
    private api: ObservableChatMessagesApi

    public constructor(configuration: Configuration, requestFactory?: ChatMessagesApiRequestFactory, responseProcessor?: ChatMessagesApiResponseProcessor) {
        this.api = new ObservableChatMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param param the request object
     */
    public v2ChatMessagesGETWithHttpInfo(param: ChatMessagesApiV2ChatMessagesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<InteractionsChatMessagePaged>> {
        return this.api.v2ChatMessagesGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param param the request object
     */
    public v2ChatMessagesGET(param: ChatMessagesApiV2ChatMessagesGETRequest = {}, options?: ConfigurationOptions): Promise<InteractionsChatMessagePaged> {
        return this.api.v2ChatMessagesGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

}

import { ObservableCompaniesApi } from "./ObservableAPI.ts";
import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi.ts";

export interface CompaniesApiV2CompaniesCompanyIdGETRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdGET
     */
    companyId: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompaniesApiv2CompaniesCompanyIdGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof CompaniesApiv2CompaniesCompanyIdGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface CompaniesApiV2CompaniesCompanyIdListEntriesGETRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdListEntriesGET
     */
    companyId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesCompanyIdListEntriesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdListEntriesGET
     */
    limit?: number
}

export interface CompaniesApiV2CompaniesCompanyIdListsGETRequest {
    /**
     * Company ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdListsGET
     */
    companyId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesCompanyIdListsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdListsGET
     */
    limit?: number
}

export interface CompaniesApiV2CompaniesCompanyIdNotesGETRequest {
    /**
     * Company\&#39;s ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdNotesGET
     */
    companyId: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesCompanyIdNotesGET
     */
    filter?: string
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesCompanyIdNotesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof CompaniesApiv2CompaniesCompanyIdNotesGET
     */
    limit?: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof CompaniesApiv2CompaniesCompanyIdNotesGET
     */
    totalCount?: boolean
}

export interface CompaniesApiV2CompaniesFieldsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesFieldsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApiv2CompaniesFieldsGET
     */
    limit?: number
}

export interface CompaniesApiV2CompaniesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompaniesApiv2CompaniesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompaniesApiv2CompaniesGET
     */
    limit?: number
    /**
     * Company IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof CompaniesApiv2CompaniesGET
     */
    ids?: Array<number>
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompaniesApiv2CompaniesGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof CompaniesApiv2CompaniesGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export class ObjectCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(configuration: Configuration, requestFactory?: CompaniesApiRequestFactory, responseProcessor?: CompaniesApiResponseProcessor) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param param the request object
     */
    public v2CompaniesCompanyIdGETWithHttpInfo(param: CompaniesApiV2CompaniesCompanyIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.v2CompaniesCompanyIdGETWithHttpInfo(param.companyId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param param the request object
     */
    public v2CompaniesCompanyIdGET(param: CompaniesApiV2CompaniesCompanyIdGETRequest, options?: ConfigurationOptions): Promise<Company> {
        return this.api.v2CompaniesCompanyIdGET(param.companyId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param param the request object
     */
    public v2CompaniesCompanyIdListEntriesGETWithHttpInfo(param: CompaniesApiV2CompaniesCompanyIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        return this.api.v2CompaniesCompanyIdListEntriesGETWithHttpInfo(param.companyId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param param the request object
     */
    public v2CompaniesCompanyIdListEntriesGET(param: CompaniesApiV2CompaniesCompanyIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<ListEntryPaged> {
        return this.api.v2CompaniesCompanyIdListEntriesGET(param.companyId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param param the request object
     */
    public v2CompaniesCompanyIdListsGETWithHttpInfo(param: CompaniesApiV2CompaniesCompanyIdListsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        return this.api.v2CompaniesCompanyIdListsGETWithHttpInfo(param.companyId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param param the request object
     */
    public v2CompaniesCompanyIdListsGET(param: CompaniesApiV2CompaniesCompanyIdListsGETRequest, options?: ConfigurationOptions): Promise<ListPaged> {
        return this.api.v2CompaniesCompanyIdListsGET(param.companyId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns relevant notes for a given company which includes directly attached notes and notes attached to persons on this company.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Company
     * @param param the request object
     */
    public v2CompaniesCompanyIdNotesGETWithHttpInfo(param: CompaniesApiV2CompaniesCompanyIdNotesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
        return this.api.v2CompaniesCompanyIdNotesGETWithHttpInfo(param.companyId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns relevant notes for a given company which includes directly attached notes and notes attached to persons on this company.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Company
     * @param param the request object
     */
    public v2CompaniesCompanyIdNotesGET(param: CompaniesApiV2CompaniesCompanyIdNotesGETRequest, options?: ConfigurationOptions): Promise<NotesNotesPaged> {
        return this.api.v2CompaniesCompanyIdNotesGET(param.companyId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param param the request object
     */
    public v2CompaniesFieldsGETWithHttpInfo(param: CompaniesApiV2CompaniesFieldsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        return this.api.v2CompaniesFieldsGETWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param param the request object
     */
    public v2CompaniesFieldsGET(param: CompaniesApiV2CompaniesFieldsGETRequest = {}, options?: ConfigurationOptions): Promise<FieldMetadataPaged> {
        return this.api.v2CompaniesFieldsGET(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param param the request object
     */
    public v2CompaniesGETWithHttpInfo(param: CompaniesApiV2CompaniesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CompanyPaged>> {
        return this.api.v2CompaniesGETWithHttpInfo(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param param the request object
     */
    public v2CompaniesGET(param: CompaniesApiV2CompaniesGETRequest = {}, options?: ConfigurationOptions): Promise<CompanyPaged> {
        return this.api.v2CompaniesGET(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

}

import { ObservableCompanyMergesApi } from "./ObservableAPI.ts";
import { CompanyMergesApiRequestFactory, CompanyMergesApiResponseProcessor} from "../apis/CompanyMergesApi.ts";

export interface CompanyMergesApiV2CompanyMergesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompanyMergesApiv2CompanyMergesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompanyMergesApiv2CompanyMergesGET
     */
    limit?: number
    /**
     * Filter company merges using Affinity Filtering Language
     * Defaults to: undefined
     * @type string
     * @memberof CompanyMergesApiv2CompanyMergesGET
     */
    filter?: string
}

export interface CompanyMergesApiV2CompanyMergesMergeIdGETRequest {
    /**
     * Company merge ID
     * Minimum: 1
     * Maximum: 9007199254740991
     * Defaults to: undefined
     * @type number
     * @memberof CompanyMergesApiv2CompanyMergesMergeIdGET
     */
    mergeId: number
}

export interface CompanyMergesApiV2CompanyMergesPOSTRequest {
    /**
     * 
     * @type CompanyMergeRequest
     * @memberof CompanyMergesApiv2CompanyMergesPOST
     */
    companyMergeRequest: CompanyMergeRequest
}

export interface CompanyMergesApiV2TasksCompanyMergesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof CompanyMergesApiv2TasksCompanyMergesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof CompanyMergesApiv2TasksCompanyMergesGET
     */
    limit?: number
    /**
     * Filter tasks using Affinity Filtering Language
     * Defaults to: undefined
     * @type string
     * @memberof CompanyMergesApiv2TasksCompanyMergesGET
     */
    filter?: string
}

export interface CompanyMergesApiV2TasksCompanyMergesTaskIdGETRequest {
    /**
     * Company merge task ID
     * Defaults to: undefined
     * @type string
     * @memberof CompanyMergesApiv2TasksCompanyMergesTaskIdGET
     */
    taskId: string
}

export class ObjectCompanyMergesApi {
    private api: ObservableCompanyMergesApi

    public constructor(configuration: Configuration, requestFactory?: CompanyMergesApiRequestFactory, responseProcessor?: CompanyMergesApiResponseProcessor) {
        this.api = new ObservableCompanyMergesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param param the request object
     */
    public v2CompanyMergesGETWithHttpInfo(param: CompanyMergesApiV2CompanyMergesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CompanyMergeStatePaged>> {
        return this.api.v2CompanyMergesGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param param the request object
     */
    public v2CompanyMergesGET(param: CompanyMergesApiV2CompanyMergesGETRequest = {}, options?: ConfigurationOptions): Promise<CompanyMergeStatePaged> {
        return this.api.v2CompanyMergesGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param param the request object
     */
    public v2CompanyMergesMergeIdGETWithHttpInfo(param: CompanyMergesApiV2CompanyMergesMergeIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<CompanyMergeState>> {
        return this.api.v2CompanyMergesMergeIdGETWithHttpInfo(param.mergeId,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param param the request object
     */
    public v2CompanyMergesMergeIdGET(param: CompanyMergesApiV2CompanyMergesMergeIdGETRequest, options?: ConfigurationOptions): Promise<CompanyMergeState> {
        return this.api.v2CompanyMergesMergeIdGET(param.mergeId,  options).toPromise();
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param param the request object
     */
    public v2CompanyMergesPOSTWithHttpInfo(param: CompanyMergesApiV2CompanyMergesPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<CompanyMergeResponse>> {
        return this.api.v2CompanyMergesPOSTWithHttpInfo(param.companyMergeRequest,  options).toPromise();
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param param the request object
     */
    public v2CompanyMergesPOST(param: CompanyMergesApiV2CompanyMergesPOSTRequest, options?: ConfigurationOptions): Promise<CompanyMergeResponse> {
        return this.api.v2CompanyMergesPOST(param.companyMergeRequest,  options).toPromise();
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param param the request object
     */
    public v2TasksCompanyMergesGETWithHttpInfo(param: CompanyMergesApiV2TasksCompanyMergesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CompanyMergeTaskPaged>> {
        return this.api.v2TasksCompanyMergesGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param param the request object
     */
    public v2TasksCompanyMergesGET(param: CompanyMergesApiV2TasksCompanyMergesGETRequest = {}, options?: ConfigurationOptions): Promise<CompanyMergeTaskPaged> {
        return this.api.v2TasksCompanyMergesGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param param the request object
     */
    public v2TasksCompanyMergesTaskIdGETWithHttpInfo(param: CompanyMergesApiV2TasksCompanyMergesTaskIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<CompanyMergeTask>> {
        return this.api.v2TasksCompanyMergesTaskIdGETWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param param the request object
     */
    public v2TasksCompanyMergesTaskIdGET(param: CompanyMergesApiV2TasksCompanyMergesTaskIdGETRequest, options?: ConfigurationOptions): Promise<CompanyMergeTask> {
        return this.api.v2TasksCompanyMergesTaskIdGET(param.taskId,  options).toPromise();
    }

}

import { ObservableEmailsApi } from "./ObservableAPI.ts";
import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi.ts";

export interface EmailsApiV2EmailsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiv2EmailsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof EmailsApiv2EmailsGET
     */
    limit?: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiv2EmailsGET
     */
    filter?: string
}

export class ObjectEmailsApi {
    private api: ObservableEmailsApi

    public constructor(configuration: Configuration, requestFactory?: EmailsApiRequestFactory, responseProcessor?: EmailsApiResponseProcessor) {
        this.api = new ObservableEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param param the request object
     */
    public v2EmailsGETWithHttpInfo(param: EmailsApiV2EmailsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<InteractionsEmailPaged>> {
        return this.api.v2EmailsGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param param the request object
     */
    public v2EmailsGET(param: EmailsApiV2EmailsGETRequest = {}, options?: ConfigurationOptions): Promise<InteractionsEmailPaged> {
        return this.api.v2EmailsGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

}

import { ObservableListsApi } from "./ObservableAPI.ts";
import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi.ts";

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
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdFieldsPATCH
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: 9223372036854776000
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
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdListEntriesListEntryIdGET
     */
    listId: number
    /**
     * List Entry ID
     * Minimum: 1
     * Maximum: 9223372036854776000
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

export interface ListsApiV2ListsListIdSavedViewsGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsGET
     */
    listId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdSavedViewsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsGET
     */
    limit?: number
}

export interface ListsApiV2ListsListIdSavedViewsViewIdGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdGET
     */
    listId: number
    /**
     * Saved view ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdGET
     */
    viewId: number
}

export interface ListsApiV2ListsListIdSavedViewsViewIdListEntriesGETRequest {
    /**
     * List ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdListEntriesGET
     */
    listId: number
    /**
     * Saved view ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdListEntriesGET
     */
    viewId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdListEntriesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof ListsApiv2ListsListIdSavedViewsViewIdListEntriesGET
     */
    limit?: number
}

export class ObjectListsApi {
    private api: ObservableListsApi

    public constructor(configuration: Configuration, requestFactory?: ListsApiRequestFactory, responseProcessor?: ListsApiResponseProcessor) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
     * Get metadata on all Lists
     * @param param the request object
     */
    public v2ListsGETWithHttpInfo(param: ListsApiV2ListsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListWithTypePaged>> {
        return this.api.v2ListsGETWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
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
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
     * Get metadata on a single List
     * @param param the request object
     */
    public v2ListsListIdGETWithHttpInfo(param: ListsApiV2ListsListIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListWithType>> {
        return this.api.v2ListsListIdGETWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
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
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Field>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(param.listId, param.listEntryId, param.fieldId,  options).toPromise();
    }

    /**
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest, options?: ConfigurationOptions): Promise<Field> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(param.listId, param.listEntryId, param.fieldId,  options).toPromise();
    }

    /**
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(param.listId, param.listEntryId, param.fieldId, param.fieldUpdate,  options).toPromise();
    }

    /**
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(param.listId, param.listEntryId, param.fieldId, param.fieldUpdate,  options).toPromise();
    }

    /**
     * Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<FieldPaged>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(param.listId, param.listEntryId, param.ids, param.types, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get field values on a single List Entry
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsGET(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest, options?: ConfigurationOptions): Promise<FieldPaged> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsGET(param.listId, param.listEntryId, param.ids, param.types, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryBatchOperationResponse>> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(param.listId, param.listEntryId, param.body,  options).toPromise();
    }

    /**
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCH(param: ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest, options?: ConfigurationOptions): Promise<ListEntryBatchOperationResponse> {
        return this.api.v2ListsListIdListEntriesListEntryIdFieldsPATCH(param.listId, param.listEntryId, param.body,  options).toPromise();
    }

    /**
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(param: ListsApiV2ListsListIdListEntriesListEntryIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryWithEntity>> {
        return this.api.v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(param.listId, param.listEntryId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
     * @param param the request object
     */
    public v2ListsListIdListEntriesListEntryIdGET(param: ListsApiV2ListsListIdListEntriesListEntryIdGETRequest, options?: ConfigurationOptions): Promise<ListEntryWithEntity> {
        return this.api.v2ListsListIdListEntriesListEntryIdGET(param.listId, param.listEntryId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param param the request object
     */
    public v2ListsListIdSavedViewsGETWithHttpInfo(param: ListsApiV2ListsListIdSavedViewsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<SavedViewPaged>> {
        return this.api.v2ListsListIdSavedViewsGETWithHttpInfo(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param param the request object
     */
    public v2ListsListIdSavedViewsGET(param: ListsApiV2ListsListIdSavedViewsGETRequest, options?: ConfigurationOptions): Promise<SavedViewPaged> {
        return this.api.v2ListsListIdSavedViewsGET(param.listId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param param the request object
     */
    public v2ListsListIdSavedViewsViewIdGETWithHttpInfo(param: ListsApiV2ListsListIdSavedViewsViewIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<SavedView>> {
        return this.api.v2ListsListIdSavedViewsViewIdGETWithHttpInfo(param.listId, param.viewId,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param param the request object
     */
    public v2ListsListIdSavedViewsViewIdGET(param: ListsApiV2ListsListIdSavedViewsViewIdGETRequest, options?: ConfigurationOptions): Promise<SavedView> {
        return this.api.v2ListsListIdSavedViewsViewIdGET(param.listId, param.viewId,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param param the request object
     */
    public v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(param: ListsApiV2ListsListIdSavedViewsViewIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryWithEntityPaged>> {
        return this.api.v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(param.listId, param.viewId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param param the request object
     */
    public v2ListsListIdSavedViewsViewIdListEntriesGET(param: ListsApiV2ListsListIdSavedViewsViewIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<ListEntryWithEntityPaged> {
        return this.api.v2ListsListIdSavedViewsViewIdListEntriesGET(param.listId, param.viewId, param.cursor, param.limit,  options).toPromise();
    }

}

import { ObservableMeetingsApi } from "./ObservableAPI.ts";
import { MeetingsApiRequestFactory, MeetingsApiResponseProcessor} from "../apis/MeetingsApi.ts";

export interface MeetingsApiV2MeetingsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof MeetingsApiv2MeetingsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof MeetingsApiv2MeetingsGET
     */
    limit?: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof MeetingsApiv2MeetingsGET
     */
    filter?: string
}

export class ObjectMeetingsApi {
    private api: ObservableMeetingsApi

    public constructor(configuration: Configuration, requestFactory?: MeetingsApiRequestFactory, responseProcessor?: MeetingsApiResponseProcessor) {
        this.api = new ObservableMeetingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param param the request object
     */
    public v2MeetingsGETWithHttpInfo(param: MeetingsApiV2MeetingsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<InteractionsMeetingPaged>> {
        return this.api.v2MeetingsGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param param the request object
     */
    public v2MeetingsGET(param: MeetingsApiV2MeetingsGETRequest = {}, options?: ConfigurationOptions): Promise<InteractionsMeetingPaged> {
        return this.api.v2MeetingsGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

}

import { ObservableNotesApi } from "./ObservableAPI.ts";
import { NotesApiRequestFactory, NotesApiResponseProcessor} from "../apis/NotesApi.ts";

export interface NotesApiV2NotesGETRequest {
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof NotesApiv2NotesGET
     */
    totalCount?: boolean
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof NotesApiv2NotesGET
     */
    limit?: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesGET
     */
    filter?: string
    /**
     * Additional properties to include in the response
     * Defaults to: undefined
     * @type Set&lt;&#39;companiesPreview&#39; | &#39;personsPreview&#39; | &#39;opportunitiesPreview&#39; | &#39;repliesCount&#39;&gt;
     * @memberof NotesApiv2NotesGET
     */
    includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>
}

export interface NotesApiV2NotesNoteIdAttachedCompaniesGETRequest {
    /**
     * The id of the Note to get attached Companies
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedCompaniesGET
     */
    noteId: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof NotesApiv2NotesNoteIdAttachedCompaniesGET
     */
    totalCount?: boolean
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesNoteIdAttachedCompaniesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedCompaniesGET
     */
    limit?: number
}

export interface NotesApiV2NotesNoteIdAttachedOpportunitiesGETRequest {
    /**
     * The id of the Note to get attached Opportunities
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedOpportunitiesGET
     */
    noteId: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof NotesApiv2NotesNoteIdAttachedOpportunitiesGET
     */
    totalCount?: boolean
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesNoteIdAttachedOpportunitiesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedOpportunitiesGET
     */
    limit?: number
}

export interface NotesApiV2NotesNoteIdAttachedPersonsGETRequest {
    /**
     * The id of the Note to get attached Persons
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedPersonsGET
     */
    noteId: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof NotesApiv2NotesNoteIdAttachedPersonsGET
     */
    totalCount?: boolean
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesNoteIdAttachedPersonsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof NotesApiv2NotesNoteIdAttachedPersonsGET
     */
    limit?: number
}

export interface NotesApiV2NotesNoteIdGETRequest {
    /**
     * The id of the Note
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof NotesApiv2NotesNoteIdGET
     */
    noteId: number
    /**
     * Additional properties to include in the response
     * Defaults to: undefined
     * @type Set&lt;&#39;companiesPreview&#39; | &#39;personsPreview&#39; | &#39;opportunitiesPreview&#39; | &#39;repliesCount&#39;&gt;
     * @memberof NotesApiv2NotesNoteIdGET
     */
    includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>
}

export interface NotesApiV2NotesNoteIdRepliesGETRequest {
    /**
     * Note ID
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof NotesApiv2NotesNoteIdRepliesGET
     */
    noteId: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesNoteIdRepliesGET
     */
    filter?: string
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof NotesApiv2NotesNoteIdRepliesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof NotesApiv2NotesNoteIdRepliesGET
     */
    limit?: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof NotesApiv2NotesNoteIdRepliesGET
     */
    totalCount?: boolean
}

export class ObjectNotesApi {
    private api: ObservableNotesApi

    public constructor(configuration: Configuration, requestFactory?: NotesApiRequestFactory, responseProcessor?: NotesApiResponseProcessor) {
        this.api = new ObservableNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns all notes, with the exception of replies. You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `id`                        | Filter notes by id                                              | `int32`    | `=`                                  | `id=1`                          | | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get all Notes
     * @param param the request object
     */
    public v2NotesGETWithHttpInfo(param: NotesApiV2NotesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
        return this.api.v2NotesGETWithHttpInfo(param.totalCount, param.cursor, param.limit, param.filter, param.includes,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns all notes, with the exception of replies. You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `id`                        | Filter notes by id                                              | `int32`    | `=`                                  | `id=1`                          | | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get all Notes
     * @param param the request object
     */
    public v2NotesGET(param: NotesApiV2NotesGETRequest = {}, options?: ConfigurationOptions): Promise<NotesNotesPaged> {
        return this.api.v2NotesGET(param.totalCount, param.cursor, param.limit, param.filter, param.includes,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(param: NotesApiV2NotesNoteIdAttachedCompaniesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<CompanyDataPaged>> {
        return this.api.v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedCompaniesGET(param: NotesApiV2NotesNoteIdAttachedCompaniesGETRequest, options?: ConfigurationOptions): Promise<CompanyDataPaged> {
        return this.api.v2NotesNoteIdAttachedCompaniesGET(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(param: NotesApiV2NotesNoteIdAttachedOpportunitiesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
        return this.api.v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedOpportunitiesGET(param: NotesApiV2NotesNoteIdAttachedOpportunitiesGETRequest, options?: ConfigurationOptions): Promise<OpportunityPaged> {
        return this.api.v2NotesNoteIdAttachedOpportunitiesGET(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedPersonsGETWithHttpInfo(param: NotesApiV2NotesNoteIdAttachedPersonsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<PersonDataPaged>> {
        return this.api.v2NotesNoteIdAttachedPersonsGETWithHttpInfo(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param param the request object
     */
    public v2NotesNoteIdAttachedPersonsGET(param: NotesApiV2NotesNoteIdAttachedPersonsGETRequest, options?: ConfigurationOptions): Promise<PersonDataPaged> {
        return this.api.v2NotesNoteIdAttachedPersonsGET(param.noteId, param.totalCount, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param param the request object
     */
    public v2NotesNoteIdGETWithHttpInfo(param: NotesApiV2NotesNoteIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotesNote>> {
        return this.api.v2NotesNoteIdGETWithHttpInfo(param.noteId, param.includes,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param param the request object
     */
    public v2NotesNoteIdGET(param: NotesApiV2NotesNoteIdGETRequest, options?: ConfigurationOptions): Promise<NotesNote> {
        return this.api.v2NotesNoteIdGET(param.noteId, param.includes,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  This endpoint returns reply notes for a given note id. You can filter replies using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get replies for a Note
     * @param param the request object
     */
    public v2NotesNoteIdRepliesGETWithHttpInfo(param: NotesApiV2NotesNoteIdRepliesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotesRepliesPaged>> {
        return this.api.v2NotesNoteIdRepliesGETWithHttpInfo(param.noteId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  This endpoint returns reply notes for a given note id. You can filter replies using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get replies for a Note
     * @param param the request object
     */
    public v2NotesNoteIdRepliesGET(param: NotesApiV2NotesNoteIdRepliesGETRequest, options?: ConfigurationOptions): Promise<NotesRepliesPaged> {
        return this.api.v2NotesNoteIdRepliesGET(param.noteId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

}

import { ObservableOpportunitiesApi } from "./ObservableAPI.ts";
import { OpportunitiesApiRequestFactory, OpportunitiesApiResponseProcessor} from "../apis/OpportunitiesApi.ts";

export interface OpportunitiesApiV2OpportunitiesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof OpportunitiesApiv2OpportunitiesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof OpportunitiesApiv2OpportunitiesGET
     */
    limit?: number
    /**
     * Opportunity IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof OpportunitiesApiv2OpportunitiesGET
     */
    ids?: Array<number>
}

export interface OpportunitiesApiV2OpportunitiesOpportunityIdGETRequest {
    /**
     * Opportunity ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdGET
     */
    opportunityId: number
}

export interface OpportunitiesApiV2OpportunitiesOpportunityIdNotesGETRequest {
    /**
     * Opportunity ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdNotesGET
     */
    opportunityId: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdNotesGET
     */
    filter?: string
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdNotesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdNotesGET
     */
    limit?: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof OpportunitiesApiv2OpportunitiesOpportunityIdNotesGET
     */
    totalCount?: boolean
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
    public v2OpportunitiesGETWithHttpInfo(param: OpportunitiesApiV2OpportunitiesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OpportunityPaged>> {
        return this.api.v2OpportunitiesGETWithHttpInfo(param.cursor, param.limit, param.ids,  options).toPromise();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param param the request object
     */
    public v2OpportunitiesGET(param: OpportunitiesApiV2OpportunitiesGETRequest = {}, options?: ConfigurationOptions): Promise<OpportunityPaged> {
        return this.api.v2OpportunitiesGET(param.cursor, param.limit, param.ids,  options).toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param param the request object
     */
    public v2OpportunitiesOpportunityIdGETWithHttpInfo(param: OpportunitiesApiV2OpportunitiesOpportunityIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Opportunity>> {
        return this.api.v2OpportunitiesOpportunityIdGETWithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param param the request object
     */
    public v2OpportunitiesOpportunityIdGET(param: OpportunitiesApiV2OpportunitiesOpportunityIdGETRequest, options?: ConfigurationOptions): Promise<Opportunity> {
        return this.api.v2OpportunitiesOpportunityIdGET(param.opportunityId,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns Notes for a given Opportunity which includes directly attached notes and those attached to persons on this Opportunity.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for an Opportunity
     * @param param the request object
     */
    public v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(param: OpportunitiesApiV2OpportunitiesOpportunityIdNotesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
        return this.api.v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(param.opportunityId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns Notes for a given Opportunity which includes directly attached notes and those attached to persons on this Opportunity.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for an Opportunity
     * @param param the request object
     */
    public v2OpportunitiesOpportunityIdNotesGET(param: OpportunitiesApiV2OpportunitiesOpportunityIdNotesGETRequest, options?: ConfigurationOptions): Promise<NotesNotesPaged> {
        return this.api.v2OpportunitiesOpportunityIdNotesGET(param.opportunityId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

}

import { ObservablePersonMergesApi } from "./ObservableAPI.ts";
import { PersonMergesApiRequestFactory, PersonMergesApiResponseProcessor} from "../apis/PersonMergesApi.ts";

export interface PersonMergesApiV2PersonMergesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonMergesApiv2PersonMergesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 25
     * @type number
     * @memberof PersonMergesApiv2PersonMergesGET
     */
    limit?: number
    /**
     * Filter person merges using Affinity Filtering Language
     * Defaults to: undefined
     * @type string
     * @memberof PersonMergesApiv2PersonMergesGET
     */
    filter?: string
}

export interface PersonMergesApiV2PersonMergesMergeIdGETRequest {
    /**
     * Person merge ID
     * Minimum: 1
     * Maximum: 9007199254740991
     * Defaults to: undefined
     * @type number
     * @memberof PersonMergesApiv2PersonMergesMergeIdGET
     */
    mergeId: number
}

export interface PersonMergesApiV2PersonMergesPOSTRequest {
    /**
     * 
     * @type PersonMergeRequest
     * @memberof PersonMergesApiv2PersonMergesPOST
     */
    personMergeRequest: PersonMergeRequest
}

export interface PersonMergesApiV2TasksPersonMergesGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonMergesApiv2TasksPersonMergesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 25
     * @type number
     * @memberof PersonMergesApiv2TasksPersonMergesGET
     */
    limit?: number
    /**
     * Filter tasks using Affinity Filtering Language
     * Defaults to: undefined
     * @type string
     * @memberof PersonMergesApiv2TasksPersonMergesGET
     */
    filter?: string
}

export interface PersonMergesApiV2TasksPersonMergesTaskIdGETRequest {
    /**
     * Person merge task ID
     * Defaults to: undefined
     * @type string
     * @memberof PersonMergesApiv2TasksPersonMergesTaskIdGET
     */
    taskId: string
}

export class ObjectPersonMergesApi {
    private api: ObservablePersonMergesApi

    public constructor(configuration: Configuration, requestFactory?: PersonMergesApiRequestFactory, responseProcessor?: PersonMergesApiResponseProcessor) {
        this.api = new ObservablePersonMergesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param param the request object
     */
    public v2PersonMergesGETWithHttpInfo(param: PersonMergesApiV2PersonMergesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PersonMergeStatePaged>> {
        return this.api.v2PersonMergesGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param param the request object
     */
    public v2PersonMergesGET(param: PersonMergesApiV2PersonMergesGETRequest = {}, options?: ConfigurationOptions): Promise<PersonMergeStatePaged> {
        return this.api.v2PersonMergesGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param param the request object
     */
    public v2PersonMergesMergeIdGETWithHttpInfo(param: PersonMergesApiV2PersonMergesMergeIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<PersonMergeState>> {
        return this.api.v2PersonMergesMergeIdGETWithHttpInfo(param.mergeId,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param param the request object
     */
    public v2PersonMergesMergeIdGET(param: PersonMergesApiV2PersonMergesMergeIdGETRequest, options?: ConfigurationOptions): Promise<PersonMergeState> {
        return this.api.v2PersonMergesMergeIdGET(param.mergeId,  options).toPromise();
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param param the request object
     */
    public v2PersonMergesPOSTWithHttpInfo(param: PersonMergesApiV2PersonMergesPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<PersonMergeResponse>> {
        return this.api.v2PersonMergesPOSTWithHttpInfo(param.personMergeRequest,  options).toPromise();
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param param the request object
     */
    public v2PersonMergesPOST(param: PersonMergesApiV2PersonMergesPOSTRequest, options?: ConfigurationOptions): Promise<PersonMergeResponse> {
        return this.api.v2PersonMergesPOST(param.personMergeRequest,  options).toPromise();
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param param the request object
     */
    public v2TasksPersonMergesGETWithHttpInfo(param: PersonMergesApiV2TasksPersonMergesGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PersonMergeTaskPaged>> {
        return this.api.v2TasksPersonMergesGETWithHttpInfo(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param param the request object
     */
    public v2TasksPersonMergesGET(param: PersonMergesApiV2TasksPersonMergesGETRequest = {}, options?: ConfigurationOptions): Promise<PersonMergeTaskPaged> {
        return this.api.v2TasksPersonMergesGET(param.cursor, param.limit, param.filter,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param param the request object
     */
    public v2TasksPersonMergesTaskIdGETWithHttpInfo(param: PersonMergesApiV2TasksPersonMergesTaskIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<PersonMergeTask>> {
        return this.api.v2TasksPersonMergesTaskIdGETWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param param the request object
     */
    public v2TasksPersonMergesTaskIdGET(param: PersonMergesApiV2TasksPersonMergesTaskIdGETRequest, options?: ConfigurationOptions): Promise<PersonMergeTask> {
        return this.api.v2TasksPersonMergesTaskIdGET(param.taskId,  options).toPromise();
    }

}

import { ObservablePersonsApi } from "./ObservableAPI.ts";
import { PersonsApiRequestFactory, PersonsApiResponseProcessor} from "../apis/PersonsApi.ts";

export interface PersonsApiV2PersonsFieldsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsFieldsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApiv2PersonsFieldsGET
     */
    limit?: number
}

export interface PersonsApiV2PersonsGETRequest {
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApiv2PersonsGET
     */
    limit?: number
    /**
     * People IDs
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof PersonsApiv2PersonsGET
     */
    ids?: Array<number>
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonsApiv2PersonsGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof PersonsApiv2PersonsGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface PersonsApiV2PersonsPersonIdGETRequest {
    /**
     * Person ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdGET
     */
    personId: number
    /**
     * Field IDs for which to return field data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonsApiv2PersonsPersonIdGET
     */
    fieldIds?: Array<string>
    /**
     * Field Types for which to return field data
     * Defaults to: undefined
     * @type Array&lt;&#39;enriched&#39; | &#39;global&#39; | &#39;relationship-intelligence&#39;&gt;
     * @memberof PersonsApiv2PersonsPersonIdGET
     */
    fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>
}

export interface PersonsApiV2PersonsPersonIdListEntriesGETRequest {
    /**
     * Persons ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdListEntriesGET
     */
    personId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsPersonIdListEntriesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdListEntriesGET
     */
    limit?: number
}

export interface PersonsApiV2PersonsPersonIdListsGETRequest {
    /**
     * Persons ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdListsGET
     */
    personId: number
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsPersonIdListsGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 100
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdListsGET
     */
    limit?: number
}

export interface PersonsApiV2PersonsPersonIdNotesGETRequest {
    /**
     * Persons ID
     * Minimum: 1
     * Maximum: 9223372036854776000
     * Defaults to: undefined
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdNotesGET
     */
    personId: number
    /**
     * Filter options
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsPersonIdNotesGET
     */
    filter?: string
    /**
     * Cursor for the next or previous page
     * Defaults to: undefined
     * @type string
     * @memberof PersonsApiv2PersonsPersonIdNotesGET
     */
    cursor?: string
    /**
     * Number of items to include in the page
     * Minimum: 0
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof PersonsApiv2PersonsPersonIdNotesGET
     */
    limit?: number
    /**
     * Include total count of the collection in the pagination response
     * Defaults to: false
     * @type boolean
     * @memberof PersonsApiv2PersonsPersonIdNotesGET
     */
    totalCount?: boolean
}

export class ObjectPersonsApi {
    private api: ObservablePersonsApi

    public constructor(configuration: Configuration, requestFactory?: PersonsApiRequestFactory, responseProcessor?: PersonsApiResponseProcessor) {
        this.api = new ObservablePersonsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param param the request object
     */
    public v2PersonsFieldsGETWithHttpInfo(param: PersonsApiV2PersonsFieldsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FieldMetadataPaged>> {
        return this.api.v2PersonsFieldsGETWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param param the request object
     */
    public v2PersonsFieldsGET(param: PersonsApiV2PersonsFieldsGETRequest = {}, options?: ConfigurationOptions): Promise<FieldMetadataPaged> {
        return this.api.v2PersonsFieldsGET(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param param the request object
     */
    public v2PersonsGETWithHttpInfo(param: PersonsApiV2PersonsGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PersonPaged>> {
        return this.api.v2PersonsGETWithHttpInfo(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param param the request object
     */
    public v2PersonsGET(param: PersonsApiV2PersonsGETRequest = {}, options?: ConfigurationOptions): Promise<PersonPaged> {
        return this.api.v2PersonsGET(param.cursor, param.limit, param.ids, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param param the request object
     */
    public v2PersonsPersonIdGETWithHttpInfo(param: PersonsApiV2PersonsPersonIdGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Person>> {
        return this.api.v2PersonsPersonIdGETWithHttpInfo(param.personId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param param the request object
     */
    public v2PersonsPersonIdGET(param: PersonsApiV2PersonsPersonIdGETRequest, options?: ConfigurationOptions): Promise<Person> {
        return this.api.v2PersonsPersonIdGET(param.personId, param.fieldIds, param.fieldTypes,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param param the request object
     */
    public v2PersonsPersonIdListEntriesGETWithHttpInfo(param: PersonsApiV2PersonsPersonIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListEntryPaged>> {
        return this.api.v2PersonsPersonIdListEntriesGETWithHttpInfo(param.personId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param param the request object
     */
    public v2PersonsPersonIdListEntriesGET(param: PersonsApiV2PersonsPersonIdListEntriesGETRequest, options?: ConfigurationOptions): Promise<ListEntryPaged> {
        return this.api.v2PersonsPersonIdListEntriesGET(param.personId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param param the request object
     */
    public v2PersonsPersonIdListsGETWithHttpInfo(param: PersonsApiV2PersonsPersonIdListsGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListPaged>> {
        return this.api.v2PersonsPersonIdListsGETWithHttpInfo(param.personId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param param the request object
     */
    public v2PersonsPersonIdListsGET(param: PersonsApiV2PersonsPersonIdListsGETRequest, options?: ConfigurationOptions): Promise<ListPaged> {
        return this.api.v2PersonsPersonIdListsGET(param.personId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns notes for a given person id which includes directly attached notes, notes on meetings this person attended, and notes where this person is mentioned.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Person
     * @param param the request object
     */
    public v2PersonsPersonIdNotesGETWithHttpInfo(param: PersonsApiV2PersonsPersonIdNotesGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotesNotesPaged>> {
        return this.api.v2PersonsPersonIdNotesGETWithHttpInfo(param.personId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns notes for a given person id which includes directly attached notes, notes on meetings this person attended, and notes where this person is mentioned.  You can filter notes using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                    | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|---------------------------------| | `creator.id`                | Filter notes by the creator of the note                         | `int32`    | `=`                                  | `creator.id=1`                  | | `createdAt`                 | Filter notes by when it was created                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-02-04T10:48:24Z` | | `updatedAt`                 | Filter notes by when it was updated                             | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-02-03T10:48:24Z`| 
     * Get Notes for a Person
     * @param param the request object
     */
    public v2PersonsPersonIdNotesGET(param: PersonsApiV2PersonsPersonIdNotesGETRequest, options?: ConfigurationOptions): Promise<NotesNotesPaged> {
        return this.api.v2PersonsPersonIdNotesGET(param.personId, param.filter, param.cursor, param.limit, param.totalCount,  options).toPromise();
    }

}
