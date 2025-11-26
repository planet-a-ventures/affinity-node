# Affinity.CallsApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CallsGET**](CallsApi.md#v2CallsGET) | **GET** /v2/calls | Get metadata on all Calls


# **v2CallsGET**
> InteractionsCallPaged v2CallsGET()

Paginate through all calls in Affinity. Returns basic information about the call interaction and its participants. Will only return calls that the current authenticated user has  permission to see.  You can filter calls using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Calls                                     | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when the Call was held                            | `datetime` | `>`, `<`, `>=`, `<=`                 | `sentAt>2025-01-01T01:00:00Z`    | | `createdAt`                 | When the Call was created in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Call was updated in Affinity                           | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 

### Example


```typescript
import { createConfiguration, CallsApi } from '@planet-a/affinity-node/v2';
import type { CallsApiV2CallsGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new CallsApi(configuration);

const request: CallsApiV2CallsGETRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "ICAgICAgYmVmb3JlOjo6Nw",
    // Number of items to include in the page (optional)
  limit: 100,
    // Filter options (optional)
  filter: "id=1234",
};

const data = await apiInstance.v2CallsGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **filter** | [**string**] | Filter options | (optional) defaults to undefined


### Return type

**InteractionsCallPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


