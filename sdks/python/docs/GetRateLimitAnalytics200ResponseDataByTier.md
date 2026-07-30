# GetRateLimitAnalytics200ResponseDataByTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free** | [**GetRateLimitAnalytics200ResponseDataByTierFREE**](GetRateLimitAnalytics200ResponseDataByTierFREE.md) |  | [optional] 
**basic** | [**GetRateLimitAnalytics200ResponseDataByTierFREE**](GetRateLimitAnalytics200ResponseDataByTierFREE.md) |  | [optional] 
**premium** | [**GetRateLimitAnalytics200ResponseDataByTierFREE**](GetRateLimitAnalytics200ResponseDataByTierFREE.md) |  | [optional] 
**enterprise** | [**GetRateLimitAnalytics200ResponseDataByTierFREE**](GetRateLimitAnalytics200ResponseDataByTierFREE.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_analytics200_response_data_by_tier import GetRateLimitAnalytics200ResponseDataByTier

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitAnalytics200ResponseDataByTier from a JSON string
get_rate_limit_analytics200_response_data_by_tier_instance = GetRateLimitAnalytics200ResponseDataByTier.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitAnalytics200ResponseDataByTier.to_json())

# convert the object into a dict
get_rate_limit_analytics200_response_data_by_tier_dict = get_rate_limit_analytics200_response_data_by_tier_instance.to_dict()
# create an instance of GetRateLimitAnalytics200ResponseDataByTier from a dict
get_rate_limit_analytics200_response_data_by_tier_from_dict = GetRateLimitAnalytics200ResponseDataByTier.from_dict(get_rate_limit_analytics200_response_data_by_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


