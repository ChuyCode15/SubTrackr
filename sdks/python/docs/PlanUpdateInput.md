# PlanUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 
**billing_cycle** | **str** |  | [optional] 
**features** | **List[str]** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.plan_update_input import PlanUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUpdateInput from a JSON string
plan_update_input_instance = PlanUpdateInput.from_json(json)
# print the JSON string representation of the object
print(PlanUpdateInput.to_json())

# convert the object into a dict
plan_update_input_dict = plan_update_input_instance.to_dict()
# create an instance of PlanUpdateInput from a dict
plan_update_input_from_dict = PlanUpdateInput.from_dict(plan_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


