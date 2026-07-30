# PlanUpdateInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Price** | Pointer to **float32** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**BillingCycle** | Pointer to **string** |  | [optional] 
**Features** | Pointer to **[]string** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] 

## Methods

### NewPlanUpdateInput

`func NewPlanUpdateInput() *PlanUpdateInput`

NewPlanUpdateInput instantiates a new PlanUpdateInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanUpdateInputWithDefaults

`func NewPlanUpdateInputWithDefaults() *PlanUpdateInput`

NewPlanUpdateInputWithDefaults instantiates a new PlanUpdateInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PlanUpdateInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanUpdateInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanUpdateInput) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PlanUpdateInput) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPrice

`func (o *PlanUpdateInput) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PlanUpdateInput) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PlanUpdateInput) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *PlanUpdateInput) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetCurrency

`func (o *PlanUpdateInput) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanUpdateInput) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanUpdateInput) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PlanUpdateInput) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetBillingCycle

`func (o *PlanUpdateInput) GetBillingCycle() string`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *PlanUpdateInput) GetBillingCycleOk() (*string, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *PlanUpdateInput) SetBillingCycle(v string)`

SetBillingCycle sets BillingCycle field to given value.

### HasBillingCycle

`func (o *PlanUpdateInput) HasBillingCycle() bool`

HasBillingCycle returns a boolean if a field has been set.

### GetFeatures

`func (o *PlanUpdateInput) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *PlanUpdateInput) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *PlanUpdateInput) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *PlanUpdateInput) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetIsActive

`func (o *PlanUpdateInput) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *PlanUpdateInput) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *PlanUpdateInput) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *PlanUpdateInput) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


