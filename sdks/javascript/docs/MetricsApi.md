# MetricsApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPlanCacheMetrics**](#getplancachemetrics) | **GET** /metrics/plan-cache | Prometheus metrics for plan cache|

# **getPlanCacheMetrics**
> string getPlanCacheMetrics()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

const { status, data } = await apiInstance.getPlanCacheMetrics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Prometheus metrics |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

