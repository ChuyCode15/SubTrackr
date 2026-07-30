# PurgeUserCache200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.purge_user_cache200_response import PurgeUserCache200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PurgeUserCache200Response from a JSON string
purge_user_cache200_response_instance = PurgeUserCache200Response.from_json(json)
# print the JSON string representation of the object
print(PurgeUserCache200Response.to_json())

# convert the object into a dict
purge_user_cache200_response_dict = purge_user_cache200_response_instance.to_dict()
# create an instance of PurgeUserCache200Response from a dict
purge_user_cache200_response_from_dict = PurgeUserCache200Response.from_dict(purge_user_cache200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


