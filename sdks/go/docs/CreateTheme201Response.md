# CreateTheme201Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**Theme**](Theme.md) |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateTheme201Response

`func NewCreateTheme201Response() *CreateTheme201Response`

NewCreateTheme201Response instantiates a new CreateTheme201Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTheme201ResponseWithDefaults

`func NewCreateTheme201ResponseWithDefaults() *CreateTheme201Response`

NewCreateTheme201ResponseWithDefaults instantiates a new CreateTheme201Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *CreateTheme201Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *CreateTheme201Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *CreateTheme201Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *CreateTheme201Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *CreateTheme201Response) GetData() Theme`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CreateTheme201Response) GetDataOk() (*Theme, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CreateTheme201Response) SetData(v Theme)`

SetData sets Data field to given value.

### HasData

`func (o *CreateTheme201Response) HasData() bool`

HasData returns a boolean if a field has been set.

### GetRequestId

`func (o *CreateTheme201Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *CreateTheme201Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *CreateTheme201Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *CreateTheme201Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


