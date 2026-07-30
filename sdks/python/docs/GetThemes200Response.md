# GetThemes200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**List[Theme]**](Theme.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_themes200_response import GetThemes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetThemes200Response from a JSON string
get_themes200_response_instance = GetThemes200Response.from_json(json)
# print the JSON string representation of the object
print(GetThemes200Response.to_json())

# convert the object into a dict
get_themes200_response_dict = get_themes200_response_instance.to_dict()
# create an instance of GetThemes200Response from a dict
get_themes200_response_from_dict = GetThemes200Response.from_dict(get_themes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


