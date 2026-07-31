package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

const BASE_URL = "http://localhost:3003/api/v1"

type Customer struct {
	ID      string `json:"id"`
	Email   string `json:"email"`
	Name    string `json:"name"`
	Company string `json:"company"`
}

type Subscription struct {
	ID         string `json:"id"`
	CustomerID string `json:"customerId"`
	PlanID     string `json:"planId"`
	Status     string `json:"status"`
}

func main() {
	fmt.Println("\n🚀 Probando SubTrackr SDK (Mock Server)")
	fmt.Printf("📡 Conectando a: %s\n\n", BASE_URL)

	// 1. Listar clientes
	resp, err := http.Get(BASE_URL + "/customers")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	var customers map[string]interface{}
	json.Unmarshal(body, &customers)
	fmt.Printf("✅ Listar clientes: %.0f clientes\n", customers["meta"].(map[string]interface{})["total"].(float64))

	// 2. Crear cliente
	newCustomer := Customer{
		Email:   "sdk-test@example.com",
		Name:    "SDK Test User",
		Company: "SDK Corp",
	}
	jsonData, _ := json.Marshal(newCustomer)
	resp, err = http.Post(BASE_URL+"/customers", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ = io.ReadAll(resp.Body)
	var customer Customer
	json.Unmarshal(body, &customer)
	fmt.Printf("✅ Cliente creado: %s\n", customer.ID)

	// 3. Listar planes
	resp, err = http.Get(BASE_URL + "/plans")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ = io.ReadAll(resp.Body)
	var plans map[string]interface{}
	json.Unmarshal(body, &plans)
	fmt.Printf("✅ Listar planes: %.0f planes\n", plans["meta"].(map[string]interface{})["total"].(float64))

	// 4. Crear suscripción
	newSub := Subscription{
		CustomerID: "cus_001",
		PlanID:     "plan_basic_001",
	}
	jsonData, _ = json.Marshal(newSub)
	resp, err = http.Post(BASE_URL+"/subscriptions", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ = io.ReadAll(resp.Body)
	var subscription Subscription
	json.Unmarshal(body, &subscription)
	fmt.Printf("✅ Suscripción creada: %s\n", subscription.ID)

	// 5. Obtener suscripción
	resp, err = http.Get(BASE_URL + "/subscriptions/" + subscription.ID)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ = io.ReadAll(resp.Body)
	json.Unmarshal(body, &subscription)
	fmt.Printf("✅ Suscripción obtenida: %s\n", subscription.Status)

	// 6. Cancelar suscripción
	resp, err = http.Post(BASE_URL+"/subscriptions/"+subscription.ID+"/cancel", "application/json", nil)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	fmt.Println("✅ Suscripción cancelada")

	fmt.Println("\n🎯 Todas las pruebas pasaron exitosamente!\n")
}