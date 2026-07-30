# FeaturesApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFeatures**](#getfeatures) | **GET** /features | Get public feature flags|

# **getFeatures**
> GetFeatures200Response getFeatures()


### Example

```typescript
import {
    FeaturesApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

const { status, data } = await apiInstance.getFeatures();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetFeatures200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature flags retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

