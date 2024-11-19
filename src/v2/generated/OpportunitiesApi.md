# Affinity.OpportunitiesApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Opportunities**](OpportunitiesApi.md#getV2Opportunities) | **GET** /v2/opportunities | Get all Opportunities
[**getV2OpportunitiesId**](OpportunitiesApi.md#getV2OpportunitiesId) | **GET** /v2/opportunities/{id} | Get a single Opportunity


# **getV2Opportunities**
> OpportunityPaged getV2Opportunities()

Paginate through Opportunities in Affinity. Returns basic information but **not** field data on each Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, OpportunitiesApi } from '@planet-a/affinity-node/v2';
import type { OpportunitiesApiGetV2OpportunitiesRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new OpportunitiesApi(configuration);

const request: OpportunitiesApiGetV2OpportunitiesRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "cursor_example",
    // Number of items to include in the page (optional)
  limit: 100,
    // Opportunity IDs (optional)
  ids: [
    1,
  ],
};

const data = await apiInstance.getV2Opportunities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **ids** | **Array&lt;number&gt;** | Opportunity IDs | (optional) defaults to undefined


### Return type

**OpportunityPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all Opportunities |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getV2OpportunitiesId**
> Opportunity getV2OpportunitiesId()

Returns basic information but **not** field data on the requested Opportunity.  To access field data on Opportunities, use the `/lists/{list_id}/list-entries` or the `/v2/lists/{list_id}/saved-views/{view_id}/list-entries` GET endpoint.  Requires the \"Export data from Lists\" [permission](#section/Getting-Started/Permissions).

### Example


```typescript
import { createConfiguration, OpportunitiesApi } from '@planet-a/affinity-node/v2';
import type { OpportunitiesApiGetV2OpportunitiesIdRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new OpportunitiesApi(configuration);

const request: OpportunitiesApiGetV2OpportunitiesIdRequest = {
    // Opportunity ID
  id: 1,
};

const data = await apiInstance.getV2OpportunitiesId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Opportunity ID | defaults to undefined


### Return type

**Opportunity**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a single Opportunity |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


