# Feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] 
**TierAccess** | Pointer to **[]string** |  | [optional] 

## Methods

### NewFeature

`func NewFeature() *Feature`

NewFeature instantiates a new Feature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeatureWithDefaults

`func NewFeatureWithDefaults() *Feature`

NewFeatureWithDefaults instantiates a new Feature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Feature) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Feature) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Feature) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Feature) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Feature) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Feature) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Feature) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Feature) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEnabled

`func (o *Feature) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Feature) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Feature) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Feature) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTierAccess

`func (o *Feature) GetTierAccess() []string`

GetTierAccess returns the TierAccess field if non-nil, zero value otherwise.

### GetTierAccessOk

`func (o *Feature) GetTierAccessOk() (*[]string, bool)`

GetTierAccessOk returns a tuple with the TierAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierAccess

`func (o *Feature) SetTierAccess(v []string)`

SetTierAccess sets TierAccess field to given value.

### HasTierAccess

`func (o *Feature) HasTierAccess() bool`

HasTierAccess returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


