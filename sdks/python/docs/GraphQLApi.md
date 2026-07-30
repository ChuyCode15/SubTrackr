# subtrackr_sdk.GraphQLApi

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**graphql_query**](GraphQLApi.md#graphql_query) | **POST** /graphql | GraphQL endpoint


# **graphql_query**
> GraphqlQuery200Response graphql_query(graphql_query_request)

GraphQL endpoint

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import subtrackr_sdk
from subtrackr_sdk.models.graphql_query200_response import GraphqlQuery200Response
from subtrackr_sdk.models.graphql_query_request import GraphqlQueryRequest
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
    api_instance = subtrackr_sdk.GraphQLApi(api_client)
    graphql_query_request = subtrackr_sdk.GraphqlQueryRequest() # GraphqlQueryRequest | 

    try:
        # GraphQL endpoint
        api_response = api_instance.graphql_query(graphql_query_request)
        print("The response of GraphQLApi->graphql_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GraphQLApi->graphql_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graphql_query_request** | [**GraphqlQueryRequest**](GraphqlQueryRequest.md)|  | 

### Return type

[**GraphqlQuery200Response**](GraphqlQuery200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | GraphQL response |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

