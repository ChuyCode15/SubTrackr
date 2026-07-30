# RateLimitsApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRateLimitAnalytics**](#getratelimitanalytics) | **GET** /rate-limits/analytics | Get rate limit analytics|
|[**getRateLimitStatus**](#getratelimitstatus) | **GET** /rate-limits/status | Get rate limit status for an API key|
|[**manageBypass**](#managebypass) | **POST** /rate-limits/bypass | Manage bypass list|
|[**setCustomRateLimits**](#setcustomratelimits) | **POST** /rate-limits/config | Set custom rate limits for an API key|

# **getRateLimitAnalytics**
> GetRateLimitAnalytics200Response getRateLimitAnalytics()


### Example

```typescript
import {
    RateLimitsApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new RateLimitsApi(configuration);

let tier: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'; //Subscription tier filter (optional) (default to undefined)

const { status, data } = await apiInstance.getRateLimitAnalytics(
    tier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tier** | [**&#39;FREE&#39; | &#39;BASIC&#39; | &#39;PREMIUM&#39; | &#39;ENTERPRISE&#39;**]**Array<&#39;FREE&#39; &#124; &#39;BASIC&#39; &#124; &#39;PREMIUM&#39; &#124; &#39;ENTERPRISE&#39;>** | Subscription tier filter | (optional) defaults to undefined|


### Return type

**GetRateLimitAnalytics200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rate limit analytics retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRateLimitStatus**
> GetRateLimitStatus200Response getRateLimitStatus()


### Example

```typescript
import {
    RateLimitsApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new RateLimitsApi(configuration);

let apiKey: string; //API key for rate limit status check (default to undefined)
let tier: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE'; //Subscription tier filter (optional) (default to undefined)

const { status, data } = await apiInstance.getRateLimitStatus(
    apiKey,
    tier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | API key for rate limit status check | defaults to undefined|
| **tier** | [**&#39;FREE&#39; | &#39;BASIC&#39; | &#39;PREMIUM&#39; | &#39;ENTERPRISE&#39;**]**Array<&#39;FREE&#39; &#124; &#39;BASIC&#39; &#124; &#39;PREMIUM&#39; &#124; &#39;ENTERPRISE&#39;>** | Subscription tier filter | (optional) defaults to undefined|


### Return type

**GetRateLimitStatus200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rate limit status retrieved successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageBypass**
> ManageBypass200Response manageBypass(manageBypassRequest)


### Example

```typescript
import {
    RateLimitsApi,
    Configuration,
    ManageBypassRequest
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new RateLimitsApi(configuration);

let manageBypassRequest: ManageBypassRequest; //

const { status, data } = await apiInstance.manageBypass(
    manageBypassRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manageBypassRequest** | **ManageBypassRequest**|  | |


### Return type

**ManageBypass200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bypass list updated successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomRateLimits**
> SetCustomRateLimits200Response setCustomRateLimits(setCustomRateLimitsRequest)


### Example

```typescript
import {
    RateLimitsApi,
    Configuration,
    SetCustomRateLimitsRequest
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new RateLimitsApi(configuration);

let setCustomRateLimitsRequest: SetCustomRateLimitsRequest; //

const { status, data } = await apiInstance.setCustomRateLimits(
    setCustomRateLimitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setCustomRateLimitsRequest** | **SetCustomRateLimitsRequest**|  | |


### Return type

**SetCustomRateLimits200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom rate limits set successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

