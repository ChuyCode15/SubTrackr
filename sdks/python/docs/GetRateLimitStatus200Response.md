# GetRateLimitStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetRateLimitStatus200ResponseData**](GetRateLimitStatus200ResponseData.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_status200_response import GetRateLimitStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitStatus200Response from a JSON string
get_rate_limit_status200_response_instance = GetRateLimitStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitStatus200Response.to_json())

# convert the object into a dict
get_rate_limit_status200_response_dict = get_rate_limit_status200_response_instance.to_dict()
# create an instance of GetRateLimitStatus200Response from a dict
get_rate_limit_status200_response_from_dict = GetRateLimitStatus200Response.from_dict(get_rate_limit_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


