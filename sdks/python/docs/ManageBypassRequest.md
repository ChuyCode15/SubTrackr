# ManageBypassRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**value** | **str** |  | 
**action** | **str** |  | 

## Example

```python
from subtrackr_sdk.models.manage_bypass_request import ManageBypassRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ManageBypassRequest from a JSON string
manage_bypass_request_instance = ManageBypassRequest.from_json(json)
# print the JSON string representation of the object
print(ManageBypassRequest.to_json())

# convert the object into a dict
manage_bypass_request_dict = manage_bypass_request_instance.to_dict()
# create an instance of ManageBypassRequest from a dict
manage_bypass_request_from_dict = ManageBypassRequest.from_dict(manage_bypass_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


