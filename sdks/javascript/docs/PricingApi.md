# PricingApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPublicPricing**](#getpublicpricing) | **GET** /pricing | Get public pricing tiers|

# **getPublicPricing**
> GetPublicPricing200Response getPublicPricing()


### Example

```typescript
import {
    PricingApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PricingApi(configuration);

const { status, data } = await apiInstance.getPublicPricing();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetPublicPricing200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing tiers retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

