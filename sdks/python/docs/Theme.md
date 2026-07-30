# Theme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**merchant_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**config** | **object** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.theme import Theme

# TODO update the JSON string below
json = "{}"
# create an instance of Theme from a JSON string
theme_instance = Theme.from_json(json)
# print the JSON string representation of the object
print(Theme.to_json())

# convert the object into a dict
theme_dict = theme_instance.to_dict()
# create an instance of Theme from a dict
theme_from_dict = Theme.from_dict(theme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


