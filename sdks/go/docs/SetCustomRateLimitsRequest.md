# SetCustomRateLimitsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | **string** |  | 
**Limits** | Pointer to [**SetCustomRateLimitsRequestLimits**](SetCustomRateLimitsRequestLimits.md) |  | [optional] 

## Methods

### NewSetCustomRateLimitsRequest

`func NewSetCustomRateLimitsRequest(apiKey string, ) *SetCustomRateLimitsRequest`

NewSetCustomRateLimitsRequest instantiates a new SetCustomRateLimitsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetCustomRateLimitsRequestWithDefaults

`func NewSetCustomRateLimitsRequestWithDefaults() *SetCustomRateLimitsRequest`

NewSetCustomRateLimitsRequestWithDefaults instantiates a new SetCustomRateLimitsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *SetCustomRateLimitsRequest) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *SetCustomRateLimitsRequest) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *SetCustomRateLimitsRequest) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.


### GetLimits

`func (o *SetCustomRateLimitsRequest) GetLimits() SetCustomRateLimitsRequestLimits`

GetLimits returns the Limits field if non-nil, zero value otherwise.

### GetLimitsOk

`func (o *SetCustomRateLimitsRequest) GetLimitsOk() (*SetCustomRateLimitsRequestLimits, bool)`

GetLimitsOk returns a tuple with the Limits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimits

`func (o *SetCustomRateLimitsRequest) SetLimits(v SetCustomRateLimitsRequestLimits)`

SetLimits sets Limits field to given value.

### HasLimits

`func (o *SetCustomRateLimitsRequest) HasLimits() bool`

HasLimits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


