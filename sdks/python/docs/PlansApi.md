# subtrackr_sdk.PlansApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_plan**](PlansApi.md#create_plan) | **POST** /plans | Create a new subscription plan
[**deactivate_plan**](PlansApi.md#deactivate_plan) | **DELETE** /plans/{id} | Deactivate a plan
[**get_plan_by_id**](PlansApi.md#get_plan_by_id) | **GET** /plans/{id} | Get a plan by ID
[**list_plans**](PlansApi.md#list_plans) | **GET** /plans | List all subscription plans
[**update_plan**](PlansApi.md#update_plan) | **PATCH** /plans/{id} | Update a plan


# **create_plan**
> CreatePlan201Response create_plan(plan_input)

Create a new subscription plan

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_plan201_response import CreatePlan201Response
from subtrackr_sdk.models.plan_input import PlanInput
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
    api_instance = subtrackr_sdk.PlansApi(api_client)
    plan_input = subtrackr_sdk.PlanInput() # PlanInput | 

    try:
        # Create a new subscription plan
        api_response = api_instance.create_plan(plan_input)
        print("The response of PlansApi->create_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->create_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_input** | [**PlanInput**](PlanInput.md)|  | 

### Return type

[**CreatePlan201Response**](CreatePlan201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Plan created successfully |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_plan**
> CreatePlan201Response deactivate_plan(id)

Deactivate a plan

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_plan201_response import CreatePlan201Response
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
    api_instance = subtrackr_sdk.PlansApi(api_client)
    id = 'plan_premium' # str | Plan identifier

    try:
        # Deactivate a plan
        api_response = api_instance.deactivate_plan(id)
        print("The response of PlansApi->deactivate_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->deactivate_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Plan identifier | 

### Return type

[**CreatePlan201Response**](CreatePlan201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan deactivated successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plan_by_id**
> CreatePlan201Response get_plan_by_id(id)

Get a plan by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_plan201_response import CreatePlan201Response
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
    api_instance = subtrackr_sdk.PlansApi(api_client)
    id = 'plan_premium' # str | Plan identifier

    try:
        # Get a plan by ID
        api_response = api_instance.get_plan_by_id(id)
        print("The response of PlansApi->get_plan_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->get_plan_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Plan identifier | 

### Return type

[**CreatePlan201Response**](CreatePlan201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan found |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_plans**
> ListPlans200Response list_plans()

List all subscription plans

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.list_plans200_response import ListPlans200Response
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
    api_instance = subtrackr_sdk.PlansApi(api_client)

    try:
        # List all subscription plans
        api_response = api_instance.list_plans()
        print("The response of PlansApi->list_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->list_plans: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListPlans200Response**](ListPlans200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of plans |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_plan**
> CreatePlan201Response update_plan(id, plan_update_input)

Update a plan

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.create_plan201_response import CreatePlan201Response
from subtrackr_sdk.models.plan_update_input import PlanUpdateInput
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
    api_instance = subtrackr_sdk.PlansApi(api_client)
    id = 'plan_premium' # str | Plan identifier
    plan_update_input = subtrackr_sdk.PlanUpdateInput() # PlanUpdateInput | 

    try:
        # Update a plan
        api_response = api_instance.update_plan(id, plan_update_input)
        print("The response of PlansApi->update_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlansApi->update_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Plan identifier | 
 **plan_update_input** | [**PlanUpdateInput**](PlanUpdateInput.md)|  | 

### Return type

[**CreatePlan201Response**](CreatePlan201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plan updated successfully |  -  |
**400** | Bad request |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

