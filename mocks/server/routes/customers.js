const express = require('express');
const router = express.Router();
const { CUSTOMERS, generateId, NOW } = require('../data/fixtures');

let customers = [...CUSTOMERS];

// GET all customers
router.get('/', (req, res) => {
  const { email } = req.query;
  let result = customers;

  if (email) {
    result = result.filter((c) => c.email.includes(email));
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

// GET customer by ID
router.get('/:id', (req, res) => {
  const customer = customers.find((c) => c.id === req.params.id);
  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }
  res.json(customer);
});

// POST create customer
router.post('/', (req, res) => {
  const { email, name, company } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name are required' });
  }

  const newCustomer = {
    id: generateId(),
    email,
    name,
    company: company || null,
    createdAt: NOW.toISOString(),
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// PUT update customer
router.put('/:id', (req, res) => {
  const index = customers.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  const { email, name, company } = req.body;
  const customer = customers[index];

  if (email) customer.email = email;
  if (name) customer.name = name;
  if (company !== undefined) customer.company = company;

  customers[index] = customer;
  res.json(customer);
});

// DELETE customer
router.delete('/:id', (req, res) => {
  const index = customers.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  customers.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
