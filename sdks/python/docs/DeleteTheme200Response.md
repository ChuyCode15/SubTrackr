# DeleteTheme200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**DeleteTheme200ResponseData**](DeleteTheme200ResponseData.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.delete_theme200_response import DeleteTheme200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTheme200Response from a JSON string
delete_theme200_response_instance = DeleteTheme200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteTheme200Response.to_json())

# convert the object into a dict
delete_theme200_response_dict = delete_theme200_response_instance.to_dict()
# create an instance of DeleteTheme200Response from a dict
delete_theme200_response_from_dict = DeleteTheme200Response.from_dict(delete_theme200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


