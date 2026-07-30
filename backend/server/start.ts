/**
 * Entry point for the SubTrackr public API server.
 *
 * Usage: npm run api:start
 * Env:   PORT (default 3000), CDN_PROVIDER, CDN_API_TOKEN, CDN_SERVICE_ID

import { startApiServer } from './createApiServer';

startApiServer();*/


/**
 * Entry point for the SubTrackr public API server.
 *
 * Usage: npm run api:start
 * Env:   PORT (default 3000), CDN_PROVIDER, CDN_API_TOKEN, CDN_SERVICE_ID
 */

import { startApiServer } from './createApiServer';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../config/swagger';

// Iniciar el servidor
const app = startApiServer();

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log('📚 Swagger UI disponible en /api-docs');