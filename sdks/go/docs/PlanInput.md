# PlanInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Price** | **float32** |  | 
**Currency** | **string** |  | 
**BillingCycle** | **string** |  | 
**Features** | Pointer to **[]string** |  | [optional] 

## Methods

### NewPlanInput

`func NewPlanInput(name string, price float32, currency string, billingCycle string, ) *PlanInput`

NewPlanInput instantiates a new PlanInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanInputWithDefaults

`func NewPlanInputWithDefaults() *PlanInput`

NewPlanInputWithDefaults instantiates a new PlanInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PlanInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PlanInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PlanInput) SetName(v string)`

SetName sets Name field to given value.


### GetPrice

`func (o *PlanInput) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PlanInput) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PlanInput) SetPrice(v float32)`

SetPrice sets Price field to given value.


### GetCurrency

`func (o *PlanInput) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanInput) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanInput) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetBillingCycle

`func (o *PlanInput) GetBillingCycle() string`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *PlanInput) GetBillingCycleOk() (*string, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *PlanInput) SetBillingCycle(v string)`

SetBillingCycle sets BillingCycle field to given value.


### GetFeatures

`func (o *PlanInput) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *PlanInput) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *PlanInput) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *PlanInput) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


