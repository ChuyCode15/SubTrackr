## @subtrackr/sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @subtrackr/sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.subtrackr.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CacheApi* | [**purgeUserCache**](docs/CacheApi.md#purgeusercache) | **POST** /purge-user-cache | Purge user-scoped cache entries
*FeaturesApi* | [**getFeatures**](docs/FeaturesApi.md#getfeatures) | **GET** /features | Get public feature flags
*GraphQLApi* | [**graphqlQuery**](docs/GraphQLApi.md#graphqlquery) | **POST** /graphql | GraphQL endpoint
*HealthApi* | [**getHealth**](docs/HealthApi.md#gethealth) | **GET** /health | Health check
*MetricsApi* | [**getPlanCacheMetrics**](docs/MetricsApi.md#getplancachemetrics) | **GET** /metrics/plan-cache | Prometheus metrics for plan cache
*PlansApi* | [**createPlan**](docs/PlansApi.md#createplan) | **POST** /plans | Create a new subscription plan
*PlansApi* | [**deactivatePlan**](docs/PlansApi.md#deactivateplan) | **DELETE** /plans/{id} | Deactivate a plan
*PlansApi* | [**getPlanById**](docs/PlansApi.md#getplanbyid) | **GET** /plans/{id} | Get a plan by ID
*PlansApi* | [**listPlans**](docs/PlansApi.md#listplans) | **GET** /plans | List all subscription plans
*PlansApi* | [**updatePlan**](docs/PlansApi.md#updateplan) | **PATCH** /plans/{id} | Update a plan
*PricingApi* | [**getPublicPricing**](docs/PricingApi.md#getpublicpricing) | **GET** /pricing | Get public pricing tiers
*PublicApi* | [**getPublicConfig**](docs/PublicApi.md#getpublicconfig) | **GET** /public/{path} | Get public configuration
*RateLimitsApi* | [**getRateLimitAnalytics**](docs/RateLimitsApi.md#getratelimitanalytics) | **GET** /rate-limits/analytics | Get rate limit analytics
*RateLimitsApi* | [**getRateLimitStatus**](docs/RateLimitsApi.md#getratelimitstatus) | **GET** /rate-limits/status | Get rate limit status for an API key
*RateLimitsApi* | [**manageBypass**](docs/RateLimitsApi.md#managebypass) | **POST** /rate-limits/bypass | Manage bypass list
*RateLimitsApi* | [**setCustomRateLimits**](docs/RateLimitsApi.md#setcustomratelimits) | **POST** /rate-limits/config | Set custom rate limits for an API key
*ThemesApi* | [**activateTheme**](docs/ThemesApi.md#activatetheme) | **POST** /themes/{id}/activate | Activate a theme
*ThemesApi* | [**createTheme**](docs/ThemesApi.md#createtheme) | **POST** /themes | Create a new theme
*ThemesApi* | [**deleteTheme**](docs/ThemesApi.md#deletetheme) | **DELETE** /themes/{id} | Delete a theme
*ThemesApi* | [**getThemeById**](docs/ThemesApi.md#getthemebyid) | **GET** /themes/{id} | Get theme by ID
*ThemesApi* | [**getThemes**](docs/ThemesApi.md#getthemes) | **GET** /themes | List themes for merchant
*ThemesApi* | [**updateTheme**](docs/ThemesApi.md#updatetheme) | **PATCH** /themes/{id} | Update a theme


### Documentation For Models

 - [ConfigEntry](docs/ConfigEntry.md)
 - [CreatePlan201Response](docs/CreatePlan201Response.md)
 - [CreateTheme201Response](docs/CreateTheme201Response.md)
 - [DeleteTheme200Response](docs/DeleteTheme200Response.md)
 - [DeleteTheme200ResponseData](docs/DeleteTheme200ResponseData.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseError](docs/ErrorResponseError.md)
 - [Feature](docs/Feature.md)
 - [FeatureUpdateInput](docs/FeatureUpdateInput.md)
 - [GetFeatures200Response](docs/GetFeatures200Response.md)
 - [GetHealth200Response](docs/GetHealth200Response.md)
 - [GetPublicConfig200Response](docs/GetPublicConfig200Response.md)
 - [GetPublicConfig200ResponseData](docs/GetPublicConfig200ResponseData.md)
 - [GetPublicPricing200Response](docs/GetPublicPricing200Response.md)
 - [GetRateLimitAnalytics200Response](docs/GetRateLimitAnalytics200Response.md)
 - [GetRateLimitAnalytics200ResponseData](docs/GetRateLimitAnalytics200ResponseData.md)
 - [GetRateLimitAnalytics200ResponseDataByTier](docs/GetRateLimitAnalytics200ResponseDataByTier.md)
 - [GetRateLimitAnalytics200ResponseDataByTierFREE](docs/GetRateLimitAnalytics200ResponseDataByTierFREE.md)
 - [GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner](docs/GetRateLimitAnalytics200ResponseDataTopThrottledEndpointsInner.md)
 - [GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner](docs/GetRateLimitAnalytics200ResponseDataTopThrottledKeysInner.md)
 - [GetRateLimitStatus200Response](docs/GetRateLimitStatus200Response.md)
 - [GetRateLimitStatus200ResponseData](docs/GetRateLimitStatus200ResponseData.md)
 - [GetRateLimitStatus200ResponseDataCurrent](docs/GetRateLimitStatus200ResponseDataCurrent.md)
 - [GetRateLimitStatus200ResponseDataLimits](docs/GetRateLimitStatus200ResponseDataLimits.md)
 - [GetRateLimitStatus200ResponseDataResetAt](docs/GetRateLimitStatus200ResponseDataResetAt.md)
 - [GetThemes200Response](docs/GetThemes200Response.md)
 - [GraphqlQuery200Response](docs/GraphqlQuery200Response.md)
 - [GraphqlQuery200ResponseErrorsInner](docs/GraphqlQuery200ResponseErrorsInner.md)
 - [GraphqlQueryRequest](docs/GraphqlQueryRequest.md)
 - [ListPlans200Response](docs/ListPlans200Response.md)
 - [ManageBypass200Response](docs/ManageBypass200Response.md)
 - [ManageBypass200ResponseData](docs/ManageBypass200ResponseData.md)
 - [ManageBypassRequest](docs/ManageBypassRequest.md)
 - [Plan](docs/Plan.md)
 - [PlanInput](docs/PlanInput.md)
 - [PlanUpdateInput](docs/PlanUpdateInput.md)
 - [PricingTier](docs/PricingTier.md)
 - [PricingUpdateInput](docs/PricingUpdateInput.md)
 - [PurgeUserCache200Response](docs/PurgeUserCache200Response.md)
 - [SetCustomRateLimits200Response](docs/SetCustomRateLimits200Response.md)
 - [SetCustomRateLimits200ResponseData](docs/SetCustomRateLimits200ResponseData.md)
 - [SetCustomRateLimitsRequest](docs/SetCustomRateLimitsRequest.md)
 - [SetCustomRateLimitsRequestLimits](docs/SetCustomRateLimitsRequestLimits.md)
 - [SuccessResponse](docs/SuccessResponse.md)
 - [Theme](docs/Theme.md)
 - [ThemeInput](docs/ThemeInput.md)
 - [ThemeUpdateInput](docs/ThemeUpdateInput.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

