# PlansApi

All URIs are relative to *https://api.subtrackr.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPlan**](#createplan) | **POST** /plans | Create a new subscription plan|
|[**deactivatePlan**](#deactivateplan) | **DELETE** /plans/{id} | Deactivate a plan|
|[**getPlanById**](#getplanbyid) | **GET** /plans/{id} | Get a plan by ID|
|[**listPlans**](#listplans) | **GET** /plans | List all subscription plans|
|[**updatePlan**](#updateplan) | **PATCH** /plans/{id} | Update a plan|

# **createPlan**
> CreatePlan201Response createPlan(planInput)


### Example

```typescript
import {
    PlansApi,
    Configuration,
    PlanInput
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let planInput: PlanInput; //

const { status, data } = await apiInstance.createPlan(
    planInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planInput** | **PlanInput**|  | |


### Return type

**CreatePlan201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Plan created successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivatePlan**
> CreatePlan201Response deactivatePlan()


### Example

```typescript
import {
    PlansApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let id: string; //Plan identifier (default to undefined)

const { status, data } = await apiInstance.deactivatePlan(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Plan identifier | defaults to undefined|


### Return type

**CreatePlan201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan deactivated successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlanById**
> CreatePlan201Response getPlanById()


### Example

```typescript
import {
    PlansApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let id: string; //Plan identifier (default to undefined)

const { status, data } = await apiInstance.getPlanById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Plan identifier | defaults to undefined|


### Return type

**CreatePlan201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan found |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPlans**
> ListPlans200Response listPlans()


### Example

```typescript
import {
    PlansApi,
    Configuration
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

const { status, data } = await apiInstance.listPlans();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListPlans200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of plans |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePlan**
> CreatePlan201Response updatePlan(planUpdateInput)


### Example

```typescript
import {
    PlansApi,
    Configuration,
    PlanUpdateInput
} from '@subtrackr/sdk';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let id: string; //Plan identifier (default to undefined)
let planUpdateInput: PlanUpdateInput; //

const { status, data } = await apiInstance.updatePlan(
    id,
    planUpdateInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planUpdateInput** | **PlanUpdateInput**|  | |
| **id** | [**string**] | Plan identifier | defaults to undefined|


### Return type

**CreatePlan201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan updated successfully |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

