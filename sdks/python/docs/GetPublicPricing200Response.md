# GetPublicPricing200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**List[PricingTier]**](PricingTier.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_public_pricing200_response import GetPublicPricing200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublicPricing200Response from a JSON string
get_public_pricing200_response_instance = GetPublicPricing200Response.from_json(json)
# print the JSON string representation of the object
print(GetPublicPricing200Response.to_json())

# convert the object into a dict
get_public_pricing200_response_dict = get_public_pricing200_response_instance.to_dict()
# create an instance of GetPublicPricing200Response from a dict
get_public_pricing200_response_from_dict = GetPublicPricing200Response.from_dict(get_public_pricing200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


