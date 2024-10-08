# .PersonsApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Persons**](PersonsApi.md#getV2Persons) | **GET** /v2/persons | Get all Persons
[**getV2PersonsFields**](PersonsApi.md#getV2PersonsFields) | **GET** /v2/persons/fields | Get metadata on Person Fields
[**getV2PersonsId**](PersonsApi.md#getV2PersonsId) | **GET** /v2/persons/{id} | Get a single Person
[**getV2PersonsIdListEntries**](PersonsApi.md#getV2PersonsIdListEntries) | **GET** /v2/persons/{id}/list-entries | Get a Person\&#39;s List Entries
[**getV2PersonsIdLists**](PersonsApi.md#getV2PersonsIdLists) | **GET** /v2/persons/{id}/lists | Get a Person\&#39;s Lists


# **getV2Persons**
> PersonPaged getV2Persons()

Paginate through Persons in Affinity. Returns basic information and non-list-specific field data on each Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, PersonsApi } from '';
import type { PersonsApiGetV2PersonsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonsApi(configuration);

const request: PersonsApiGetV2PersonsRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
    // People IDs (optional)
  ids: [
    1,
  ],
    // Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
    // Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

const data = await apiInstance.getV2Persons(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **ids** | **Array&lt;number&gt;** | People IDs | (optional) defaults to undefined
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**PersonPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all Persons |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2PersonsFields**
> FieldMetadataPaged getV2PersonsFields()

Returns metadata on non-list-specific Person Fields.  Use the returned Field IDs to request field data from the GET `/v2/persons` and GET `/v2/persons/{id}` endpoints.

### Example


```typescript
import { createConfiguration, PersonsApi } from '';
import type { PersonsApiGetV2PersonsFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonsApi(configuration);

const request: PersonsApiGetV2PersonsFieldsRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.getV2PersonsFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | Get metadata on Person Fields |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2PersonsId**
> Person getV2PersonsId()

Returns basic information and non-list-specific field data on the requested Person.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/persons/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Persons will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All People directory\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, PersonsApi } from '';
import type { PersonsApiGetV2PersonsIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonsApi(configuration);

const request: PersonsApiGetV2PersonsIdRequest = {
    // Person ID
  id: 1,
    // Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
    // Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

const data = await apiInstance.getV2PersonsId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Person ID | defaults to undefined
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**Person**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a single Person |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2PersonsIdListEntries**
> ListEntryPaged getV2PersonsIdListEntries()

Paginate through the List Entries (AKA rows) for the given Person across all Lists. Each List Entry includes field data for the Person, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, PersonsApi } from '';
import type { PersonsApiGetV2PersonsIdListEntriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonsApi(configuration);

const request: PersonsApiGetV2PersonsIdListEntriesRequest = {
    // Persons ID
  id: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.getV2PersonsIdListEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Persons ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**ListEntryPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a Person\&#39;s List Entries |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2PersonsIdLists**
> ListPaged getV2PersonsIdLists()

Returns metadata for all the Lists on which the given Person appears.

### Example


```typescript
import { createConfiguration, PersonsApi } from '';
import type { PersonsApiGetV2PersonsIdListsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonsApi(configuration);

const request: PersonsApiGetV2PersonsIdListsRequest = {
    // Persons ID
  id: 1,
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
};

const data = await apiInstance.getV2PersonsIdLists(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Persons ID | defaults to undefined
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100


### Return type

**ListPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a Person\&#39;s Lists |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


