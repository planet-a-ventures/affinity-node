# Affinity.AuthApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2AuthWhoamiGET**](AuthApi.md#v2AuthWhoamiGET) | **GET** /v2/auth/whoami | Get current user


# **v2AuthWhoamiGET**
> WhoAmI v2AuthWhoamiGET()

Returns information about the authenticated user, their current organization, and API key permissions. Use this endpoint to verify your authentication and understand your available API access levels.

### Example


```typescript
import { createConfiguration, AuthApi } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.v2AuthWhoamiGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WhoAmI**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**404** | Not Found |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |
**0** | Errors |  * X-Ratelimit-Limit-User -  <br>  * X-Ratelimit-Limit-User-Remaining -  <br>  * X-Ratelimit-Limit-User-Reset -  <br>  * X-Ratelimit-Limit-Org -  <br>  * X-Ratelimit-Limit-Org-Remaining -  <br>  * X-Ratelimit-Limit-Org-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


