# Affinity.MeetingsApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2MeetingsGET**](MeetingsApi.md#v2MeetingsGET) | **GET** /v2/meetings | Get metadata on all Meetings


# **v2MeetingsGET**
> InteractionsMeetingPaged v2MeetingsGET()

Paginate through all Meetings in Affinity. Returns basic information about past and future meeting interactions and its attendees.  You can filter meetings using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties. | **Property Name**           | **Description**                                                 | **Type**   | **Allowed Operators**                | **Examples**                     | |-----------------------------|-----------------------------------------------------------------|------------|--------------------------------------|----------------------------------| | `id`                        | Unique identifier for Meetings                                  | `int64`    | `=`                                  | `id=1`                           | | `startTime`                 | Start time of when Meeting was scheduled                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `startTime>2025-01-01T01:00:00Z` | | `createdAt`                 | When the Meeting was created in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `createdAt<2025-01-01T01:00:00Z` | | `updatedAt`                 | When the Meeting was updated in Affinity                        | `datetime` | `>`, `<`, `>=`, `<=`                 | `updatedAt>=2025-01-01T01:00:00Z`| 

### Example


```typescript
import { createConfiguration, MeetingsApi } from '@planet-a/affinity-node/v2';
import type { MeetingsApiV2MeetingsGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new MeetingsApi(configuration);

const request: MeetingsApiV2MeetingsGETRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "ICAgICAgYmVmb3JlOjo6Nw",
    // Number of items to include in the page (optional)
  limit: 100,
    // Filter options (optional)
  filter: "id=1234",
};

const data = await apiInstance.v2MeetingsGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 100
 **filter** | [**string**] | Filter options | (optional) defaults to undefined


### Return type

**InteractionsMeetingPaged**

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


