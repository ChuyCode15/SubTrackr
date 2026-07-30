# subtrackr_sdk.CacheApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purge_user_cache**](CacheApi.md#purge_user_cache) | **POST** /purge-user-cache | Purge user-scoped cache entries


# **purge_user_cache**
> PurgeUserCache200Response purge_user_cache(user_id)

Purge user-scoped cache entries

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.purge_user_cache200_response import PurgeUserCache200Response
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
    api_instance = subtrackr_sdk.CacheApi(api_client)
    user_id = 'user_123' # str | User identifier

    try:
        # Purge user-scoped cache entries
        api_response = api_instance.purge_user_cache(user_id)
        print("The response of CacheApi->purge_user_cache:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CacheApi->purge_user_cache: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| User identifier | 

### Return type

[**PurgeUserCache200Response**](PurgeUserCache200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache purged successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

