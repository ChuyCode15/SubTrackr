# GetRateLimitAnalytics200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalRequests** | **number** |  | [optional] [default to undefined]
**rateLimitHits** | **number** |  | [optional] [default to undefined]
**hitRate** | **number** |  | [optional] [default to undefined]
**topThrottledKeys** | [**Array&lt;GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner&gt;**](GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner.md) |  | [optional] [default to undefined]
**topThrottledEndpoints** | [**Array&lt;GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner&gt;**](GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner.md) |  | [optional] [default to undefined]
**byTier** | [**GetRateLimitAnalytics200ResponseDataByTier**](GetRateLimitAnalytics200ResponseDataByTier.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetRateLimitAnalytics200ResponseData } from '@subtrackr/sdk';

const instance: GetRateLimitAnalytics200ResponseData = {
    totalRequests,
    rateLimitHits,
    hitRate,
    topThrottledKeys,
    topThrottledEndpoints,
    byTier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
