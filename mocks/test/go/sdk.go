package main

import (
    "testing"
    "github.com/stretchr/testify/assert"
    "subtrackr/sdks/go"
)

func TestSubTrackrSDK(t *testing.T) {
    client := subtrackr.NewClient(&subtrackr.Config{
        BaseURL: "http://localhost:3003/api/v1",
        APIKey:  "mock-api-key",
    })

    t.Run("List Subscriptions", func(t *testing.T) {
        response, err := client.Subscriptions.List(nil)
        assert.NoError(t, err)
        assert.Contains(t, response, "data")
        assert.IsType(t, []interface{}{}, response["data"])
    })

    t.Run("Get Subscription", func(t *testing.T) {
        response, err := client.Subscriptions.Get("sub_001")
        assert.NoError(t, err)
        assert.Equal(t, "sub_001", response["id"])
        assert.Contains(t, response, "customer")
        assert.Contains(t, response, "plan")
    })

    t.Run("Create Subscription", func(t *testing.T) {
        newSub := map[string]interface{}{
            "customerId": "cus_001",
            "planId":     "plan_basic_001",
            "autoRenew":  true,
        }
        response, err := client.Subscriptions.Create(newSub)
        assert.NoError(t, err)
        assert.Contains(t, response, "id")
        assert.Equal(t, "cus_001", response["customerId"])
    })

    t.Run("Update Subscription", func(t *testing.T) {
        updates := map[string]interface{}{
            "status": "paused",
        }
        response, err := client.Subscriptions.Update("sub_001", updates)
        assert.NoError(t, err)
        assert.Equal(t, "paused", response["status"])
    })

    t.Run("Cancel Subscription", func(t *testing.T) {
        response, err := client.Subscriptions.Cancel("sub_002")
        assert.NoError(t, err)
        assert.Contains(t, response["message"], "cancelled")
    })

    t.Run("List Customers", func(t *testing.T) {
        response, err := client.Customers.List(nil)
        assert.NoError(t, err)
        assert.Contains(t, response, "data")
    })

    t.Run("Create Customer", func(t *testing.T) {
        newCustomer := map[string]interface{}{
            "email":   "test@example.com",
            "name":    "Test User",
            "company": "Test Corp",
        }
        response, err := client.Customers.Create(newCustomer)
        assert.NoError(t, err)
        assert.Contains(t, response, "id")
        assert.Equal(t, "test@example.com", response["email"])
    })

    t.Run("List Plans", func(t *testing.T) {
        response, err := client.Plans.List(nil)
        assert.NoError(t, err)
        assert.Contains(t, response, "data")
        assert.Greater(t, len(response["data"].([]interface{})), 0)
    })

    t.Run("Error Handling", func(t *testing.T) {
        _, err := client.Subscriptions.Get("non_existent")
        assert.Error(t, err)
    })
}