# SetCustomRateLimitsRequestLimits


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
from subtrackr_sdk.models.set_custom_rate_limits_request_limits import SetCustomRateLimitsRequestLimits

# TODO update the JSON string below
json = "{}"
# create an instance of SetCustomRateLimitsRequestLimits from a JSON string
set_custom_rate_limits_request_limits_instance = SetCustomRateLimitsRequestLimits.from_json(json)
# print the JSON string representation of the object
print(SetCustomRateLimitsRequestLimits.to_json())

# convert the object into a dict
set_custom_rate_limits_request_limits_dict = set_custom_rate_limits_request_limits_instance.to_dict()
# create an instance of SetCustomRateLimitsRequestLimits from a dict
set_custom_rate_limits_request_limits_from_dict = SetCustomRateLimitsRequestLimits.from_dict(set_custom_rate_limits_request_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


