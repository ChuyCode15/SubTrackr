# PlanInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**price** | **float** |  | 
**currency** | **str** |  | 
**billing_cycle** | **str** |  | 
**features** | **List[str]** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.plan_input import PlanInput

# TODO update the JSON string below
json = "{}"
# create an instance of PlanInput from a JSON string
plan_input_instance = PlanInput.from_json(json)
# print the JSON string representation of the object
print(PlanInput.to_json())

# convert the object into a dict
plan_input_dict = plan_input_instance.to_dict()
# create an instance of PlanInput from a dict
plan_input_from_dict = PlanInput.from_dict(plan_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


