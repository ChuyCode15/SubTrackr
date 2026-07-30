# ThemeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**config** | **object** |  | 

## Example

```python
from subtrackr_sdk.models.theme_input import ThemeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ThemeInput from a JSON string
theme_input_instance = ThemeInput.from_json(json)
# print the JSON string representation of the object
print(ThemeInput.to_json())

# convert the object into a dict
theme_input_dict = theme_input_instance.to_dict()
# create an instance of ThemeInput from a dict
theme_input_from_dict = ThemeInput.from_dict(theme_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


