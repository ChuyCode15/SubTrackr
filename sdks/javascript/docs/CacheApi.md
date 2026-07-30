# CacheApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**purgeUserCache**](#purgeusercache) | **POST** /purge-user-cache | Purge user-scoped cache entries|

# **purgeUserCache**
> PurgeUserCache200Response purgeUserCache()


### Example

```typescript
import {
    CacheApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new CacheApi(configuration);

let userId: string; //User identifier (default to undefined)

const { status, data } = await apiInstance.purgeUserCache(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | User identifier | defaults to undefined|


### Return type

**PurgeUserCache200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cache purged successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

