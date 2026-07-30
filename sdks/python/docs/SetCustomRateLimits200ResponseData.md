# SetCustomRateLimits200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** |  | [optional] 
**limits** | [**GetRateLimitStatus200ResponseDataLimits**](GetRateLimitStatus200ResponseDataLimits.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.set_custom_rate_limits200_response_data import SetCustomRateLimits200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SetCustomRateLimits200ResponseData from a JSON string
set_custom_rate_limits200_response_data_instance = SetCustomRateLimits200ResponseData.from_json(json)
# print the JSON string representation of the object
print(SetCustomRateLimits200ResponseData.to_json())

# convert the object into a dict
set_custom_rate_limits200_response_data_dict = set_custom_rate_limits200_response_data_instance.to_dict()
# create an instance of SetCustomRateLimits200ResponseData from a dict
set_custom_rate_limits200_response_data_from_dict = SetCustomRateLimits200ResponseData.from_dict(set_custom_rate_limits200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


