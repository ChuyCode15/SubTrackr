# GetRateLimitAnalytics200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetRateLimitAnalytics200ResponseData**](GetRateLimitAnalytics200ResponseData.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_rate_limit_analytics200_response import GetRateLimitAnalytics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitAnalytics200Response from a JSON string
get_rate_limit_analytics200_response_instance = GetRateLimitAnalytics200Response.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitAnalytics200Response.to_json())

# convert the object into a dict
get_rate_limit_analytics200_response_dict = get_rate_limit_analytics200_response_instance.to_dict()
# create an instance of GetRateLimitAnalytics200Response from a dict
get_rate_limit_analytics200_response_from_dict = GetRateLimitAnalytics200Response.from_dict(get_rate_limit_analytics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


