# PricingTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **str** |  | [optional] 
**monthly_price** | **float** |  | [optional] 
**yearly_price** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 
**discount_percent** | **float** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.pricing_tier import PricingTier

# TODO update the JSON string below
json = "{}"
# create an instance of PricingTier from a JSON string
pricing_tier_instance = PricingTier.from_json(json)
# print the JSON string representation of the object
print(PricingTier.to_json())

# convert the object into a dict
pricing_tier_dict = pricing_tier_instance.to_dict()
# create an instance of PricingTier from a dict
pricing_tier_from_dict = PricingTier.from_dict(pricing_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


