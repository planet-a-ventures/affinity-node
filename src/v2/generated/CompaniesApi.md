# .CompaniesApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Companies**](CompaniesApi.md#getV2Companies) | **GET** /v2/companies | Get all Companies
[**getV2CompaniesFields**](CompaniesApi.md#getV2CompaniesFields) | **GET** /v2/companies/fields | Get metadata on Company Fields
[**getV2CompaniesId**](CompaniesApi.md#getV2CompaniesId) | **GET** /v2/companies/{id} | Get a single Company
[**getV2CompaniesIdListEntries**](CompaniesApi.md#getV2CompaniesIdListEntries) | **GET** /v2/companies/{id}/list-entries | Get a Company\&#39;s List Entries
[**getV2CompaniesIdLists**](CompaniesApi.md#getV2CompaniesIdLists) | **GET** /v2/companies/{id}/lists | Get a Company\&#39;s Lists


# **getV2Companies**
> CompanyPaged getV2Companies()

Paginate through Companies in Affinity. Returns basic information and non-list-specific field data on each Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetV2CompaniesRequest = {
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
  // Array<number> | Company IDs (optional)
  ids: [
    1,
  ],
  // Array<string> | Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
  // Array<'enriched' | 'global' | 'relationship-intelligence'> | Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

apiInstance.getV2Companies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **ids** | **Array&lt;number&gt;** | Company IDs | (optional) defaults to undefined
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**CompanyPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all Companies |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2CompaniesFields**
> FieldMetadataPaged getV2CompaniesFields()

Returns metadata on non-list-specific Company Fields.  Use the returned Field IDs to request field data from the GET `/v2/companies` and GET `/v2/companies/{id}` endpoints.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetV2CompaniesFieldsRequest = {
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2CompaniesFields(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**200** | Get metadata on Company Fields |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2CompaniesId**
> Company getV2CompaniesId()

Returns basic information and non-list-specific field data on the requested Company.  To retrieve field data, you must use either the `fieldIds` or the `fieldTypes` parameter to specify the Fields for which you want data returned. These Field IDs and Types can be found using the GET `/v2/companies/fields` endpoint. When no `fieldIds` or `fieldTypes` are provided, Companies will be returned without any field data attached. To supply multiple `fieldIds` or `fieldTypes` parameters, generate a query string that looks like this: `?fieldIds=field-1234&fieldIds=affinity-data-location` or `?fieldTypes=enriched&fieldTypes=global`.  Requires the \"Export All Organizations directory\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetV2CompaniesIdRequest = {
  // number | Company ID
  id: 1,
  // Array<string> | Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
  // Array<'enriched' | 'global' | 'relationship-intelligence'> | Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

apiInstance.getV2CompaniesId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Company ID | defaults to undefined
 **fieldIds** | **Array&lt;string&gt;** | Field IDs for which to return field data | (optional) defaults to undefined
 **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined


### Return type

**Company**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a single Company |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2CompaniesIdListEntries**
> ListEntryPaged getV2CompaniesIdListEntries()

Paginate through the List Entries (AKA rows) for the given Company across all Lists. Each List Entry includes field data for the Company, including list-specific field data. Each List Entry also includes metadata about its creation, i.e., when it was added to the List and by whom.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetV2CompaniesIdListEntriesRequest = {
  // number | Company ID
  id: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2CompaniesIdListEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Company ID | defaults to undefined
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
**200** | Get a Company\&#39;s List Entries |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2CompaniesIdLists**
> ListPaged getV2CompaniesIdLists()

Returns metadata for all the Lists on which the given Company appears.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetV2CompaniesIdListsRequest = {
  // number | Company ID
  id: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2CompaniesIdLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Company ID | defaults to undefined
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
**200** | Get a Company\&#39;s Lists |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


