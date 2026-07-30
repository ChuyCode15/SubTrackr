# GetFeatures200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**List[Feature]**](Feature.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_features200_response import GetFeatures200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetFeatures200Response from a JSON string
get_features200_response_instance = GetFeatures200Response.from_json(json)
# print the JSON string representation of the object
print(GetFeatures200Response.to_json())

# convert the object into a dict
get_features200_response_dict = get_features200_response_instance.to_dict()
# create an instance of GetFeatures200Response from a dict
get_features200_response_from_dict = GetFeatures200Response.from_dict(get_features200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


