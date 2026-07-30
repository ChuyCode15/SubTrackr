# ThemesApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateTheme**](#activatetheme) | **POST** /themes/{id}/activate | Activate a theme|
|[**createTheme**](#createtheme) | **POST** /themes | Create a new theme|
|[**deleteTheme**](#deletetheme) | **DELETE** /themes/{id} | Delete a theme|
|[**getThemeById**](#getthemebyid) | **GET** /themes/{id} | Get theme by ID|
|[**getThemes**](#getthemes) | **GET** /themes | List themes for merchant|
|[**updateTheme**](#updatetheme) | **PATCH** /themes/{id} | Update a theme|

# **activateTheme**
> CreateTheme201Response activateTheme()


### Example

```typescript
import {
    ThemesApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let id: string; //Theme identifier (default to undefined)
let xMerchantId: string; //Merchant identifier for multi-tenant isolation (optional) (default to undefined)

const { status, data } = await apiInstance.activateTheme(
    id,
    xMerchantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Theme identifier | defaults to undefined|
| **xMerchantId** | [**string**] | Merchant identifier for multi-tenant isolation | (optional) defaults to undefined|


### Return type

**CreateTheme201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme activated successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTheme**
> CreateTheme201Response createTheme(themeInput)


### Example

```typescript
import {
    ThemesApi,
    Configuration,
    ThemeInput
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let themeInput: ThemeInput; //
let xMerchantId: string; //Merchant identifier for multi-tenant isolation (optional) (default to undefined)

const { status, data } = await apiInstance.createTheme(
    themeInput,
    xMerchantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **themeInput** | **ThemeInput**|  | |
| **xMerchantId** | [**string**] | Merchant identifier for multi-tenant isolation | (optional) defaults to undefined|


### Return type

**CreateTheme201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Theme created successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTheme**
> DeleteTheme200Response deleteTheme()


### Example

```typescript
import {
    ThemesApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let id: string; //Theme identifier (default to undefined)

const { status, data } = await apiInstance.deleteTheme(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Theme identifier | defaults to undefined|


### Return type

**DeleteTheme200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme deleted successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getThemeById**
> CreateTheme201Response getThemeById()


### Example

```typescript
import {
    ThemesApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let id: string; //Theme identifier (default to undefined)

const { status, data } = await apiInstance.getThemeById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Theme identifier | defaults to undefined|


### Return type

**CreateTheme201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme found |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getThemes**
> GetThemes200Response getThemes()


### Example

```typescript
import {
    ThemesApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let xMerchantId: string; //Merchant identifier for multi-tenant isolation (optional) (default to undefined)

const { status, data } = await apiInstance.getThemes(
    xMerchantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xMerchantId** | [**string**] | Merchant identifier for multi-tenant isolation | (optional) defaults to undefined|


### Return type

**GetThemes200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of themes |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTheme**
> CreateTheme201Response updateTheme(themeUpdateInput)


### Example

```typescript
import {
    ThemesApi,
    Configuration,
    ThemeUpdateInput
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new ThemesApi(configuration);

let id: string; //Theme identifier (default to undefined)
let themeUpdateInput: ThemeUpdateInput; //

const { status, data } = await apiInstance.updateTheme(
    id,
    themeUpdateInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **themeUpdateInput** | **ThemeUpdateInput**|  | |
| **id** | [**string**] | Theme identifier | defaults to undefined|


### Return type

**CreateTheme201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme updated successfully |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

