const axios = require('axios');

const BASE_URL = 'http://localhost:3003/api/v1';

async function testSDK() {
  console.log('\n🚀 Probando SubTrackr SDK (Mock Server)');
  console.log(`📡 Conectando a: ${BASE_URL}\n`);

  try {
    // 1. Listar clientes
    const customers = await axios.get(`${BASE_URL}/customers`);
    console.log(`✅ Listar clientes: ${customers.data.data.length} clientes`);

    // 2. Crear cliente
    const newCustomer = await axios.post(`${BASE_URL}/customers`, {
      email: 'sdk-test@example.com',
      name: 'SDK Test User',
      company: 'SDK Corp',
    });
    console.log(`✅ Cliente creado: ${newCustomer.data.id}`);

    // 3. Listar planes
    const plans = await axios.get(`${BASE_URL}/plans`);
    console.log(`✅ Listar planes: ${plans.data.data.length} planes`);

    // 4. Crear suscripción
    const subscription = await axios.post(`${BASE_URL}/subscriptions`, {
      customerId: 'cus_001',
      planId: 'plan_basic_001',
      autoRenew: true,
    });
    console.log(`✅ Suscripción creada: ${subscription.data.id}`);

    // 5. Obtener suscripción
    const getSub = await axios.get(`${BASE_URL}/subscriptions/${subscription.data.id}`);
    console.log(`✅ Suscripción obtenida: ${getSub.data.status}`);

    // 6. Cancelar suscripción
    await axios.post(`${BASE_URL}/subscriptions/${subscription.data.id}/cancel`);
    console.log('✅ Suscripción cancelada');

    console.log('\n🎯 Todas las pruebas pasaron exitosamente!\n');
  } catch (error) {
    console.error('❌ Error en prueba:', error.response?.data || error.message);
    process.exit(1);
  }
}

testSDK();
