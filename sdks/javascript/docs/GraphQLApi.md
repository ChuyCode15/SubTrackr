# GraphQLApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**graphqlQuery**](#graphqlquery) | **POST** /graphql | GraphQL endpoint|

# **graphqlQuery**
> GraphqlQuery200Response graphqlQuery(graphqlQueryRequest)


### Example

```typescript
import {
    GraphQLApi,
    Configuration,
    GraphqlQueryRequest
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new GraphQLApi(configuration);

let graphqlQueryRequest: GraphqlQueryRequest; //

const { status, data } = await apiInstance.graphqlQuery(
    graphqlQueryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **graphqlQueryRequest** | **GraphqlQueryRequest**|  | |


### Return type

**GraphqlQuery200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | GraphQL response |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

