import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration.ts'
import type { Middleware } from '../middleware.ts';
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.ts";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     */
    public v2AuthWhoamiGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<WhoAmI>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2AuthWhoamiGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AuthWhoamiGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.
     * Get current user
     */
    public v2AuthWhoamiGET(_options?: ConfigurationOptions): Observable<WhoAmI> {
        return this.v2AuthWhoamiGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<WhoAmI>) => apiResponse.data));
    }

}

import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi.ts";
export class ObservableCallsApi {
    private requestFactory: CallsApiRequestFactory;
    private responseProcessor: CallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CallsApiRequestFactory,
        responseProcessor?: CallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallsApiResponseProcessor();
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2CallsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<InteractionsCallPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CallsGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CallsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Calls
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2CallsGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<InteractionsCallPaged> {
        return this.v2CallsGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<InteractionsCallPaged>) => apiResponse.data));
    }

}

import { ChatMessagesApiRequestFactory, ChatMessagesApiResponseProcessor} from "../apis/ChatMessagesApi.ts";
export class ObservableChatMessagesApi {
    private requestFactory: ChatMessagesApiRequestFactory;
    private responseProcessor: ChatMessagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChatMessagesApiRequestFactory,
        responseProcessor?: ChatMessagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChatMessagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChatMessagesApiResponseProcessor();
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2ChatMessagesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<InteractionsChatMessagePaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ChatMessagesGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ChatMessagesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all chat messages in Affinity. Returns basic information about the chat message interaction and its participants. Will only return chat messages that the current authenticated user has permission to see.  You can filter chat messages using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Chat Messages                             | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Chat Message was sent at                               | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Chat Message was created in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Chat Message was updated in Affinity                   | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Chat Messages
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2ChatMessagesGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<InteractionsChatMessagePaged> {
        return this.v2ChatMessagesGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<InteractionsChatMessagePaged>) => apiResponse.data));
    }

}

