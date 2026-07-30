# GetPublicPricing200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**[]PricingTier**](PricingTier.md) |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 

## Methods

### NewGetPublicPricing200Response

`func NewGetPublicPricing200Response() *GetPublicPricing200Response`

NewGetPublicPricing200Response instantiates a new GetPublicPricing200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPublicPricing200ResponseWithDefaults

`func NewGetPublicPricing200ResponseWithDefaults() *GetPublicPricing200Response`

NewGetPublicPricing200ResponseWithDefaults instantiates a new GetPublicPricing200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *GetPublicPricing200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *GetPublicPricing200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *GetPublicPricing200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *GetPublicPricing200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *GetPublicPricing200Response) GetData() []PricingTier`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetPublicPricing200Response) GetDataOk() (*[]PricingTier, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetPublicPricing200Response) SetData(v []PricingTier)`

SetData sets Data field to given value.

### HasData

`func (o *GetPublicPricing200Response) HasData() bool`

HasData returns a boolean if a field has been set.

### GetRequestId

`func (o *GetPublicPricing200Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *GetPublicPricing200Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *GetPublicPricing200Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *GetPublicPricing200Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


