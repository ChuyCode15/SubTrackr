# GetRateLimitStatus200ResponseDataLimits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hourly_limit** | **int** |  | [optional] 
**daily_limit** | **int** |  | [optional] 
**monthly_limit** | **int** |  | [optional] 
**burst_limit** | **int** |  | [optional] 
**concurrent_limit** | **int** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_status200_response_data_limits import GetRateLimitStatus200ResponseDataLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitStatus200ResponseDataLimits from a JSON string
get_rate_limit_status200_response_data_limits_instance = GetRateLimitStatus200ResponseDataLimits.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitStatus200ResponseDataLimits.to_json())

# convert the object into a dict
get_rate_limit_status200_response_data_limits_dict = get_rate_limit_status200_response_data_limits_instance.to_dict()
# create an instance of GetRateLimitStatus200ResponseDataLimits from a dict
get_rate_limit_status200_response_data_limits_from_dict = GetRateLimitStatus200ResponseDataLimits.from_dict(get_rate_limit_status200_response_data_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


