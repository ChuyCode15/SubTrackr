# GraphqlQuery200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | [optional] 
**errors** | [**List[GraphqlQuery200ResponseErrorsInner]**](GraphqlQuery200ResponseErrorsInner.md) |  | [optional] 

## Example

```python
from subtrackr_sdk.models.graphql_query200_response import GraphqlQuery200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GraphqlQuery200Response from a JSON string
graphql_query200_response_instance = GraphqlQuery200Response.from_json(json)
# print the JSON string representation of the object
print(GraphqlQuery200Response.to_json())

# convert the object into a dict
graphql_query200_response_dict = graphql_query200_response_instance.to_dict()
# create an instance of GraphqlQuery200Response from a dict
graphql_query200_response_from_dict = GraphqlQuery200Response.from_dict(graphql_query200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


