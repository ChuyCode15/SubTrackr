# PricingUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_price** | **float** |  | [optional] 
**yearly_price** | **float** |  | [optional] 
**discount_percent** | **float** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.pricing_update_input import PricingUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of PricingUpdateInput from a JSON string
pricing_update_input_instance = PricingUpdateInput.from_json(json)
# print the JSON string representation of the object
print(PricingUpdateInput.to_json())

# convert the object into a dict
pricing_update_input_dict = pricing_update_input_instance.to_dict()
# create an instance of PricingUpdateInput from a dict
pricing_update_input_from_dict = PricingUpdateInput.from_dict(pricing_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


