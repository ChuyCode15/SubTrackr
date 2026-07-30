# GetRateLimitStatus200ResponseDataCurrent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hourly** | **int** |  | [optional] 
**daily** | **int** |  | [optional] 
**monthly** | **int** |  | [optional] 
**burst_tokens** | **int** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_status200_response_data_current import GetRateLimitStatus200ResponseDataCurrent

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitStatus200ResponseDataCurrent from a JSON string
get_rate_limit_status200_response_data_current_instance = GetRateLimitStatus200ResponseDataCurrent.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitStatus200ResponseDataCurrent.to_json())

# convert the object into a dict
get_rate_limit_status200_response_data_current_dict = get_rate_limit_status200_response_data_current_instance.to_dict()
# create an instance of GetRateLimitStatus200ResponseDataCurrent from a dict
get_rate_limit_status200_response_data_current_from_dict = GetRateLimitStatus200ResponseDataCurrent.from_dict(get_rate_limit_status200_response_data_current_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


