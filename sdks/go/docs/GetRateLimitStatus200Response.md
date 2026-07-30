# GetRateLimitStatus200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**GetRateLimitStatus200ResponseData**](GetRateLimitStatus200ResponseData.md) |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 

## Methods

### NewGetRateLimitStatus200Response

`func NewGetRateLimitStatus200Response() *GetRateLimitStatus200Response`

NewGetRateLimitStatus200Response instantiates a new GetRateLimitStatus200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRateLimitStatus200ResponseWithDefaults

`func NewGetRateLimitStatus200ResponseWithDefaults() *GetRateLimitStatus200Response`

NewGetRateLimitStatus200ResponseWithDefaults instantiates a new GetRateLimitStatus200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *GetRateLimitStatus200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *GetRateLimitStatus200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *GetRateLimitStatus200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *GetRateLimitStatus200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *GetRateLimitStatus200Response) GetData() GetRateLimitStatus200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetRateLimitStatus200Response) GetDataOk() (*GetRateLimitStatus200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetRateLimitStatus200Response) SetData(v GetRateLimitStatus200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *GetRateLimitStatus200Response) HasData() bool`

HasData returns a boolean if a field has been set.

### GetRequestId

`func (o *GetRateLimitStatus200Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *GetRateLimitStatus200Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *GetRateLimitStatus200Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *GetRateLimitStatus200Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


