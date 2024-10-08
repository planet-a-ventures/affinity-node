import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { Attendee } from '../models/Attendee.ts';
import { AuthenticationError } from '../models/AuthenticationError.ts';
import { AuthenticationErrors } from '../models/AuthenticationErrors.ts';
import { AuthorizationError } from '../models/AuthorizationError.ts';
import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { BadRequestError } from '../models/BadRequestError.ts';
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
import { Field } from '../models/Field.ts';
import { FieldMetadata } from '../models/FieldMetadata.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { FieldValue } from '../models/FieldValue.ts';
import { FloatValue } from '../models/FloatValue.ts';
import { FloatsValue } from '../models/FloatsValue.ts';
import { FormulaNumber } from '../models/FormulaNumber.ts';
import { FormulaValue } from '../models/FormulaValue.ts';
import { Grant } from '../models/Grant.ts';
import { Interaction } from '../models/Interaction.ts';
import { InteractionValue } from '../models/InteractionValue.ts';
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
import { UnprocessableEntityError } from '../models/UnprocessableEntityError.ts';
import { UnsupportedMediaTypeError } from '../models/UnsupportedMediaTypeError.ts';
import { User } from '../models/User.ts';
import { ValidationError } from '../models/ValidationError.ts';
import { ValidationErrors } from '../models/ValidationErrors.ts';
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
     * Returns metadata about the current user.
     * Get current user
     */
    public getV2AuthWhoamiWithHttpInfo(_options?: Configuration): Observable<HttpInfo<WhoAmI>> {
        const requestContextPromise = this.requestFactory.getV2AuthWhoami(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2AuthWhoamiWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata about the current user.
     * Get current user
     */
    public getV2AuthWhoami(_options?: Configuration): Observable<WhoAmI> {
        return this.getV2AuthWhoamiWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<WhoAmI>) => apiResponse.data));
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
     * Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Companies
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Company IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<HttpInfo<CompanyPaged>> {
        const requestContextPromise = this.requestFactory.getV2Companies(cursor, limit, ids, fieldIds, fieldTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2CompaniesWithHttpInfo(rsp)));
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
    public getV2Companies(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<CompanyPaged> {
        return this.getV2CompaniesWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<CompanyPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<FieldMetadataPaged>> {
        const requestContextPromise = this.requestFactory.getV2CompaniesFields(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2CompaniesFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.
     * Get metadata on Company Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesFields(cursor?: string, limit?: number, _options?: Configuration): Observable<FieldMetadataPaged> {
        return this.getV2CompaniesFieldsWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.getV2CompaniesId(id, fieldIds, fieldTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2CompaniesIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Company
     * @param id Company ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2CompaniesId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<Company> {
        return this.getV2CompaniesIdWithHttpInfo(id, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListEntryPaged>> {
        const requestContextPromise = this.requestFactory.getV2CompaniesIdListEntries(id, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2CompaniesIdListEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Company\'s List Entries
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<ListEntryPaged> {
        return this.getV2CompaniesIdListEntriesWithHttpInfo(id, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListPaged>> {
        const requestContextPromise = this.requestFactory.getV2CompaniesIdLists(id, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2CompaniesIdListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata for all the Lists on which the given Company appears.
     * Get a Company\'s Lists
     * @param id Company ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2CompaniesIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<ListPaged> {
        return this.getV2CompaniesIdListsWithHttpInfo(id, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListPaged>) => apiResponse.data));
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
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListWithTypePaged>> {
        const requestContextPromise = this.requestFactory.getV2Lists(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on Lists.
     * Get metadata on all Lists
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2Lists(cursor?: string, limit?: number, _options?: Configuration): Observable<ListWithTypePaged> {
        return this.getV2ListsWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListWithTypePaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public getV2ListsListidWithHttpInfo(listId: number, _options?: Configuration): Observable<HttpInfo<ListWithType>> {
        const requestContextPromise = this.requestFactory.getV2ListsListid(listId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on a single List.
     * Get metadata on a single List
     * @param listId List ID
     */
    public getV2ListsListid(listId: number, _options?: Configuration): Observable<ListWithType> {
        return this.getV2ListsListidWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<ListWithType>) => apiResponse.data));
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidFieldsWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<FieldMetadataPaged>> {
        const requestContextPromise = this.requestFactory.getV2ListsListidFields(listId, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.
     * Get metadata on a single List\'s Fields
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidFields(listId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<FieldMetadataPaged> {
        return this.getV2ListsListidFieldsWithHttpInfo(listId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
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
    public getV2ListsListidListEntriesWithHttpInfo(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Observable<HttpInfo<ListEntryWithEntityPaged>> {
        const requestContextPromise = this.requestFactory.getV2ListsListidListEntries(listId, cursor, limit, fieldIds, fieldTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidListEntriesWithHttpInfo(rsp)));
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
    public getV2ListsListidListEntries(listId: number, cursor?: string, limit?: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'>, _options?: Configuration): Observable<ListEntryWithEntityPaged> {
        return this.getV2ListsListidListEntriesWithHttpInfo(listId, cursor, limit, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<ListEntryWithEntityPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsWithHttpInfo(listId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<SavedViewPaged>> {
        const requestContextPromise = this.requestFactory.getV2ListsListidSavedViews(listId, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidSavedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on the Saved Views on a List.
     * Get metadata on Saved Views
     * @param listId List ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViews(listId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<SavedViewPaged> {
        return this.getV2ListsListidSavedViewsWithHttpInfo(listId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<SavedViewPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewidWithHttpInfo(listId: number, viewId: number, _options?: Configuration): Observable<HttpInfo<SavedView>> {
        const requestContextPromise = this.requestFactory.getV2ListsListidSavedViewsViewid(listId, viewId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidSavedViewsViewidWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on a single Saved View.
     * Get metadata on a single Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     */
    public getV2ListsListidSavedViewsViewid(listId: number, viewId: number, _options?: Configuration): Observable<SavedView> {
        return this.getV2ListsListidSavedViewsViewidWithHttpInfo(listId, viewId, _options).pipe(map((apiResponse: HttpInfo<SavedView>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all List Entries on a Saved View
     * @param listId List ID
     * @param viewId Saved view ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId: number, viewId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListEntryWithEntityPaged>> {
        const requestContextPromise = this.requestFactory.getV2ListsListidSavedViewsViewidListEntries(listId, viewId, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(rsp)));
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
    public getV2ListsListidSavedViewsViewidListEntries(listId: number, viewId: number, cursor?: string, limit?: number, _options?: Configuration): Observable<ListEntryWithEntityPaged> {
        return this.getV2ListsListidSavedViewsViewidListEntriesWithHttpInfo(listId, viewId, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryWithEntityPaged>) => apiResponse.data));
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
    public getV2OpportunitiesWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, _options?: Configuration): Observable<HttpInfo<OpportunityPaged>> {
        const requestContextPromise = this.requestFactory.getV2Opportunities(cursor, limit, ids, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2OpportunitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get all Opportunities
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] Opportunity IDs
     */
    public getV2Opportunities(cursor?: string, limit?: number, ids?: Array<number>, _options?: Configuration): Observable<OpportunityPaged> {
        return this.getV2OpportunitiesWithHttpInfo(cursor, limit, ids, _options).pipe(map((apiResponse: HttpInfo<OpportunityPaged>) => apiResponse.data));
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesIdWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Opportunity>> {
        const requestContextPromise = this.requestFactory.getV2OpportunitiesId(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2OpportunitiesIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a single Opportunity
     * @param id Opportunity ID
     */
    public getV2OpportunitiesId(id: number, _options?: Configuration): Observable<Opportunity> {
        return this.getV2OpportunitiesIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Opportunity>) => apiResponse.data));
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
     * Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get all Persons
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     * @param [ids] People IDs
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsWithHttpInfo(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<HttpInfo<PersonPaged>> {
        const requestContextPromise = this.requestFactory.getV2Persons(cursor, limit, ids, fieldIds, fieldTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2PersonsWithHttpInfo(rsp)));
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
    public getV2Persons(cursor?: string, limit?: number, ids?: Array<number>, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<PersonPaged> {
        return this.getV2PersonsWithHttpInfo(cursor, limit, ids, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<PersonPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFieldsWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<FieldMetadataPaged>> {
        const requestContextPromise = this.requestFactory.getV2PersonsFields(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2PersonsFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.
     * Get metadata on Person Fields
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsFields(cursor?: string, limit?: number, _options?: Configuration): Observable<FieldMetadataPaged> {
        return this.getV2PersonsFieldsWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<FieldMetadataPaged>) => apiResponse.data));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsIdWithHttpInfo(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<HttpInfo<Person>> {
        const requestContextPromise = this.requestFactory.getV2PersonsId(id, fieldIds, fieldTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2PersonsIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).
     * Get a single Person
     * @param id Person ID
     * @param [fieldIds] Field IDs for which to return field data
     * @param [fieldTypes] Field Types for which to return field data
     */
    public getV2PersonsId(id: number, fieldIds?: Array<string>, fieldTypes?: Array<'enriched' | 'global' | 'relationship-intelligence'>, _options?: Configuration): Observable<Person> {
        return this.getV2PersonsIdWithHttpInfo(id, fieldIds, fieldTypes, _options).pipe(map((apiResponse: HttpInfo<Person>) => apiResponse.data));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntriesWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListEntryPaged>> {
        const requestContextPromise = this.requestFactory.getV2PersonsIdListEntries(id, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2PersonsIdListEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).
     * Get a Person\'s List Entries
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListEntries(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<ListEntryPaged> {
        return this.getV2PersonsIdListEntriesWithHttpInfo(id, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListEntryPaged>) => apiResponse.data));
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdListsWithHttpInfo(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<ListPaged>> {
        const requestContextPromise = this.requestFactory.getV2PersonsIdLists(id, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getV2PersonsIdListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns metadata for all the Lists on which the given Person appears.
     * Get a Person\'s Lists
     * @param id Persons ID
     * @param [cursor] Cursor for the next or previous page
     * @param [limit] Number of items to include in the page
     */
    public getV2PersonsIdLists(id: number, cursor?: string, limit?: number, _options?: Configuration): Observable<ListPaged> {
        return this.getV2PersonsIdListsWithHttpInfo(id, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<ListPaged>) => apiResponse.data));
    }

}
