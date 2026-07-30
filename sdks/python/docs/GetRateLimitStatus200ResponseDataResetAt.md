# GetRateLimitStatus200ResponseDataResetAt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hourly** | **int** |  | [optional] 
**daily** | **int** |  | [optional] 
**monthly** | **int** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_status200_response_data_reset_at import GetRateLimitStatus200ResponseDataResetAt

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitStatus200ResponseDataResetAt from a JSON string
get_rate_limit_status200_response_data_reset_at_instance = GetRateLimitStatus200ResponseDataResetAt.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitStatus200ResponseDataResetAt.to_json())

# convert the object into a dict
get_rate_limit_status200_response_data_reset_at_dict = get_rate_limit_status200_response_data_reset_at_instance.to_dict()
# create an instance of GetRateLimitStatus200ResponseDataResetAt from a dict
get_rate_limit_status200_response_data_reset_at_from_dict = GetRateLimitStatus200ResponseDataResetAt.from_dict(get_rate_limit_status200_response_data_reset_at_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


