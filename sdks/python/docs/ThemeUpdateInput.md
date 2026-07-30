# ThemeUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**config** | **object** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.theme_update_input import ThemeUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of ThemeUpdateInput from a JSON string
theme_update_input_instance = ThemeUpdateInput.from_json(json)
# print the JSON string representation of the object
print(ThemeUpdateInput.to_json())

# convert the object into a dict
theme_update_input_dict = theme_update_input_instance.to_dict()
# create an instance of ThemeUpdateInput from a dict
theme_update_input_from_dict = ThemeUpdateInput.from_dict(theme_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


