# GetRateLimitAnalytics200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_requests** | **int** |  | [optional] 
**rate_limit_hits** | **int** |  | [optional] 
**hit_rate** | **float** |  | [optional] 
**top_throttled_keys** | [**List[GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner]**](GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner.md) |  | [optional] 
**top_throttled_endpoints** | [**List[GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner]**](GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner.md) |  | [optional] 
**by_tier** | [**GetRateLimitAnalytics200ResponseDataByTier**](GetRateLimitAnalytics200ResponseDataByTier.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_analytics200_response_data import GetRateLimitAnalytics200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitAnalytics200ResponseData from a JSON string
get_rate_limit_analytics200_response_data_instance = GetRateLimitAnalytics200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitAnalytics200ResponseData.to_json())

# convert the object into a dict
get_rate_limit_analytics200_response_data_dict = get_rate_limit_analytics200_response_data_instance.to_dict()
# create an instance of GetRateLimitAnalytics200ResponseData from a dict
get_rate_limit_analytics200_response_data_from_dict = GetRateLimitAnalytics200ResponseData.from_dict(get_rate_limit_analytics200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


