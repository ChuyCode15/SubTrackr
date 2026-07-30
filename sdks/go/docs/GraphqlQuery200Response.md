# GraphqlQuery200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to **map[string]interface{}** |  | [optional] 
**Errors** | Pointer to [**[]GraphqlQuery200ResponseErrorsInner**](GraphqlQuery200ResponseErrorsInner.md) |  | [optional] 

## Methods

### NewGraphqlQuery200Response

`func NewGraphqlQuery200Response() *GraphqlQuery200Response`

NewGraphqlQuery200Response instantiates a new GraphqlQuery200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphqlQuery200ResponseWithDefaults

`func NewGraphqlQuery200ResponseWithDefaults() *GraphqlQuery200Response`

NewGraphqlQuery200ResponseWithDefaults instantiates a new GraphqlQuery200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *GraphqlQuery200Response) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GraphqlQuery200Response) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GraphqlQuery200Response) SetData(v map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *GraphqlQuery200Response) HasData() bool`

HasData returns a boolean if a field has been set.

### GetErrors

`func (o *GraphqlQuery200Response) GetErrors() []GraphqlQuery200ResponseErrorsInner`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *GraphqlQuery200Response) GetErrorsOk() (*[]GraphqlQuery200ResponseErrorsInner, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *GraphqlQuery200Response) SetErrors(v []GraphqlQuery200ResponseErrorsInner)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *GraphqlQuery200Response) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


