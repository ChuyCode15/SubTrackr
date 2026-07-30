# CreateTheme201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**Theme**](Theme.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.create_theme201_response import CreateTheme201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTheme201Response from a JSON string
create_theme201_response_instance = CreateTheme201Response.from_json(json)
# print the JSON string representation of the object
print(CreateTheme201Response.to_json())

# convert the object into a dict
create_theme201_response_dict = create_theme201_response_instance.to_dict()
# create an instance of CreateTheme201Response from a dict
create_theme201_response_from_dict = CreateTheme201Response.from_dict(create_theme201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


