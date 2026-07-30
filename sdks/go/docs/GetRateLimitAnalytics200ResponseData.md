# GetRateLimitAnalytics200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalRequests** | Pointer to **int32** |  | [optional] 
**RateLimitHits** | Pointer to **int32** |  | [optional] 
**HitRate** | Pointer to **float32** |  | [optional] 
**TopThrottledKeys** | Pointer to [**[]GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner**](GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner.md) |  | [optional] 
**TopThrottledEndpoints** | Pointer to [**[]GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner**](GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner.md) |  | [optional] 
**ByTier** | Pointer to [**GetRateLimitAnalytics200ResponseDataByTier**](GetRateLimitAnalytics200ResponseDataByTier.md) |  | [optional] 

## Methods

### NewGetRateLimitAnalytics200ResponseData

`func NewGetRateLimitAnalytics200ResponseData() *GetRateLimitAnalytics200ResponseData`

NewGetRateLimitAnalytics200ResponseData instantiates a new GetRateLimitAnalytics200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRateLimitAnalytics200ResponseDataWithDefaults

`func NewGetRateLimitAnalytics200ResponseDataWithDefaults() *GetRateLimitAnalytics200ResponseData`

NewGetRateLimitAnalytics200ResponseDataWithDefaults instantiates a new GetRateLimitAnalytics200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalRequests

`func (o *GetRateLimitAnalytics200ResponseData) GetTotalRequests() int32`

GetTotalRequests returns the TotalRequests field if non-nil, zero value otherwise.

### GetTotalRequestsOk

`func (o *GetRateLimitAnalytics200ResponseData) GetTotalRequestsOk() (*int32, bool)`

GetTotalRequestsOk returns a tuple with the TotalRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRequests

`func (o *GetRateLimitAnalytics200ResponseData) SetTotalRequests(v int32)`

SetTotalRequests sets TotalRequests field to given value.

### HasTotalRequests

`func (o *GetRateLimitAnalytics200ResponseData) HasTotalRequests() bool`

HasTotalRequests returns a boolean if a field has been set.

### GetRateLimitHits

`func (o *GetRateLimitAnalytics200ResponseData) GetRateLimitHits() int32`

GetRateLimitHits returns the RateLimitHits field if non-nil, zero value otherwise.

### GetRateLimitHitsOk

`func (o *GetRateLimitAnalytics200ResponseData) GetRateLimitHitsOk() (*int32, bool)`

GetRateLimitHitsOk returns a tuple with the RateLimitHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimitHits

`func (o *GetRateLimitAnalytics200ResponseData) SetRateLimitHits(v int32)`

SetRateLimitHits sets RateLimitHits field to given value.

### HasRateLimitHits

`func (o *GetRateLimitAnalytics200ResponseData) HasRateLimitHits() bool`

HasRateLimitHits returns a boolean if a field has been set.

### GetHitRate

`func (o *GetRateLimitAnalytics200ResponseData) GetHitRate() float32`

GetHitRate returns the HitRate field if non-nil, zero value otherwise.

### GetHitRateOk

`func (o *GetRateLimitAnalytics200ResponseData) GetHitRateOk() (*float32, bool)`

GetHitRateOk returns a tuple with the HitRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHitRate

`func (o *GetRateLimitAnalytics200ResponseData) SetHitRate(v float32)`

SetHitRate sets HitRate field to given value.

### HasHitRate

`func (o *GetRateLimitAnalytics200ResponseData) HasHitRate() bool`

HasHitRate returns a boolean if a field has been set.

### GetTopThrottledKeys

`func (o *GetRateLimitAnalytics200ResponseData) GetTopThrottledKeys() []GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner`

GetTopThrottledKeys returns the TopThrottledKeys field if non-nil, zero value otherwise.

### GetTopThrottledKeysOk

`func (o *GetRateLimitAnalytics200ResponseData) GetTopThrottledKeysOk() (*[]GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner, bool)`

GetTopThrottledKeysOk returns a tuple with the TopThrottledKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopThrottledKeys

`func (o *GetRateLimitAnalytics200ResponseData) SetTopThrottledKeys(v []GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner)`

SetTopThrottledKeys sets TopThrottledKeys field to given value.

### HasTopThrottledKeys

`func (o *GetRateLimitAnalytics200ResponseData) HasTopThrottledKeys() bool`

HasTopThrottledKeys returns a boolean if a field has been set.

### GetTopThrottledEndpoints

`func (o *GetRateLimitAnalytics200ResponseData) GetTopThrottledEndpoints() []GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner`

GetTopThrottledEndpoints returns the TopThrottledEndpoints field if non-nil, zero value otherwise.

### GetTopThrottledEndpointsOk

`func (o *GetRateLimitAnalytics200ResponseData) GetTopThrottledEndpointsOk() (*[]GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner, bool)`

GetTopThrottledEndpointsOk returns a tuple with the TopThrottledEndpoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopThrottledEndpoints

`func (o *GetRateLimitAnalytics200ResponseData) SetTopThrottledEndpoints(v []GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner)`

SetTopThrottledEndpoints sets TopThrottledEndpoints field to given value.

### HasTopThrottledEndpoints

`func (o *GetRateLimitAnalytics200ResponseData) HasTopThrottledEndpoints() bool`

HasTopThrottledEndpoints returns a boolean if a field has been set.

### GetByTier

`func (o *GetRateLimitAnalytics200ResponseData) GetByTier() GetRateLimitAnalytics200ResponseDataByTier`

GetByTier returns the ByTier field if non-nil, zero value otherwise.

### GetByTierOk

`func (o *GetRateLimitAnalytics200ResponseData) GetByTierOk() (*GetRateLimitAnalytics200ResponseDataByTier, bool)`

GetByTierOk returns a tuple with the ByTier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByTier

`func (o *GetRateLimitAnalytics200ResponseData) SetByTier(v GetRateLimitAnalytics200ResponseDataByTier)`

SetByTier sets ByTier field to given value.

### HasByTier

`func (o *GetRateLimitAnalytics200ResponseData) HasByTier() bool`

HasByTier returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


