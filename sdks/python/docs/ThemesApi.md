# subtrackr_sdk.ThemesApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_theme**](ThemesApi.md#activate_theme) | **POST** /themes/{id}/activate | Activate a theme
[**create_theme**](ThemesApi.md#create_theme) | **POST** /themes | Create a new theme
[**delete_theme**](ThemesApi.md#delete_theme) | **DELETE** /themes/{id} | Delete a theme
[**get_theme_by_id**](ThemesApi.md#get_theme_by_id) | **GET** /themes/{id} | Get theme by ID
[**get_themes**](ThemesApi.md#get_themes) | **GET** /themes | List themes for merchant
[**update_theme**](ThemesApi.md#update_theme) | **PATCH** /themes/{id} | Update a theme


# **activate_theme**
> CreateTheme201Response activate_theme(id, x_merchant_id=x_merchant_id)

Activate a theme

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_theme201_response import CreateTheme201Response
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    id = 'theme_dark' # str | Theme identifier
    x_merchant_id = 'merchant_123' # str | Merchant identifier for multi-tenant isolation (optional)

    try:
        # Activate a theme
        api_response = api_instance.activate_theme(id, x_merchant_id=x_merchant_id)
        print("The response of ThemesApi->activate_theme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->activate_theme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Theme identifier | 
 **x_merchant_id** | **str**| Merchant identifier for multi-tenant isolation | [optional] 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Theme activated successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_theme**
> CreateTheme201Response create_theme(theme_input, x_merchant_id=x_merchant_id)

Create a new theme

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_theme201_response import CreateTheme201Response
from subtrackr_sdk.models.theme_input import ThemeInput
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    theme_input = subtrackr_sdk.ThemeInput() # ThemeInput | 
    x_merchant_id = 'merchant_123' # str | Merchant identifier for multi-tenant isolation (optional)

    try:
        # Create a new theme
        api_response = api_instance.create_theme(theme_input, x_merchant_id=x_merchant_id)
        print("The response of ThemesApi->create_theme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->create_theme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **theme_input** | [**ThemeInput**](ThemeInput.md)|  | 
 **x_merchant_id** | **str**| Merchant identifier for multi-tenant isolation | [optional] 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Theme created successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_theme**
> DeleteTheme200Response delete_theme(id)

Delete a theme

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.delete_theme200_response import DeleteTheme200Response
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    id = 'theme_dark' # str | Theme identifier

    try:
        # Delete a theme
        api_response = api_instance.delete_theme(id)
        print("The response of ThemesApi->delete_theme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->delete_theme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Theme identifier | 

### Return type

[**DeleteTheme200Response**](DeleteTheme200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Theme deleted successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_theme_by_id**
> CreateTheme201Response get_theme_by_id(id)

Get theme by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_theme201_response import CreateTheme201Response
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    id = 'theme_dark' # str | Theme identifier

    try:
        # Get theme by ID
        api_response = api_instance.get_theme_by_id(id)
        print("The response of ThemesApi->get_theme_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->get_theme_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Theme identifier | 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Theme found |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_themes**
> GetThemes200Response get_themes(x_merchant_id=x_merchant_id)

List themes for merchant

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.get_themes200_response import GetThemes200Response
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    x_merchant_id = 'merchant_123' # str | Merchant identifier for multi-tenant isolation (optional)

    try:
        # List themes for merchant
        api_response = api_instance.get_themes(x_merchant_id=x_merchant_id)
        print("The response of ThemesApi->get_themes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->get_themes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_merchant_id** | **str**| Merchant identifier for multi-tenant isolation | [optional] 

### Return type

[**GetThemes200Response**](GetThemes200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of themes |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_theme**
> CreateTheme201Response update_theme(id, theme_update_input)

Update a theme

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_theme201_response import CreateTheme201Response
from subtrackr_sdk.models.theme_update_input import ThemeUpdateInput
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
    api_instance = subtrackr_sdk.ThemesApi(api_client)
    id = 'theme_dark' # str | Theme identifier
    theme_update_input = subtrackr_sdk.ThemeUpdateInput() # ThemeUpdateInput | 

    try:
        # Update a theme
        api_response = api_instance.update_theme(id, theme_update_input)
        print("The response of ThemesApi->update_theme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThemesApi->update_theme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Theme identifier | 
 **theme_update_input** | [**ThemeUpdateInput**](ThemeUpdateInput.md)|  | 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Theme updated successfully |  -  |
**400** | Bad request |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

