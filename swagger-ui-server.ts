import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3002;

const yamlPath = path.join(__dirname, 'openapi.yaml');
if (!fs.existsSync(yamlPath)) {
  console.error('❌ openapi.yaml not found at:', yamlPath);
  process.exit(1);
}

const swaggerDocument = YAML.load(yamlPath);

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

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'SubTrackr API Docs',
    version: '1.0.0',
  });
});

app.listen(PORT, () => {
  console.log(`\n📚 SubTrackr API Documentation`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📍 Swagger UI: http://localhost:${PORT}/api-docs`);
  console.log(`✅ Health:     http://localhost:${PORT}/health`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
});
