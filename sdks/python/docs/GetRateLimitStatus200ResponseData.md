# GetRateLimitStatus200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**GetRateLimitStatus200ResponseDataLimits**](GetRateLimitStatus200ResponseDataLimits.md) |  | [optional] 
**current** | [**GetRateLimitStatus200ResponseDataCurrent**](GetRateLimitStatus200ResponseDataCurrent.md) |  | [optional] 
**remaining** | [**GetRateLimitStatus200ResponseDataCurrent**](GetRateLimitStatus200ResponseDataCurrent.md) |  | [optional] 
**reset_at** | [**GetRateLimitStatus200ResponseDataResetAt**](GetRateLimitStatus200ResponseDataResetAt.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_status200_response_data import GetRateLimitStatus200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitStatus200ResponseData from a JSON string
get_rate_limit_status200_response_data_instance = GetRateLimitStatus200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitStatus200ResponseData.to_json())

# convert the object into a dict
get_rate_limit_status200_response_data_dict = get_rate_limit_status200_response_data_instance.to_dict()
# create an instance of GetRateLimitStatus200ResponseData from a dict
get_rate_limit_status200_response_data_from_dict = GetRateLimitStatus200ResponseData.from_dict(get_rate_limit_status200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


