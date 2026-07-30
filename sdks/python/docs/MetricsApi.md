# subtrackr_sdk.MetricsApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_plan_cache_metrics**](MetricsApi.md#get_plan_cache_metrics) | **GET** /metrics/plan-cache | Prometheus metrics for plan cache


# **get_plan_cache_metrics**
> str get_plan_cache_metrics()

Prometheus metrics for plan cache

### Example


```python
import subtrackr_sdk
from subtrackr_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.subtrackr.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = subtrackr_sdk.Configuration(
    host = "https://api.subtrackr.com/v1"
)


# Enter a context with an instance of the API client
with subtrackr_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = subtrackr_sdk.MetricsApi(api_client)

    try:
        # Prometheus metrics for plan cache
        api_response = api_instance.get_plan_cache_metrics()
        print("The response of MetricsApi->get_plan_cache_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->get_plan_cache_metrics: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prometheus metrics |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

