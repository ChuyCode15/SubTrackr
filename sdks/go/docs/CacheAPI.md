# \CacheAPI

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PurgeUserCache**](CacheAPI.md#PurgeUserCache) | **Post** /purge-user-cache | Purge user-scoped cache entries



## PurgeUserCache

> PurgeUserCache200Response PurgeUserCache(ctx).UserId(userId).Execute()

Purge user-scoped cache entries

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
	userId := "user_123" // string | User identifier

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CacheAPI.PurgeUserCache(context.Background()).UserId(userId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CacheAPI.PurgeUserCache``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PurgeUserCache`: PurgeUserCache200Response
	fmt.Fprintf(os.Stdout, "Response from `CacheAPI.PurgeUserCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPurgeUserCacheRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string** | User identifier | 

### Return type

[**PurgeUserCache200Response**](PurgeUserCache200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

