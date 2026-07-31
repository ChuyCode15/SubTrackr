const express = require('express');
const router = express.Router();
const { NOW } = require('../data/fixtures');

// Store webhook deliveries
let webhookDeliveries = [];

// POST simulate webhook
router.post('/simulate', (req, res) => {
  const { event, data } = req.body;

  if (!event || !data) {
    return res.status(400).json({ error: 'Event and data are required' });
  }

  const webhook = {
    id: `wh_${Date.now()}`,
    event,
    data,
    timestamp: NOW.toISOString(),
    delivered: true,
  };

  webhookDeliveries.push(webhook);

  // Return the webhook payload that would be sent
  res.status(200).json({
    webhook: {
      event,
      data,
      timestamp: NOW.toISOString(),
      signature: 'mock_signature_12345',
    },
    delivery: webhook,
  });
});

// GET webhook history
router.get('/history', (req, res) => {
  res.json({
    data: webhookDeliveries,
    meta: {
      total: webhookDeliveries.length,
    },
  });
});

// GET webhook event types
router.get('/events', (req, res) => {
  res.json({
    events: [
      'subscription.created',
      'subscription.updated',
      'subscription.cancelled',
      'subscription.renewed',
      'customer.created',
      'customer.updated',
      'payment.succeeded',
      'payment.failed',
      'plan.created',
      'plan.updated',
      'plan.deleted',
    ],
  });
});

module.exports = router;
