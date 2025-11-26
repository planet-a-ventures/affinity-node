# Affinity.PersonMergesApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PersonMergesGET**](PersonMergesApi.md#v2PersonMergesGET) | **GET** /v2/person-merges | Get All Person Merges
[**v2PersonMergesMergeIdGET**](PersonMergesApi.md#v2PersonMergesMergeIdGET) | **GET** /v2/person-merges/{mergeId} | Get Person Merge
[**v2PersonMergesPOST**](PersonMergesApi.md#v2PersonMergesPOST) | **POST** /v2/person-merges | Initiate Person Merge
[**v2TasksPersonMergesGET**](PersonMergesApi.md#v2TasksPersonMergesGET) | **GET** /v2/tasks/person-merges | Get All Person Merge Tasks
[**v2TasksPersonMergesTaskIdGET**](PersonMergesApi.md#v2TasksPersonMergesTaskIdGET) | **GET** /v2/tasks/person-merges/{taskId} | Get Person Merge Task


# **v2PersonMergesGET**
> PersonMergeStatePaged v2PersonMergesGET()

Retrieve paginated person merges for the organization.   Returns all person merges initiated by users in your organization, including their current status, the persons involved, and merge details. You can filter person merges using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:   | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` | | `taskId` | `string` | `=` | | `taskId=789e0123-e45b-67c8-d901-234567890123` |   Person merges are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 

### Example


```typescript
import { createConfiguration, PersonMergesApi } from '@planet-a/affinity-node/v2';
import type { PersonMergesApiV2PersonMergesGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new PersonMergesApi(configuration);

const request: PersonMergesApiV2PersonMergesGETRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "ICAgICAgYmVmb3JlOjo6Nw",
    // Number of items to include in the page (optional)
  limit: 25,
    // Filter person merges using Affinity Filtering Language (optional)
  filter: "status=failed | taskId=789e0123-e45b-67c8-d901-234567890123",
};

const data = await apiInstance.v2PersonMergesGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 25
 **filter** | [**string**] | Filter person merges using Affinity Filtering Language | (optional) defaults to undefined


### Return type

**PersonMergeStatePaged**

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
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PersonMergesMergeIdGET**
> PersonMergeState v2PersonMergesMergeIdGET()

Retrieve the status and details of a specific person merge.  Returns information about the person merge including its current status, the persons involved, timestamps, and any error information if the merge failed.  The `mergeId` can be obtained from the response of the [Get All Person Merges](#tag/personMerges/operation/v2_person-merges__GET) endpoint, or by filtering person merges by task ID using `/v2/person-merges?filter=taskId={taskId}` after initiating a merge.  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.

### Example


```typescript
import { createConfiguration, PersonMergesApi } from '@planet-a/affinity-node/v2';
import type { PersonMergesApiV2PersonMergesMergeIdGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new PersonMergesApi(configuration);

const request: PersonMergesApiV2PersonMergesMergeIdGETRequest = {
    // Person merge ID
  mergeId: 1,
};

const data = await apiInstance.v2PersonMergesMergeIdGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeId** | [**number**] | Person merge ID | defaults to undefined


### Return type

**PersonMergeState**

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
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PersonMergesPOST**
> PersonMergeResponse v2PersonMergesPOST(personMergeRequest)

Initiate a person merge to combine a duplicate person profile into a primary person profile.  This is an asynchronous process that will merge all data from the duplicate person into the primary person. Once the merge is initiated, you can track its progress using the returned [task URL](#tag/personMerges/operation/v2_tasks_person-merges_taskId__GET).  Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role.

### Example


```typescript
import { createConfiguration, PersonMergesApi } from '@planet-a/affinity-node/v2';
import type { PersonMergesApiV2PersonMergesPOSTRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new PersonMergesApi(configuration);

const request: PersonMergesApiV2PersonMergesPOSTRequest = {
  
  personMergeRequest: {
    primaryPersonId: 1,
    duplicatePersonId: 1,
  },
};

const data = await apiInstance.v2PersonMergesPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personMergeRequest** | **PersonMergeRequest**|  |


### Return type

**PersonMergeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**400** | Bad Request |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TasksPersonMergesGET**
> PersonMergeTaskPaged v2TasksPersonMergesGET()

Retrieve paginated person merge tasks for the organization.   Returns all merge tasks initiated by users in your organization, including their current status, the persons involved, and task details.   You can filter tasks using the `filter` query parameter. The filter parameter is a string that you can specify conditions based on the following properties:  | Property | Type | Operators | Values | Examples | |----------|------|-----------|--------|----------| | `status` | `enum` | `=` | `in-progress`, `success`, `failed` | `status=failed` |   Tasks are returned in reverse chronological order (most recent first).   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 

### Example


```typescript
import { createConfiguration, PersonMergesApi } from '@planet-a/affinity-node/v2';
import type { PersonMergesApiV2TasksPersonMergesGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new PersonMergesApi(configuration);

const request: PersonMergesApiV2TasksPersonMergesGETRequest = {
    // Cursor for the next or previous page (optional)
  cursor: "ICAgICAgYmVmb3JlOjo6Nw",
    // Number of items to include in the page (optional)
  limit: 25,
    // Filter tasks using Affinity Filtering Language (optional)
  filter: "status=failed",
};

const data = await apiInstance.v2TasksPersonMergesGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor for the next or previous page | (optional) defaults to undefined
 **limit** | [**number**] | Number of items to include in the page | (optional) defaults to 25
 **filter** | [**string**] | Filter tasks using Affinity Filtering Language | (optional) defaults to undefined


### Return type

**PersonMergeTaskPaged**

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
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TasksPersonMergesTaskIdGET**
> PersonMergeTask v2TasksPersonMergesTaskIdGET()

Retrieve the status and details of a specific task for person merges.   Returns information about the person merges for a specific task including its overall status, number of merges in-progress, completed, and failed.   Detailed information about individual merges for this task can be found by querying: `/v2/person-merges?filter=taskId={taskId}` See [Person Merges](#tag/personMerges/operation/v2_person-merges__GET) for more details.   Task statuses:  - `in-progress`: The merge task is currently being processed. - `success`: The merge task completed successfully. - `failed`: The merge task failed.   Requires the \"Manage duplicates\" [permission](#section/Getting-Started/Permissions) and organization admin role. 

### Example


```typescript
import { createConfiguration, PersonMergesApi } from '@planet-a/affinity-node/v2';
import type { PersonMergesApiV2TasksPersonMergesTaskIdGETRequest } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new PersonMergesApi(configuration);

const request: PersonMergesApiV2TasksPersonMergesTaskIdGETRequest = {
    // Person merge task ID
  taskId: "taskId_example",
};

const data = await apiInstance.v2TasksPersonMergesTaskIdGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | Person merge task ID | defaults to undefined


### Return type

**PersonMergeTask**

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
**403** | Forbidden |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


