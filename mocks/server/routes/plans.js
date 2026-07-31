const express = require('express');
const router = express.Router();
const { PLANS, generateId, NOW } = require('../data/fixtures');

let plans = [...PLANS];

// GET all plans
router.get('/', (req, res) => {
  const { active } = req.query;
  let result = plans;

  if (active !== undefined) {
    const isActive = active === 'true';
    result = result.filter((p) => p.active === isActive);
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

// GET plan by ID
router.get('/:id', (req, res) => {
  const plan = plans.find((p) => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ error: 'Plan not found' });
  }
  res.json(plan);
});

// POST create plan
router.post('/', (req, res) => {
  const { name, description, price, currency, interval, features } = req.body;

  if (!name || !price || !currency || !interval) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newPlan = {
    id: generateId(),
    name,
    description: description || '',
    price,
    currency,
    interval,
    features: features || [],
    active: true,
    createdAt: NOW.toISOString(),
  };

  plans.push(newPlan);
  res.status(201).json(newPlan);
});

// PUT update plan
router.put('/:id', (req, res) => {
  const index = plans.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Plan not found' });
  }

  const { name, description, price, currency, interval, features, active } = req.body;
  const plan = plans[index];

  if (name) plan.name = name;
  if (description !== undefined) plan.description = description;
  if (price) plan.price = price;
  if (currency) plan.currency = currency;
  if (interval) plan.interval = interval;
  if (features) plan.features = features;
  if (active !== undefined) plan.active = active;

  plans[index] = plan;
  res.json(plan);
});

// DELETE plan
router.delete('/:id', (req, res) => {
  const index = plans.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Plan not found' });
  }

  plans.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
