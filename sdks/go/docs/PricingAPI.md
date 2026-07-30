# \PricingAPI

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPublicPricing**](PricingAPI.md#GetPublicPricing) | **Get** /pricing | Get public pricing tiers



## GetPublicPricing

> GetPublicPricing200Response GetPublicPricing(ctx).Execute()

Get public pricing tiers

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PricingAPI.GetPublicPricing(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PricingAPI.GetPublicPricing``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPublicPricing`: GetPublicPricing200Response
	fmt.Fprintf(os.Stdout, "Response from `PricingAPI.GetPublicPricing`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicPricingRequest struct via the builder pattern


### Return type

[**GetPublicPricing200Response**](GetPublicPricing200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

