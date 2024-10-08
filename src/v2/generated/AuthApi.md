# Affinity.AuthApi

All URIs are relative to *https://api.affinity.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2AuthWhoami**](AuthApi.md#getV2AuthWhoami) | **GET** /v2/auth/whoami | Get current user


# **getV2AuthWhoami**
> WhoAmI getV2AuthWhoami()

Returns metadata about the current user.

### Example


```typescript
import { createConfiguration, AuthApi } from '@planet-a/affinity-node/v2';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.getV2AuthWhoami(request);
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
**200** | Get current user |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


