# subtrackr_sdk.RateLimitsApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_rate_limit_analytics**](RateLimitsApi.md#get_rate_limit_analytics) | **GET** /rate-limits/analytics | Get rate limit analytics
[**get_rate_limit_status**](RateLimitsApi.md#get_rate_limit_status) | **GET** /rate-limits/status | Get rate limit status for an API key
[**manage_bypass**](RateLimitsApi.md#manage_bypass) | **POST** /rate-limits/bypass | Manage bypass list
[**set_custom_rate_limits**](RateLimitsApi.md#set_custom_rate_limits) | **POST** /rate-limits/config | Set custom rate limits for an API key


# **get_rate_limit_analytics**
> GetRateLimitAnalytics200Response get_rate_limit_analytics(tier=tier)

Get rate limit analytics

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.get_rate_limit_analytics200_response import GetRateLimitAnalytics200Response
from subtrackr_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.subtrackr.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = subtrackr_sdk.Configuration(
    host = "https://api.subtrackr.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with subtrackr_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = subtrackr_sdk.RateLimitsApi(api_client)
    tier = 'PREMIUM' # str | Subscription tier filter (optional)

    try:
        # Get rate limit analytics
        api_response = api_instance.get_rate_limit_analytics(tier=tier)
        print("The response of RateLimitsApi->get_rate_limit_analytics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateLimitsApi->get_rate_limit_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tier** | **str**| Subscription tier filter | [optional] 

### Return type

[**GetRateLimitAnalytics200Response**](GetRateLimitAnalytics200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rate limit analytics retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rate_limit_status**
> GetRateLimitStatus200Response get_rate_limit_status(api_key, tier=tier)

Get rate limit status for an API key

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.get_rate_limit_status200_response import GetRateLimitStatus200Response
from subtrackr_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.subtrackr.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = subtrackr_sdk.Configuration(
    host = "https://api.subtrackr.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with subtrackr_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = subtrackr_sdk.RateLimitsApi(api_client)
    api_key = 'sk_live_abc123' # str | API key for rate limit status check
    tier = 'PREMIUM' # str | Subscription tier filter (optional)

    try:
        # Get rate limit status for an API key
        api_response = api_instance.get_rate_limit_status(api_key, tier=tier)
        print("The response of RateLimitsApi->get_rate_limit_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateLimitsApi->get_rate_limit_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key for rate limit status check | 
 **tier** | **str**| Subscription tier filter | [optional] 

### Return type

[**GetRateLimitStatus200Response**](GetRateLimitStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rate limit status retrieved successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manage_bypass**
> ManageBypass200Response manage_bypass(manage_bypass_request)

Manage bypass list

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.manage_bypass200_response import ManageBypass200Response
from subtrackr_sdk.models.manage_bypass_request import ManageBypassRequest
from subtrackr_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.subtrackr.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = subtrackr_sdk.Configuration(
    host = "https://api.subtrackr.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with subtrackr_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = subtrackr_sdk.RateLimitsApi(api_client)
    manage_bypass_request = subtrackr_sdk.ManageBypassRequest() # ManageBypassRequest | 

    try:
        # Manage bypass list
        api_response = api_instance.manage_bypass(manage_bypass_request)
        print("The response of RateLimitsApi->manage_bypass:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateLimitsApi->manage_bypass: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manage_bypass_request** | [**ManageBypassRequest**](ManageBypassRequest.md)|  | 

### Return type

[**ManageBypass200Response**](ManageBypass200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bypass list updated successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_custom_rate_limits**
> SetCustomRateLimits200Response set_custom_rate_limits(set_custom_rate_limits_request)

Set custom rate limits for an API key

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.set_custom_rate_limits200_response import SetCustomRateLimits200Response
from subtrackr_sdk.models.set_custom_rate_limits_request import SetCustomRateLimitsRequest
from subtrackr_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.subtrackr.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = subtrackr_sdk.Configuration(
    host = "https://api.subtrackr.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with subtrackr_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = subtrackr_sdk.RateLimitsApi(api_client)
    set_custom_rate_limits_request = subtrackr_sdk.SetCustomRateLimitsRequest() # SetCustomRateLimitsRequest | 

    try:
        # Set custom rate limits for an API key
        api_response = api_instance.set_custom_rate_limits(set_custom_rate_limits_request)
        print("The response of RateLimitsApi->set_custom_rate_limits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateLimitsApi->set_custom_rate_limits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_custom_rate_limits_request** | [**SetCustomRateLimitsRequest**](SetCustomRateLimitsRequest.md)|  | 

### Return type

[**SetCustomRateLimits200Response**](SetCustomRateLimits200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Custom rate limits set successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

