# GraphqlQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | [optional] 
**variables** | **object** |  | [optional] 

## Example

```python
from subtrackr_sdk.models.graphql_query_request import GraphqlQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GraphqlQueryRequest from a JSON string
graphql_query_request_instance = GraphqlQueryRequest.from_json(json)
# print the JSON string representation of the object
print(GraphqlQueryRequest.to_json())

# convert the object into a dict
graphql_query_request_dict = graphql_query_request_instance.to_dict()
# create an instance of GraphqlQueryRequest from a dict
graphql_query_request_from_dict = GraphqlQueryRequest.from_dict(graphql_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


