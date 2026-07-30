# subtrackr_sdk.PricingApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_public_pricing**](PricingApi.md#get_public_pricing) | **GET** /pricing | Get public pricing tiers


# **get_public_pricing**
> GetPublicPricing200Response get_public_pricing()

Get public pricing tiers

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.get_public_pricing200_response import GetPublicPricing200Response
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
    api_instance = subtrackr_sdk.PricingApi(api_client)

    try:
        # Get public pricing tiers
        api_response = api_instance.get_public_pricing()
        print("The response of PricingApi->get_public_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingApi->get_public_pricing: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetPublicPricing200Response**](GetPublicPricing200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pricing tiers retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

