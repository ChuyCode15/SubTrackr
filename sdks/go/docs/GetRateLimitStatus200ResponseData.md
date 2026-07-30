# GetRateLimitStatus200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Limits** | Pointer to [**GetRateLimitStatus200ResponseDataLimits**](GetRateLimitStatus200ResponseDataLimits.md) |  | [optional] 
**Current** | Pointer to [**GetRateLimitStatus200ResponseDataCurrent**](GetRateLimitStatus200ResponseDataCurrent.md) |  | [optional] 
**Remaining** | Pointer to [**GetRateLimitStatus200ResponseDataCurrent**](GetRateLimitStatus200ResponseDataCurrent.md) |  | [optional] 
**ResetAt** | Pointer to [**GetRateLimitStatus200ResponseDataResetAt**](GetRateLimitStatus200ResponseDataResetAt.md) |  | [optional] 

## Methods

### NewGetRateLimitStatus200ResponseData

`func NewGetRateLimitStatus200ResponseData() *GetRateLimitStatus200ResponseData`

NewGetRateLimitStatus200ResponseData instantiates a new GetRateLimitStatus200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRateLimitStatus200ResponseDataWithDefaults

`func NewGetRateLimitStatus200ResponseDataWithDefaults() *GetRateLimitStatus200ResponseData`

NewGetRateLimitStatus200ResponseDataWithDefaults instantiates a new GetRateLimitStatus200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLimits

`func (o *GetRateLimitStatus200ResponseData) GetLimits() GetRateLimitStatus200ResponseDataLimits`

GetLimits returns the Limits field if non-nil, zero value otherwise.

### GetLimitsOk

`func (o *GetRateLimitStatus200ResponseData) GetLimitsOk() (*GetRateLimitStatus200ResponseDataLimits, bool)`

GetLimitsOk returns a tuple with the Limits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimits

`func (o *GetRateLimitStatus200ResponseData) SetLimits(v GetRateLimitStatus200ResponseDataLimits)`

SetLimits sets Limits field to given value.

### HasLimits

`func (o *GetRateLimitStatus200ResponseData) HasLimits() bool`

HasLimits returns a boolean if a field has been set.

### GetCurrent

`func (o *GetRateLimitStatus200ResponseData) GetCurrent() GetRateLimitStatus200ResponseDataCurrent`

GetCurrent returns the Current field if non-nil, zero value otherwise.

### GetCurrentOk

`func (o *GetRateLimitStatus200ResponseData) GetCurrentOk() (*GetRateLimitStatus200ResponseDataCurrent, bool)`

GetCurrentOk returns a tuple with the Current field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrent

`func (o *GetRateLimitStatus200ResponseData) SetCurrent(v GetRateLimitStatus200ResponseDataCurrent)`

SetCurrent sets Current field to given value.

### HasCurrent

`func (o *GetRateLimitStatus200ResponseData) HasCurrent() bool`

HasCurrent returns a boolean if a field has been set.

### GetRemaining

`func (o *GetRateLimitStatus200ResponseData) GetRemaining() GetRateLimitStatus200ResponseDataCurrent`

GetRemaining returns the Remaining field if non-nil, zero value otherwise.

### GetRemainingOk

`func (o *GetRateLimitStatus200ResponseData) GetRemainingOk() (*GetRateLimitStatus200ResponseDataCurrent, bool)`

GetRemainingOk returns a tuple with the Remaining field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemaining

`func (o *GetRateLimitStatus200ResponseData) SetRemaining(v GetRateLimitStatus200ResponseDataCurrent)`

SetRemaining sets Remaining field to given value.

### HasRemaining

`func (o *GetRateLimitStatus200ResponseData) HasRemaining() bool`

HasRemaining returns a boolean if a field has been set.

### GetResetAt

`func (o *GetRateLimitStatus200ResponseData) GetResetAt() GetRateLimitStatus200ResponseDataResetAt`

GetResetAt returns the ResetAt field if non-nil, zero value otherwise.

### GetResetAtOk

`func (o *GetRateLimitStatus200ResponseData) GetResetAtOk() (*GetRateLimitStatus200ResponseDataResetAt, bool)`

GetResetAtOk returns a tuple with the ResetAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResetAt

`func (o *GetRateLimitStatus200ResponseData) SetResetAt(v GetRateLimitStatus200ResponseDataResetAt)`

SetResetAt sets ResetAt field to given value.

### HasResetAt

`func (o *GetRateLimitStatus200ResponseData) HasResetAt() bool`

HasResetAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


