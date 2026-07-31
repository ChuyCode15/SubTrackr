const { v4: uuidv4 } = require('uuid');

const NOW = new Date();
const NEXT_MONTH = new Date(NOW);
NEXT_MONTH.setMonth(NOW.getMonth() + 1);

const PLANS = [
  {
    id: 'plan_basic_001',
    name: 'Basic',
    description: 'Plan básico para usuarios individuales',
    price: 9.99,
    currency: 'USD',
    interval: 'monthly',
    features: ['5 proyectos', '1 GB almacenamiento', 'Soporte email'],
    active: true,
    createdAt: NOW.toISOString(),
  },
  {
    id: 'plan_pro_002',
    name: 'Professional',
    description: 'Plan profesional para equipos pequeños',
    price: 29.99,
    currency: 'USD',
    interval: 'monthly',
    features: ['50 proyectos', '10 GB almacenamiento', 'Soporte prioritario', 'API acceso'],
    active: true,
    createdAt: NOW.toISOString(),
  },
  {
    id: 'plan_enterprise_003',
    name: 'Enterprise',
    description: 'Plan empresarial con funcionalidades avanzadas',
    price: 99.99,
    currency: 'USD',
    interval: 'monthly',
    features: [
      'Proyectos ilimitados',
      '100 GB almacenamiento',
      'Soporte 24/7',
      'API completo',
      'SSO',
    ],
    active: true,
    createdAt: NOW.toISOString(),
  },
];

const CUSTOMERS = [
  {
    id: 'cus_001',
    email: 'alice@example.com',
    name: 'Alice Johnson',
    company: 'TechStart Inc',
    createdAt: NOW.toISOString(),
  },
  {
    id: 'cus_002',
    email: 'bob@example.com',
    name: 'Bob Smith',
    company: 'DevCorp',
    createdAt: NOW.toISOString(),
  },
  {
    id: 'cus_003',
    email: 'carol@example.com',
    name: 'Carol Martinez',
    company: 'DataFlow Systems',
    createdAt: NOW.toISOString(),
  },
];

const SUBSCRIPTIONS = [
  {
    id: 'sub_001',
    customerId: 'cus_001',
    planId: 'plan_pro_002',
    status: 'active',
    startDate: NOW.toISOString(),
    endDate: NEXT_MONTH.toISOString(),
    autoRenew: true,
    createdAt: NOW.toISOString(),
    updatedAt: NOW.toISOString(),
  },
  {
    id: 'sub_002',
    customerId: 'cus_002',
    planId: 'plan_basic_001',
    status: 'active',
    startDate: NOW.toISOString(),
    endDate: NEXT_MONTH.toISOString(),
    autoRenew: false,
    createdAt: NOW.toISOString(),
    updatedAt: NOW.toISOString(),
  },
  {
    id: 'sub_003',
    customerId: 'cus_003',
    planId: 'plan_enterprise_003',
    status: 'pending',
    startDate: NOW.toISOString(),
    endDate: NEXT_MONTH.toISOString(),
    autoRenew: true,
    createdAt: NOW.toISOString(),
    updatedAt: NOW.toISOString(),
  },
];

const generateId = () => `mock_${uuidv4().slice(0, 8)}`;

module.exports = {
  PLANS,
  CUSTOMERS,
  SUBSCRIPTIONS,
  generateId,
  NOW,
  NEXT_MONTH,
};
