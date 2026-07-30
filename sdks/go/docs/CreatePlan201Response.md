# CreatePlan201Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**Plan**](Plan.md) |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 

## Methods

### NewCreatePlan201Response

`func NewCreatePlan201Response() *CreatePlan201Response`

NewCreatePlan201Response instantiates a new CreatePlan201Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePlan201ResponseWithDefaults

`func NewCreatePlan201ResponseWithDefaults() *CreatePlan201Response`

NewCreatePlan201ResponseWithDefaults instantiates a new CreatePlan201Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *CreatePlan201Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *CreatePlan201Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *CreatePlan201Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *CreatePlan201Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *CreatePlan201Response) GetData() Plan`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CreatePlan201Response) GetDataOk() (*Plan, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CreatePlan201Response) SetData(v Plan)`

SetData sets Data field to given value.

### HasData

`func (o *CreatePlan201Response) HasData() bool`

HasData returns a boolean if a field has been set.

### GetRequestId

`func (o *CreatePlan201Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *CreatePlan201Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *CreatePlan201Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *CreatePlan201Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


