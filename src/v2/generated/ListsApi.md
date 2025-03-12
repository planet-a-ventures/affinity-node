# Affinity.ListsApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2ListsListidSavedViews**](ListsApi.md#getV2ListsListidSavedViews) | **GET** /v2/lists/{listId}/saved-views | Get metadata on Saved Views
[**getV2ListsListidSavedViewsViewid**](ListsApi.md#getV2ListsListidSavedViewsViewid) | **GET** /v2/lists/{listId}/saved-views/{viewId} | Get metadata on a single Saved View
[**getV2ListsListidSavedViewsViewidListEntries**](ListsApi.md#getV2ListsListidSavedViewsViewidListEntries) | **GET** /v2/lists/{listId}/saved-views/{viewId}/list-entries | Get all List Entries on a Saved View
[**v2ListsGET**](ListsApi.md#v2ListsGET) | **GET** /v2/lists | Get metadata on all Lists
[**v2ListsListIdFieldsGET**](ListsApi.md#v2ListsListIdFieldsGET) | **GET** /v2/lists/{listId}/fields | Get metadata on a single List\&#39;s Fields
[**v2ListsListIdGET**](ListsApi.md#v2ListsListIdGET) | **GET** /v2/lists/{listId} | Get metadata on a single List
[**v2ListsListIdListEntriesGET**](ListsApi.md#v2ListsListIdListEntriesGET) | **GET** /v2/lists/{listId}/list-entries | Get all List Entries on a List
[**v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET**](ListsApi.md#v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET) | **GET** /v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId} | Get a single field value [BETA]
[**v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST**](ListsApi.md#v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST) | **POST** /v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId} | Update a single field value on a List Entry [BETA]
[**v2ListsListIdListEntriesListEntryIdFieldsGET**](ListsApi.md#v2ListsListIdListEntriesListEntryIdFieldsGET) | **GET** /v2/lists/{listId}/list-entries/{listEntryId}/fields | Get field values on a single List Entry [BETA]
[**v2ListsListIdListEntriesListEntryIdFieldsPATCH**](ListsApi.md#v2ListsListIdListEntriesListEntryIdFieldsPATCH) | **PATCH** /v2/lists/{listId}/list-entries/{listEntryId}/fields | Perform batch operations on a list entry\&#39;s fields [BETA]
[**v2ListsListIdListEntriesListEntryIdGET**](ListsApi.md#v2ListsListIdListEntriesListEntryIdGET) | **GET** /v2/lists/{listId}/list-entries/{listEntryId} | Get a single List Entry on a List [BETA]


# **getV2ListsListidSavedViews**
> SavedViewPaged getV2ListsListidSavedViews()

Returns metadata on the Saved Views on a List.

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiGetV2ListsListidSavedViewsRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiGetV2ListsListidSavedViewsRequest = {
    // List ID
  listId: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.getV2ListsListidSavedViews(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**SavedViewPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get metadata on Saved Views |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2ListsListidSavedViewsViewid**
> SavedView getV2ListsListidSavedViewsViewid()

Returns metadata on a single Saved View.

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiGetV2ListsListidSavedViewsViewidRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiGetV2ListsListidSavedViewsViewidRequest = {
    // List ID
  listId: 1,
    // Saved view ID
  viewId: 1,
};

const data = await apiInstance.getV2ListsListidSavedViewsViewid(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **viewId** | [**number**] | Saved view ID | defaults to undefined


### Return type

**SavedView**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get metadata on a single Saved View |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2ListsListidSavedViewsViewidListEntries**
> ListEntryWithEntityPaged getV2ListsListidSavedViewsViewidListEntries()

Paginate through the List Entries (AKA rows) on a given Saved View. Use this endpoint when you need to filter entities or only want **some** field data to be returned: This endpoint respects the filters set on a Saved View via web app, and only returns field data corresponding to the columns that have been pulled into the Saved View via web app.  Though this endpoint respects the Saved View\'s filters and column/Field selection, it does not yet preserve sort order. This endpoint also only supports **sheet-type Saved Views**, and not board- or dashboard-type Saved Views.  See the [Data Model](#section/Data-Model) section for more information about Saved Views.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest = {
    // List ID
  listId: 1,
    // Saved view ID
  viewId: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.getV2ListsListidSavedViewsViewidListEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **viewId** | [**number**] | Saved view ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**ListEntryWithEntityPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all List Entries on a Saved View |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsGET**
> ListWithTypePaged v2ListsGET()

Returns metadata on Lists.

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsGETRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.v2ListsGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**ListWithTypePaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get metadata on all Lists |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdFieldsGET**
> FieldMetadataPaged v2ListsListIdFieldsGET()

Returns metadata on the Fields available on a single List.  Use the returned Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries` endpoint.

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdFieldsGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdFieldsGETRequest = {
    // List ID
  listId: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.v2ListsListIdFieldsGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**FieldMetadataPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get metadata on a single List\&#39;s Fields |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdGET**
> ListWithType v2ListsListIdGET()

Returns metadata on a single List.

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdGETRequest = {
    // List ID
  listId: 1,
};

const data = await apiInstance.v2ListsListIdGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined


### Return type

**ListWithType**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get metadata on a single List |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesGET**
> ListEntryWithEntityPaged v2ListsListIdListEntriesGET()

Paginate through the List Entries (AKA rows) on a given List. Returns basic information and field data, including list-specific field data, on each Company, Person, or Opportunity on the List. List Entries also include metadata about their creation, i.e., when they were added to the List and by whom.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, List Entries will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesGETRequest = {
    // List ID
  listId: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
    // Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
    // Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

const data = await apiInstance.v2ListsListIdListEntriesGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;list&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**ListEntryWithEntityPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all List Entries on a List |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET**
> Field v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET()

 | ⚠️  This endpoint is currently in BETA | |--|  Returns a single field value on a list entry.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdGETRequest = {
    // List ID
  listId: 1,
    // List Entry ID
  listEntryId: 1,
    // Field ID
  fieldId: "fieldId_example",
};

const data = await apiInstance.v2ListsListIdListEntriesListEntryIdFieldsFieldIdGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **listEntryId** | [**number**] | List Entry ID | defaults to undefined
 **fieldId** | [**string**] | Field ID | defaults to undefined


### Return type

**Field**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The field value |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST**
> void v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(fieldUpdate)

 | ⚠️  This endpoint is currently in BETA | |--|  Update a single field value.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesListEntryIdFieldsFieldIdPOSTRequest = {
    // List ID
  listId: 1,
    // List Entry ID
  listEntryId: 1,
    // Field ID
  fieldId: "fieldId_example",
  
  fieldUpdate: {
    value: null,
  },
};

const data = await apiInstance.v2ListsListIdListEntriesListEntryIdFieldsFieldIdPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldUpdate** | **FieldUpdate**|  |
 **listId** | [**number**] | List ID | defaults to undefined
 **listEntryId** | [**number**] | List Entry ID | defaults to undefined
 **fieldId** | [**string**] | Field ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesListEntryIdFieldsGET**
> FieldPaged v2ListsListIdListEntriesListEntryIdFieldsGET()

 | ⚠️  This endpoint is currently in BETA | |--|  Paginate through all field values on a single list entry.  All fields will be included by default. The `ids` and `types` parameters can be used to filter the collection.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesListEntryIdFieldsGETRequest = {
    // List ID
  listId: 1,
    // List Entry ID
  listEntryId: 1,
    // Field IDs for which to return field data (optional)
  ids: [
    "ids_example",
  ],
    // Field Types for which to return field data (optional)
  types: [
    "enriched",
  ],
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 20,
};

const data = await apiInstance.v2ListsListIdListEntriesListEntryIdFieldsGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **listEntryId** | [**number**] | List Entry ID | defaults to undefined
 **ids** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **types** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;list&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 20


### Return type

**FieldPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated fields |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesListEntryIdFieldsPATCH**
> ListEntryBatchOperationResponse v2ListsListIdListEntriesListEntryIdFieldsPATCH(body)

| ⚠️  This endpoint is currently in BETA | |--|  Perform batch operations on a list entry\'s fields.  Currently the only operation at the endpoint is `update-fields`, which allows you to update multiple field values with a single request. This is equivalent to calling [the single field update](#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST) endpoint multiple times.      Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesListEntryIdFieldsPATCHRequest = {
    // List ID
  listId: 1,
    // List Entry ID
  listEntryId: 1,
  
  body: {
    operation: "update-fields",
    updates: [
      {
        id: "id_example",
        value: null,
      },
    ],
  },
};

const data = await apiInstance.v2ListsListIdListEntriesListEntryIdFieldsPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ListEntryBatchOperationUpdateFields**|  |
 **listId** | [**number**] | List ID | defaults to undefined
 **listEntryId** | [**number**] | List Entry ID | defaults to undefined


### Return type

**ListEntryBatchOperationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation Result |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2ListsListIdListEntriesListEntryIdGET**
> ListEntryWithEntity v2ListsListIdListEntriesListEntryIdGET()

| ⚠️  This endpoint is currently in BETA | |--|  Retrieve a single list entry. Returns basic information and field data, including list-specific field data.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, the List Entry will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, ListsApi } from '@planet-a/affinity-node/v2';
import type { ListsApiV2ListsListIdListEntriesListEntryIdGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new ListsApi(configuration);

const request: ListsApiV2ListsListIdListEntriesListEntryIdGETRequest = {
    // List ID
  listId: 1,
    // List Entry ID
  listEntryId: 1,
    // Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
    // Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

const data = await apiInstance.v2ListsListIdListEntriesListEntryIdGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | List ID | defaults to undefined
 **listEntryId** | [**number**] | List Entry ID | defaults to undefined
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;list&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**ListEntryWithEntity**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list entry |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


