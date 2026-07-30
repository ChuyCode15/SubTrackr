# SetCustomRateLimitsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** |  | 
**limits** | [**SetCustomRateLimitsRequestLimits**](SetCustomRateLimitsRequestLimits.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.set_custom_rate_limits_request import SetCustomRateLimitsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetCustomRateLimitsRequest from a JSON string
set_custom_rate_limits_request_instance = SetCustomRateLimitsRequest.from_json(json)
# print the JSON string representation of the object
print(SetCustomRateLimitsRequest.to_json())

# convert the object into a dict
set_custom_rate_limits_request_dict = set_custom_rate_limits_request_instance.to_dict()
# create an instance of SetCustomRateLimitsRequest from a dict
set_custom_rate_limits_request_from_dict = SetCustomRateLimitsRequest.from_dict(set_custom_rate_limits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


