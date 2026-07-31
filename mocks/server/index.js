const express = require('express');
const cors = require('cors');
const subscriptionRoutes = require('./routes/subscriptions');
const customerRoutes = require('./routes/customers');
const planRoutes = require('./routes/plans');
const webhookRoutes = require('./routes/webhooks');

const app = express();
const PORT = process.env.MOCK_PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Logging
app.use((req, res, next) => {
  console.log(`[MOCK] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/plans', planRoutes);
app.use('/api/v1/webhooks', webhookRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🔄 Mock server running at http://localhost:${PORT}`);
  console.log(`📚 API base: http://localhost:${PORT}/api/v1`);
});