import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi.ts";
export class ObservableCompaniesApi {
    private requestFactory: CompaniesApiRequestFactory;
    private responseProcessor: CompaniesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompaniesApiRequestFactory,
        responseProcessor?: CompaniesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompaniesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompaniesApiResponseProcessor();
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param companyId Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2CompaniesCompanyIdGETWithHttpInfo(companyId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesCompanyIdGET(companyId, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesCompanyIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param companyId Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2CompaniesCompanyIdGET(companyId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<Company> {
        return this.v2CompaniesCompanyIdGETWithHttpInfo(companyId, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListEntriesGETWithHttpInfo(companyId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesCompanyIdListEntriesGET(companyId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesCompanyIdListEntriesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListEntriesGET(companyId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListEntryPaged> {
        return this.v2CompaniesCompanyIdListEntriesGETWithHttpInfo(companyId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryPaged>) => apiResponse.data));
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListsGETWithHttpInfo(companyId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesCompanyIdListsGET(companyId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesCompanyIdListsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all Lists where the given Company appears as an entry and that you have access to view. Returns basic List information for each List that contains this Company.
     * Get a Company\'s Lists
     * @param companyId Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesCompanyIdListsGET(companyId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListPaged> {
        return this.v2CompaniesCompanyIdListsGETWithHttpInfo(companyId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListPaged>) => apiResponse.data));
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
    public v2CompaniesCompanyIdNotesGETWithHttpInfo(companyId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<NotesNotesPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesCompanyIdNotesGET(companyId, filter, cursor, limit, totalCount, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesCompanyIdNotesGETWithHttpInfo(rsp)));
            }));
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
    public v2CompaniesCompanyIdNotesGET(companyId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<NotesNotesPaged> {
        return this.v2CompaniesCompanyIdNotesGETWithHttpInfo(companyId, filter, cursor, limit, totalCount, _options).pipe(map((apiResponse: HttpInfo<NotesNotesPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesFieldsGETWithHttpInfo(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<FieldMetadataPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesFieldsGET(cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesFieldsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2CompaniesFieldsGET(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<FieldMetadataPaged> {
        return this.v2CompaniesFieldsGETWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
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
    public v2CompaniesGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompaniesGET(cursor, limit, ids, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompaniesGETWithHttpInfo(rsp)));
            }));
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
    public v2CompaniesGET(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<CompanyPaged> {
        return this.v2CompaniesGETWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<CompanyPaged>) => apiResponse.data));
    }

}

import { CompanyMergesApiRequestFactory, CompanyMergesApiResponseProcessor} from "../apis/CompanyMergesApi.ts";
export class ObservableCompanyMergesApi {
    private requestFactory: CompanyMergesApiRequestFactory;
    private responseProcessor: CompanyMergesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyMergesApiRequestFactory,
        responseProcessor?: CompanyMergesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompanyMergesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompanyMergesApiResponseProcessor();
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter company merges using Affinity Filtering Language
     */
    public v2CompanyMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyMergeStatePaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompanyMergesGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompanyMergesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve paginated company merges for the organization.   Returns all company merges initiated by users in your organization, including their current status, the companies involved, and merge details. You can filter company merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Company merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter company merges using Affinity Filtering Language
     */
    public v2CompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<CompanyMergeStatePaged> {
        return this.v2CompanyMergesGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<CompanyMergeStatePaged>) => apiResponse.data));
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param mergeId Company merge ID
     */
    public v2CompanyMergesMergeIdGETWithHttpInfo(mergeId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyMergeState>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompanyMergesMergeIdGET(mergeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompanyMergesMergeIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the status and details of a specific company merge.  Returns information about the company merge including its current status, the companies involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) endpoint, or by filtering company merges by task ID using `/v2/company-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Company Merge
     * @param mergeId Company merge ID
     */
    public v2CompanyMergesMergeIdGET(mergeId: number, _options?: ConfigurationOptions): Observable<CompanyMergeState> {
        return this.v2CompanyMergesMergeIdGETWithHttpInfo(mergeId, _options).pipe(map((apiResponse: HttpInfo<CompanyMergeState>) => apiResponse.data));
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param companyMergeRequest
     */
    public v2CompanyMergesPOSTWithHttpInfo(companyMergeRequest: CompanyMergeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyMergeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2CompanyMergesPOST(companyMergeRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CompanyMergesPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiate a company merge to combine a duplicate company profile into a primary company profile.  This is an asynchronous process that will merge all data from the duplicate company into the primary company. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/companyMerges/operation/v2_tasks_company-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Company Merge
     * @param companyMergeRequest
     */
    public v2CompanyMergesPOST(companyMergeRequest: CompanyMergeRequest, _options?: ConfigurationOptions): Observable<CompanyMergeResponse> {
        return this.v2CompanyMergesPOSTWithHttpInfo(companyMergeRequest, _options).pipe(map((apiResponse: HttpInfo<CompanyMergeResponse>) => apiResponse.data));
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksCompanyMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyMergeTaskPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2TasksCompanyMergesGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TasksCompanyMergesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve paginated company merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the companies involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Company Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksCompanyMergesGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<CompanyMergeTaskPaged> {
        return this.v2TasksCompanyMergesGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<CompanyMergeTaskPaged>) => apiResponse.data));
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param taskId Company merge task ID
     */
    public v2TasksCompanyMergesTaskIdGETWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyMergeTask>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2TasksCompanyMergesTaskIdGET(taskId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TasksCompanyMergesTaskIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the status and details of a specific task for company merges.   Returns information about the company merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/company-merges?filter=taskId={taskId}` See [Company Merges](#tag/companyMerges/operation/v2_company-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Company Merge Task
     * @param taskId Company merge task ID
     */
    public v2TasksCompanyMergesTaskIdGET(taskId: string, _options?: ConfigurationOptions): Observable<CompanyMergeTask> {
        return this.v2TasksCompanyMergesTaskIdGETWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<CompanyMergeTask>) => apiResponse.data));
    }

}

import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi.ts";
export class ObservableEmailsApi {
    private requestFactory: EmailsApiRequestFactory;
    private responseProcessor: EmailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailsApiRequestFactory,
        responseProcessor?: EmailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailsApiResponseProcessor();
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2EmailsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<InteractionsEmailPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2EmailsGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2EmailsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all emails in Affinity. Returns basic information about the email interaction and its participants. Will only return emails or subject lines that the current authenticated user has permission to see.  You can filter emails using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Emails                                    | `int64`    | `=`                                  | `id=1`                           | | `sentAt`                    | When the Email was sent at                                      | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Email was created in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Email was updated in Affinity                          | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Emails
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2EmailsGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<InteractionsEmailPaged> {
        return this.v2EmailsGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<InteractionsEmailPaged>) => apiResponse.data));
    }

}

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi.ts";
export class ObservableListsApi {
    private requestFactory: ListsApiRequestFactory;
    private responseProcessor: ListsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ListsApiResponseProcessor();
    }

    /**
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsGETWithHttpInfo(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListWithTypePaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsGET(cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all Lists in your organization that you have access to view. Returns basic information about each List, including name, owner, and privacy settings.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsGET(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListWithTypePaged> {
        return this.v2ListsGETWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListWithTypePaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdFieldsGETWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<FieldMetadataPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdFieldsGET(listId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdFieldsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdFieldsGET(listId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<FieldMetadataPaged> {
        return this.v2ListsListIdFieldsGETWithHttpInfo(listId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
    }

    /**
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
     * Get metadata on a single List
     * @param listId List ID
     */
    public v2ListsListIdGETWithHttpInfo(listId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListWithType>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdGET(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve detailed information about a specific List you have access to view. Returns List configuration including name, owner, privacy settings, and creation details.
     * Get metadata on a single List
     * @param listId List ID
     */
    public v2ListsListIdGET(listId: number, _options?: ConfigurationOptions): Observable<ListWithType> {
        return this.v2ListsListIdGETWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<ListWithType>) => apiResponse.data));
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
    public v2ListsListIdListEntriesGETWithHttpInfo(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryWithEntityPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesGET(listId, cursor, limit, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesGETWithHttpInfo(rsp)));
            }));
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
    public v2ListsListIdListEntriesGET(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<ListEntryWithEntityPaged> {
        return this.v2ListsListIdListEntriesGETWithHttpInfo(listId, cursor, limit, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<ListEntryWithEntityPaged>) => apiResponse.data));
    }

    /**
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(listId: number, listEntryId: number, fieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Field>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(listId, listEntryId, fieldId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single field value
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(listId: number, listEntryId: number, fieldId: string, _options?: ConfigurationOptions): Observable<Field> {
        return this.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGETWithHttpInfo(listId, listEntryId, fieldId, _options).pipe(map((apiResponse: HttpInfo<Field>) => apiResponse.data));
    }

    /**
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     * @param fieldUpdate
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(listId: number, listEntryId: number, fieldId: string, fieldUpdate: FieldUpdate, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(listId, listEntryId, fieldId, fieldUpdate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Update a single field value on a List Entry
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param fieldId Field ID
     * @param fieldUpdate
     */
    public v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(listId: number, listEntryId: number, fieldId: string, fieldUpdate: FieldUpdate, _options?: ConfigurationOptions): Observable<void> {
        return this.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTWithHttpInfo(listId, listEntryId, fieldId, fieldUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(listId: number, listEntryId: number, ids?: Array<string>, types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<FieldPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesListEntryIdFieldsGET(listId, listEntryId, ids, types, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(rsp)));
            }));
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
    public v2ListsListIdListEntriesListEntryIdFieldsGET(listId: number, listEntryId: number, ids?: Array<string>, types?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<FieldPaged> {
        return this.v2ListsListIdListEntriesListEntryIdFieldsGETWithHttpInfo(listId, listEntryId, ids, types, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldPaged>) => apiResponse.data));
    }

    /**
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param body
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId: number, listEntryId: number, body: ListEntryBatchOperationUpdateFields, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryBatchOperationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId, listEntryId, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Perform batch operations on a list entry\'s fields
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param body
     */
    public v2ListsListIdListEntriesListEntryIdFieldsPATCH(listId: number, listEntryId: number, body: ListEntryBatchOperationUpdateFields, _options?: ConfigurationOptions): Observable<ListEntryBatchOperationResponse> {
        return this.v2ListsListIdListEntriesListEntryIdFieldsPATCHWithHttpInfo(listId, listEntryId, body, _options).pipe(map((apiResponse: HttpInfo<ListEntryBatchOperationResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(listId: number, listEntryId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryWithEntity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdListEntriesListEntryIdGET(listId, listEntryId, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single List Entry on a List
     * @param listId List ID
     * @param listEntryId List Entry ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2ListsListIdListEntriesListEntryIdGET(listId: number, listEntryId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<ListEntryWithEntity> {
        return this.v2ListsListIdListEntriesListEntryIdGETWithHttpInfo(listId, listEntryId, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<ListEntryWithEntity>) => apiResponse.data));
    }

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsGETWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<SavedViewPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdSavedViewsGET(listId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdSavedViewsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all Saved Views you have access to view for a specific List. Returns Saved View configurations including name, column settings, and owner information.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsGET(listId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<SavedViewPaged> {
        return this.v2ListsListIdSavedViewsGETWithHttpInfo(listId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<SavedViewPaged>) => apiResponse.data));
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public v2ListsListIdSavedViewsViewIdGETWithHttpInfo(listId: number, viewId: number, _options?: ConfigurationOptions): Observable<HttpInfo<SavedView>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdSavedViewsViewIdGET(listId, viewId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdSavedViewsViewIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve detailed information about a specific Saved View you have access to view. Returns complete Saved View configuration including name, sorting, and column visibility settings.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public v2ListsListIdSavedViewsViewIdGET(listId: number, viewId: number, _options?: ConfigurationOptions): Observable<SavedView> {
        return this.v2ListsListIdSavedViewsViewIdGETWithHttpInfo(listId, viewId, _options).pipe(map((apiResponse: HttpInfo<SavedView>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(listId: number, viewId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryWithEntityPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2ListsListIdSavedViewsViewIdListEntriesGET(listId, viewId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2ListsListIdSavedViewsViewIdListEntriesGET(listId: number, viewId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListEntryWithEntityPaged> {
        return this.v2ListsListIdSavedViewsViewIdListEntriesGETWithHttpInfo(listId, viewId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryWithEntityPaged>) => apiResponse.data));
    }

}

import { MeetingsApiRequestFactory, MeetingsApiResponseProcessor} from "../apis/MeetingsApi.ts";
export class ObservableMeetingsApi {
    private requestFactory: MeetingsApiRequestFactory;
    private responseProcessor: MeetingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MeetingsApiRequestFactory,
        responseProcessor?: MeetingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MeetingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MeetingsApiResponseProcessor();
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2MeetingsGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<InteractionsMeetingPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2MeetingsGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MeetingsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 
     * Get metadata on all Meetings
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter options
     */
    public v2MeetingsGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<InteractionsMeetingPaged> {
        return this.v2MeetingsGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<InteractionsMeetingPaged>) => apiResponse.data));
    }

}

import { NotesApiRequestFactory, NotesApiResponseProcessor} from "../apis/NotesApi.ts";
export class ObservableNotesApi {
    private requestFactory: NotesApiRequestFactory;
    private responseProcessor: NotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotesApiRequestFactory,
        responseProcessor?: NotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotesApiResponseProcessor();
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
    public v2NotesGETWithHttpInfo(totalCount?: boolean, cursor?: string, limit?: number, filter?: string, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: ConfigurationOptions): Observable<HttpInfo<NotesNotesPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesGET(totalCount, cursor, limit, filter, includes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesGETWithHttpInfo(rsp)));
            }));
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
    public v2NotesGET(totalCount?: boolean, cursor?: string, limit?: number, filter?: string, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: ConfigurationOptions): Observable<NotesNotesPaged> {
        return this.v2NotesGETWithHttpInfo(totalCount, cursor, limit, filter, includes, _options).pipe(map((apiResponse: HttpInfo<NotesNotesPaged>) => apiResponse.data));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param noteId The id of the Note to get attached Companies
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CompanyDataPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesNoteIdAttachedCompaniesGET(noteId, totalCount, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached companies for a given Note. 
     * Get Companies attached to a Note
     * @param noteId The id of the Note to get attached Companies
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedCompaniesGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<CompanyDataPaged> {
        return this.v2NotesNoteIdAttachedCompaniesGETWithHttpInfo(noteId, totalCount, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CompanyDataPaged>) => apiResponse.data));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param noteId The id of the Note to get attached Opportunities
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<OpportunityPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesNoteIdAttachedOpportunitiesGET(noteId, totalCount, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached opportunities for a given Note. 
     * Get Opportunities attached to a Note
     * @param noteId The id of the Note to get attached Opportunities
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedOpportunitiesGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<OpportunityPaged> {
        return this.v2NotesNoteIdAttachedOpportunitiesGETWithHttpInfo(noteId, totalCount, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<OpportunityPaged>) => apiResponse.data));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param noteId The id of the Note to get attached Persons
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedPersonsGETWithHttpInfo(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<PersonDataPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesNoteIdAttachedPersonsGET(noteId, totalCount, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesNoteIdAttachedPersonsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Returns directly attached persons for a given Note. 
     * Get Persons attached to a Note
     * @param noteId The id of the Note to get attached Persons
     * @param [totalCount] Include total count of the collection in the pagination response
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2NotesNoteIdAttachedPersonsGET(noteId: number, totalCount?: boolean, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<PersonDataPaged> {
        return this.v2NotesNoteIdAttachedPersonsGETWithHttpInfo(noteId, totalCount, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<PersonDataPaged>) => apiResponse.data));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param noteId The id of the Note
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesNoteIdGETWithHttpInfo(noteId: number, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: ConfigurationOptions): Observable<HttpInfo<NotesNote>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesNoteIdGET(noteId, includes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesNoteIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * | ⚠️  This endpoint is currently in BETA | |--|  Get a Note with a given id 
     * Get a single Note
     * @param noteId The id of the Note
     * @param [includes] Additional properties to include in the response
     */
    public v2NotesNoteIdGET(noteId: number, includes?: Set<'companiesPreview' | 'personsPreview' | 'opportunitiesPreview' | 'repliesCount'>, _options?: ConfigurationOptions): Observable<NotesNote> {
        return this.v2NotesNoteIdGETWithHttpInfo(noteId, includes, _options).pipe(map((apiResponse: HttpInfo<NotesNote>) => apiResponse.data));
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
    public v2NotesNoteIdRepliesGETWithHttpInfo(noteId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<NotesRepliesPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2NotesNoteIdRepliesGET(noteId, filter, cursor, limit, totalCount, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2NotesNoteIdRepliesGETWithHttpInfo(rsp)));
            }));
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
    public v2NotesNoteIdRepliesGET(noteId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<NotesRepliesPaged> {
        return this.v2NotesNoteIdRepliesGETWithHttpInfo(noteId, filter, cursor, limit, totalCount, _options).pipe(map((apiResponse: HttpInfo<NotesRepliesPaged>) => apiResponse.data));
    }

}

import { OpportunitiesApiRequestFactory, OpportunitiesApiResponseProcessor} from "../apis/OpportunitiesApi.ts";
export class ObservableOpportunitiesApi {
    private requestFactory: OpportunitiesApiRequestFactory;
    private responseProcessor: OpportunitiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunitiesApiRequestFactory,
        responseProcessor?: OpportunitiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpportunitiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpportunitiesApiResponseProcessor();
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public v2OpportunitiesGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<OpportunityPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2OpportunitiesGET(cursor, limit, ids, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OpportunitiesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public v2OpportunitiesGET(cursor?: string, limit?: number, ids?: Array<number>, _options?: ConfigurationOptions): Observable<OpportunityPaged> {
        return this.v2OpportunitiesGETWithHttpInfo(cursor, limit, ids, _options).pipe(map((apiResponse: HttpInfo<OpportunityPaged>) => apiResponse.data));
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param opportunityId Opportunity ID
     */
    public v2OpportunitiesOpportunityIdGETWithHttpInfo(opportunityId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2OpportunitiesOpportunityIdGET(opportunityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OpportunitiesOpportunityIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param opportunityId Opportunity ID
     */
    public v2OpportunitiesOpportunityIdGET(opportunityId: number, _options?: ConfigurationOptions): Observable<Opportunity> {
        return this.v2OpportunitiesOpportunityIdGETWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<Opportunity>) => apiResponse.data));
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
    public v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(opportunityId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<NotesNotesPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2OpportunitiesOpportunityIdNotesGET(opportunityId, filter, cursor, limit, totalCount, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(rsp)));
            }));
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
    public v2OpportunitiesOpportunityIdNotesGET(opportunityId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<NotesNotesPaged> {
        return this.v2OpportunitiesOpportunityIdNotesGETWithHttpInfo(opportunityId, filter, cursor, limit, totalCount, _options).pipe(map((apiResponse: HttpInfo<NotesNotesPaged>) => apiResponse.data));
    }

}

import { PersonMergesApiRequestFactory, PersonMergesApiResponseProcessor} from "../apis/PersonMergesApi.ts";
export class ObservablePersonMergesApi {
    private requestFactory: PersonMergesApiRequestFactory;
    private responseProcessor: PersonMergesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonMergesApiRequestFactory,
        responseProcessor?: PersonMergesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PersonMergesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PersonMergesApiResponseProcessor();
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter person merges using Affinity Filtering Language
     */
    public v2PersonMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<PersonMergeStatePaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonMergesGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonMergesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merges
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter person merges using Affinity Filtering Language
     */
    public v2PersonMergesGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<PersonMergeStatePaged> {
        return this.v2PersonMergesGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<PersonMergeStatePaged>) => apiResponse.data));
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param mergeId Person merge ID
     */
    public v2PersonMergesMergeIdGETWithHttpInfo(mergeId: number, _options?: ConfigurationOptions): Observable<HttpInfo<PersonMergeState>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonMergesMergeIdGET(mergeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonMergesMergeIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Get Person Merge
     * @param mergeId Person merge ID
     */
    public v2PersonMergesMergeIdGET(mergeId: number, _options?: ConfigurationOptions): Observable<PersonMergeState> {
        return this.v2PersonMergesMergeIdGETWithHttpInfo(mergeId, _options).pipe(map((apiResponse: HttpInfo<PersonMergeState>) => apiResponse.data));
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param personMergeRequest
     */
    public v2PersonMergesPOSTWithHttpInfo(personMergeRequest: PersonMergeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PersonMergeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonMergesPOST(personMergeRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonMergesPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.
     * Initiate Person Merge
     * @param personMergeRequest
     */
    public v2PersonMergesPOST(personMergeRequest: PersonMergeRequest, _options?: ConfigurationOptions): Observable<PersonMergeResponse> {
        return this.v2PersonMergesPOSTWithHttpInfo(personMergeRequest, _options).pipe(map((apiResponse: HttpInfo<PersonMergeResponse>) => apiResponse.data));
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksPersonMergesGETWithHttpInfo(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<HttpInfo<PersonMergeTaskPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2TasksPersonMergesGET(cursor, limit, filter, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TasksPersonMergesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get All Person Merge Tasks
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [filter] Filter tasks using Affinity Filtering Language
     */
    public v2TasksPersonMergesGET(cursor?: string, limit?: number, filter?: string, _options?: ConfigurationOptions): Observable<PersonMergeTaskPaged> {
        return this.v2TasksPersonMergesGETWithHttpInfo(cursor, limit, filter, _options).pipe(map((apiResponse: HttpInfo<PersonMergeTaskPaged>) => apiResponse.data));
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param taskId Person merge task ID
     */
    public v2TasksPersonMergesTaskIdGETWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PersonMergeTask>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2TasksPersonMergesTaskIdGET(taskId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TasksPersonMergesTaskIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 
     * Get Person Merge Task
     * @param taskId Person merge task ID
     */
    public v2TasksPersonMergesTaskIdGET(taskId: string, _options?: ConfigurationOptions): Observable<PersonMergeTask> {
        return this.v2TasksPersonMergesTaskIdGETWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<PersonMergeTask>) => apiResponse.data));
    }

}

import { PersonsApiRequestFactory, PersonsApiResponseProcessor} from "../apis/PersonsApi.ts";
export class ObservablePersonsApi {
    private requestFactory: PersonsApiRequestFactory;
    private responseProcessor: PersonsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonsApiRequestFactory,
        responseProcessor?: PersonsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PersonsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PersonsApiResponseProcessor();
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsFieldsGETWithHttpInfo(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<FieldMetadataPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsFieldsGET(cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsFieldsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsFieldsGET(cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<FieldMetadataPaged> {
        return this.v2PersonsFieldsGETWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
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
    public v2PersonsGETWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<PersonPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsGET(cursor, limit, ids, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsGETWithHttpInfo(rsp)));
            }));
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
    public v2PersonsGET(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<PersonPaged> {
        return this.v2PersonsGETWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<PersonPaged>) => apiResponse.data));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param personId Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2PersonsPersonIdGETWithHttpInfo(personId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<HttpInfo<Person>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsPersonIdGET(personId, fieldIds, fieldTypes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsPersonIdGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param personId Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public v2PersonsPersonIdGET(personId: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: ConfigurationOptions): Observable<Person> {
        return this.v2PersonsPersonIdGETWithHttpInfo(personId, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<Person>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListEntriesGETWithHttpInfo(personId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListEntryPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsPersonIdListEntriesGET(personId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsPersonIdListEntriesGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListEntriesGET(personId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListEntryPaged> {
        return this.v2PersonsPersonIdListEntriesGETWithHttpInfo(personId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryPaged>) => apiResponse.data));
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListsGETWithHttpInfo(personId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsPersonIdListsGET(personId, cursor, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsPersonIdListsGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through all Lists where the given Person appears as an entry and that you have access to view. Returns basic List information for each List that contains this Person.
     * Get a Person\'s Lists
     * @param personId Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public v2PersonsPersonIdListsGET(personId: number, cursor?: string, limit?: number, _options?: ConfigurationOptions): Observable<ListPaged> {
        return this.v2PersonsPersonIdListsGETWithHttpInfo(personId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListPaged>) => apiResponse.data));
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
    public v2PersonsPersonIdNotesGETWithHttpInfo(personId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<NotesNotesPaged>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2PersonsPersonIdNotesGET(personId, filter, cursor, limit, totalCount, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PersonsPersonIdNotesGETWithHttpInfo(rsp)));
            }));
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
    public v2PersonsPersonIdNotesGET(personId: number, filter?: string, cursor?: string, limit?: number, totalCount?: boolean, _options?: ConfigurationOptions): Observable<NotesNotesPaged> {
        return this.v2PersonsPersonIdNotesGETWithHttpInfo(personId, filter, cursor, limit, totalCount, _options).pipe(map((apiResponse: HttpInfo<NotesNotesPaged>) => apiResponse.data));
    }

}
