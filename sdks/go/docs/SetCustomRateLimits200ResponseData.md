# SetCustomRateLimits200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | Pointer to **string** |  | [optional] 
**Limits** | Pointer to [**GetRateLimitStatus200ResponseDataLimits**](GetRateLimitStatus200ResponseDataLimits.md) |  | [optional] 

## Methods

### NewSetCustomRateLimits200ResponseData

`func NewSetCustomRateLimits200ResponseData() *SetCustomRateLimits200ResponseData`

NewSetCustomRateLimits200ResponseData instantiates a new SetCustomRateLimits200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetCustomRateLimits200ResponseDataWithDefaults

`func NewSetCustomRateLimits200ResponseDataWithDefaults() *SetCustomRateLimits200ResponseData`

NewSetCustomRateLimits200ResponseDataWithDefaults instantiates a new SetCustomRateLimits200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *SetCustomRateLimits200ResponseData) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *SetCustomRateLimits200ResponseData) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *SetCustomRateLimits200ResponseData) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *SetCustomRateLimits200ResponseData) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetLimits

`func (o *SetCustomRateLimits200ResponseData) GetLimits() GetRateLimitStatus200ResponseDataLimits`

GetLimits returns the Limits field if non-nil, zero value otherwise.

### GetLimitsOk

`func (o *SetCustomRateLimits200ResponseData) GetLimitsOk() (*GetRateLimitStatus200ResponseDataLimits, bool)`

GetLimitsOk returns a tuple with the Limits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimits

`func (o *SetCustomRateLimits200ResponseData) SetLimits(v GetRateLimitStatus200ResponseDataLimits)`

SetLimits sets Limits field to given value.

### HasLimits

`func (o *SetCustomRateLimits200ResponseData) HasLimits() bool`

HasLimits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


