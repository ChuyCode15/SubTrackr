# \ThemesAPI

All URIs are relative to *https://api.subtrackr.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ActivateTheme**](ThemesAPI.md#ActivateTheme) | **Post** /themes/{id}/activate | Activate a theme
[**CreateTheme**](ThemesAPI.md#CreateTheme) | **Post** /themes | Create a new theme
[**DeleteTheme**](ThemesAPI.md#DeleteTheme) | **Delete** /themes/{id} | Delete a theme
[**GetThemeById**](ThemesAPI.md#GetThemeById) | **Get** /themes/{id} | Get theme by ID
[**GetThemes**](ThemesAPI.md#GetThemes) | **Get** /themes | List themes for merchant
[**UpdateTheme**](ThemesAPI.md#UpdateTheme) | **Patch** /themes/{id} | Update a theme



## ActivateTheme

> CreateTheme201Response ActivateTheme(ctx, id).XMerchantId(xMerchantId).Execute()

Activate a theme

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
	id := "theme_dark" // string | Theme identifier
	xMerchantId := "merchant_123" // string | Merchant identifier for multi-tenant isolation (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.ActivateTheme(context.Background(), id).XMerchantId(xMerchantId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.ActivateTheme``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ActivateTheme`: CreateTheme201Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.ActivateTheme`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Theme identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiActivateThemeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xMerchantId** | **string** | Merchant identifier for multi-tenant isolation | 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTheme

> CreateTheme201Response CreateTheme(ctx).ThemeInput(themeInput).XMerchantId(xMerchantId).Execute()

Create a new theme

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
	themeInput := *openapiclient.NewThemeInput("theme_dark", "Dark Theme", map[string]interface{}({primaryColor=#1a1a2e, secondaryColor=#16213e, fontFamily=Inter})) // ThemeInput | 
	xMerchantId := "merchant_123" // string | Merchant identifier for multi-tenant isolation (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.CreateTheme(context.Background()).ThemeInput(themeInput).XMerchantId(xMerchantId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.CreateTheme``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTheme`: CreateTheme201Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.CreateTheme`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateThemeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **themeInput** | [**ThemeInput**](ThemeInput.md) |  | 
 **xMerchantId** | **string** | Merchant identifier for multi-tenant isolation | 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTheme

> DeleteTheme200Response DeleteTheme(ctx, id).Execute()

Delete a theme

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
	id := "theme_dark" // string | Theme identifier

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.DeleteTheme(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.DeleteTheme``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteTheme`: DeleteTheme200Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.DeleteTheme`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Theme identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteThemeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteTheme200Response**](DeleteTheme200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetThemeById

> CreateTheme201Response GetThemeById(ctx, id).Execute()

Get theme by ID

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
	id := "theme_dark" // string | Theme identifier

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.GetThemeById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.GetThemeById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetThemeById`: CreateTheme201Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.GetThemeById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Theme identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetThemeByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetThemes

> GetThemes200Response GetThemes(ctx).XMerchantId(xMerchantId).Execute()

List themes for merchant

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
	xMerchantId := "merchant_123" // string | Merchant identifier for multi-tenant isolation (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.GetThemes(context.Background()).XMerchantId(xMerchantId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.GetThemes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetThemes`: GetThemes200Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.GetThemes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetThemesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMerchantId** | **string** | Merchant identifier for multi-tenant isolation | 

### Return type

[**GetThemes200Response**](GetThemes200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTheme

> CreateTheme201Response UpdateTheme(ctx, id).ThemeUpdateInput(themeUpdateInput).Execute()

Update a theme

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
	id := "theme_dark" // string | Theme identifier
	themeUpdateInput := *openapiclient.NewThemeUpdateInput() // ThemeUpdateInput | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ThemesAPI.UpdateTheme(context.Background(), id).ThemeUpdateInput(themeUpdateInput).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThemesAPI.UpdateTheme``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTheme`: CreateTheme201Response
	fmt.Fprintf(os.Stdout, "Response from `ThemesAPI.UpdateTheme`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Theme identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateThemeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **themeUpdateInput** | [**ThemeUpdateInput**](ThemeUpdateInput.md) |  | 

### Return type

[**CreateTheme201Response**](CreateTheme201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

