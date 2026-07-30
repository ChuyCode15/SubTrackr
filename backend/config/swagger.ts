import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3002;

// CAMBIA: __dirname apunta a backend/config/, subimos 2 niveles
const specPath = path.join(__dirname, '../../api/bundled.json');

if (!fs.existsSync(specPath)) {
  console.error('❌ bundled.json not found at:', specPath);
  process.exit(1);
}

const swaggerDocument = JSON.parse(fs.readFileSync(specPath, 'utf8'));

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'SubTrackr API Documentation',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      tryItOutEnabled: true,
    },
  })
);

app.get('/', (req, res) => res.redirect('/api-docs'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'SubTrackr API Docs', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`\n📚 SubTrackr API Documentation`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📍 Swagger UI: http://localhost:${PORT}/api-docs`);
  console.log(`✅ Health:     http://localhost:${PORT}/health`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
});