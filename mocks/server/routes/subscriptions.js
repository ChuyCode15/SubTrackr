const express = require('express');
const router = express.Router();
const {
  SUBSCRIPTIONS,
  CUSTOMERS,
  PLANS,
  generateId,
  NOW,
  NEXT_MONTH,
} = require('../data/fixtures');

let subscriptions = [...SUBSCRIPTIONS];

// GET all subscriptions
router.get('/', (req, res) => {
  const { customerId, status } = req.query;
  let result = subscriptions;

  if (customerId) {
    result = result.filter((s) => s.customerId === customerId);
  }
  if (status) {
    result = result.filter((s) => s.status === status);
  }

  res.json({
    data: result,
    meta: {
      total: result.length,
      limit: 50,
      offset: 0,
    },
  });
});

// GET subscription by ID
router.get('/:id', (req, res) => {
  const subscription = subscriptions.find((s) => s.id === req.params.id);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  // Enrich with customer and plan data
  const customer = CUSTOMERS.find((c) => c.id === subscription.customerId);
  const plan = PLANS.find((p) => p.id === subscription.planId);

  res.json({
    ...subscription,
    customer,
    plan,
  });
});

// POST create subscription
router.post('/', (req, res) => {
  const { customerId, planId, autoRenew = true } = req.body;

  // Validate customer exists
  const customer = CUSTOMERS.find((c) => c.id === customerId);
  if (!customer) {
    return res.status(400).json({ error: 'Customer not found' });
  }

  // Validate plan exists
  const plan = PLANS.find((p) => p.id === planId);
  if (!plan) {
    return res.status(400).json({ error: 'Plan not found' });
  }

  const newSubscription = {
    id: generateId(),
    customerId,
    planId,
    status: 'active',
    startDate: NOW.toISOString(),
    endDate: NEXT_MONTH.toISOString(),
    autoRenew,
    createdAt: NOW.toISOString(),
    updatedAt: NOW.toISOString(),
  };

  subscriptions.push(newSubscription);
  res.status(201).json({
    ...newSubscription,
    customer,
    plan,
  });
});

// PUT update subscription
router.put('/:id', (req, res) => {
  const index = subscriptions.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  const { planId, autoRenew, status } = req.body;
  const subscription = subscriptions[index];

  if (planId) {
    const plan = PLANS.find((p) => p.id === planId);
    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }
    subscription.planId = planId;
  }

  if (autoRenew !== undefined) subscription.autoRenew = autoRenew;
  if (status) subscription.status = status;
  subscription.updatedAt = NOW.toISOString();

  subscriptions[index] = subscription;

  const customer = CUSTOMERS.find((c) => c.id === subscription.customerId);
  const plan = PLANS.find((p) => p.id === subscription.planId);

  res.json({
    ...subscription,
    customer,
    plan,
  });
});

// DELETE subscription
router.delete('/:id', (req, res) => {
  const index = subscriptions.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  subscriptions.splice(index, 1);
  res.status(204).send();
});

// POST cancel subscription
router.post('/:id/cancel', (req, res) => {
  const subscription = subscriptions.find((s) => s.id === req.params.id);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  subscription.status = 'cancelled';
  subscription.autoRenew = false;
  subscription.updatedAt = NOW.toISOString();

  res.json({ message: 'Subscription cancelled', subscription });
});

module.exports = router;
