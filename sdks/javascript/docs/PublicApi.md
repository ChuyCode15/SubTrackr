# PublicApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPublicConfig**](#getpublicconfig) | **GET** /public/{path} | Get public configuration|

# **getPublicConfig**
> GetPublicConfig200Response getPublicConfig()


### Example

```typescript
import {
    PublicApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let path: string; //Configuration path (e.g., app/version) (default to undefined)

const { status, data } = await apiInstance.getPublicConfig(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Configuration path (e.g., app/version) | defaults to undefined|


### Return type

**GetPublicConfig200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Configuration retrieved successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

