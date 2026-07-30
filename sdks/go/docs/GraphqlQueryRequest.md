# GraphqlQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** |  | [optional] 
**Variables** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewGraphqlQueryRequest

`func NewGraphqlQueryRequest() *GraphqlQueryRequest`

NewGraphqlQueryRequest instantiates a new GraphqlQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphqlQueryRequestWithDefaults

`func NewGraphqlQueryRequestWithDefaults() *GraphqlQueryRequest`

NewGraphqlQueryRequestWithDefaults instantiates a new GraphqlQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *GraphqlQueryRequest) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *GraphqlQueryRequest) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *GraphqlQueryRequest) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *GraphqlQueryRequest) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetVariables

`func (o *GraphqlQueryRequest) GetVariables() map[string]interface{}`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *GraphqlQueryRequest) GetVariablesOk() (*map[string]interface{}, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *GraphqlQueryRequest) SetVariables(v map[string]interface{})`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *GraphqlQueryRequest) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


