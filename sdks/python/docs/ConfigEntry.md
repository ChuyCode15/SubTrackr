# ConfigEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.config_entry import ConfigEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigEntry from a JSON string
config_entry_instance = ConfigEntry.from_json(json)
# print the JSON string representation of the object
print(ConfigEntry.to_json())

# convert the object into a dict
config_entry_dict = config_entry_instance.to_dict()
# create an instance of ConfigEntry from a dict
config_entry_from_dict = ConfigEntry.from_dict(config_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


