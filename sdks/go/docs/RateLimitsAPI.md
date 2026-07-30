# \RateLimitsAPI

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRateLimitAnalytics**](RateLimitsAPI.md#GetRateLimitAnalytics) | **Get** /rate-limits/analytics | Get rate limit analytics
[**GetRateLimitStatus**](RateLimitsAPI.md#GetRateLimitStatus) | **Get** /rate-limits/status | Get rate limit status for an API key
[**ManageBypass**](RateLimitsAPI.md#ManageBypass) | **Post** /rate-limits/bypass | Manage bypass list
[**SetCustomRateLimits**](RateLimitsAPI.md#SetCustomRateLimits) | **Post** /rate-limits/config | Set custom rate limits for an API key



## GetRateLimitAnalytics

> GetRateLimitAnalytics200Response GetRateLimitAnalytics(ctx).Tier(tier).Execute()

Get rate limit analytics

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
	tier := "PREMIUM" // string | Subscription tier filter (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateLimitsAPI.GetRateLimitAnalytics(context.Background()).Tier(tier).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateLimitsAPI.GetRateLimitAnalytics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRateLimitAnalytics`: GetRateLimitAnalytics200Response
	fmt.Fprintf(os.Stdout, "Response from `RateLimitsAPI.GetRateLimitAnalytics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRateLimitAnalyticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tier** | **string** | Subscription tier filter | 

### Return type

[**GetRateLimitAnalytics200Response**](GetRateLimitAnalytics200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateLimitStatus

> GetRateLimitStatus200Response GetRateLimitStatus(ctx).ApiKey(apiKey).Tier(tier).Execute()

Get rate limit status for an API key

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
	apiKey := "sk_live_abc123" // string | API key for rate limit status check
	tier := "PREMIUM" // string | Subscription tier filter (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateLimitsAPI.GetRateLimitStatus(context.Background()).ApiKey(apiKey).Tier(tier).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateLimitsAPI.GetRateLimitStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRateLimitStatus`: GetRateLimitStatus200Response
	fmt.Fprintf(os.Stdout, "Response from `RateLimitsAPI.GetRateLimitStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRateLimitStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string** | API key for rate limit status check | 
 **tier** | **string** | Subscription tier filter | 

### Return type

[**GetRateLimitStatus200Response**](GetRateLimitStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageBypass

> ManageBypass200Response ManageBypass(ctx).ManageBypassRequest(manageBypassRequest).Execute()

Manage bypass list

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
	manageBypassRequest := *openapiclient.NewManageBypassRequest("key", "sk_live_abc123", "add") // ManageBypassRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateLimitsAPI.ManageBypass(context.Background()).ManageBypassRequest(manageBypassRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateLimitsAPI.ManageBypass``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ManageBypass`: ManageBypass200Response
	fmt.Fprintf(os.Stdout, "Response from `RateLimitsAPI.ManageBypass`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiManageBypassRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageBypassRequest** | [**ManageBypassRequest**](ManageBypassRequest.md) |  | 

### Return type

[**ManageBypass200Response**](ManageBypass200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetCustomRateLimits

> SetCustomRateLimits200Response SetCustomRateLimits(ctx).SetCustomRateLimitsRequest(setCustomRateLimitsRequest).Execute()

Set custom rate limits for an API key

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
	setCustomRateLimitsRequest := *openapiclient.NewSetCustomRateLimitsRequest("sk_live_abc123") // SetCustomRateLimitsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateLimitsAPI.SetCustomRateLimits(context.Background()).SetCustomRateLimitsRequest(setCustomRateLimitsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateLimitsAPI.SetCustomRateLimits``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetCustomRateLimits`: SetCustomRateLimits200Response
	fmt.Fprintf(os.Stdout, "Response from `RateLimitsAPI.SetCustomRateLimits`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetCustomRateLimitsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setCustomRateLimitsRequest** | [**SetCustomRateLimitsRequest**](SetCustomRateLimitsRequest.md) |  | 

### Return type

[**SetCustomRateLimits200Response**](SetCustomRateLimits200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

