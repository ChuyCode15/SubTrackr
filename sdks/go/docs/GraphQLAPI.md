# \GraphQLAPI

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GraphqlQuery**](GraphQLAPI.md#GraphqlQuery) | **Post** /graphql | GraphQL endpoint



## GraphqlQuery

> GraphqlQuery200Response GraphqlQuery(ctx).GraphqlQueryRequest(graphqlQueryRequest).Execute()

GraphQL endpoint

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	graphqlQueryRequest := *openapiclient.NewGraphqlQueryRequest() // GraphqlQueryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GraphQLAPI.GraphqlQuery(context.Background()).GraphqlQueryRequest(graphqlQueryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GraphQLAPI.GraphqlQuery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GraphqlQuery`: GraphqlQuery200Response
	fmt.Fprintf(os.Stdout, "Response from `GraphQLAPI.GraphqlQuery`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGraphqlQueryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graphqlQueryRequest** | [**GraphqlQueryRequest**](GraphqlQueryRequest.md) |  | 

### Return type

[**GraphqlQuery200Response**](GraphqlQuery200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

