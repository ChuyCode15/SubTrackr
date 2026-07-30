# GetPublicConfig200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.get_public_config200_response_data import GetPublicConfig200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublicConfig200ResponseData from a JSON string
get_public_config200_response_data_instance = GetPublicConfig200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetPublicConfig200ResponseData.to_json())

# convert the object into a dict
get_public_config200_response_data_dict = get_public_config200_response_data_instance.to_dict()
# create an instance of GetPublicConfig200ResponseData from a dict
get_public_config200_response_data_from_dict = GetPublicConfig200ResponseData.from_dict(get_public_config200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


