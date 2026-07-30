# SetCustomRateLimits200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**SetCustomRateLimits200ResponseData**](SetCustomRateLimits200ResponseData.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.set_custom_rate_limits200_response import SetCustomRateLimits200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SetCustomRateLimits200Response from a JSON string
set_custom_rate_limits200_response_instance = SetCustomRateLimits200Response.from_json(json)
# print the JSON string representation of the object
print(SetCustomRateLimits200Response.to_json())

# convert the object into a dict
set_custom_rate_limits200_response_dict = set_custom_rate_limits200_response_instance.to_dict()
# create an instance of SetCustomRateLimits200Response from a dict
set_custom_rate_limits200_response_from_dict = SetCustomRateLimits200Response.from_dict(set_custom_rate_limits200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


