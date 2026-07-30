import swaggerJsdoc from 'swagger-jsdoc';



const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'SubTrackr Subscription API',
      description: 'API para la gestión de suscripciones de SubTrackr',
      version: '1.0.0',
      contact: {
        name: 'SubTrackr Team',
        url: 'https://github.com/Smartdevs17/SubTrackr'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor local de desarrollo'
      },
      {
        url: 'https://sandbox.subtrackr.io/v1',
        description: 'Sandbox'
      },
      {
        url: 'https://api.subtrackr.io/v1',
        description: 'Producción'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    tags: [
      {
        name: 'Subscriptions',
        description: 'Gestión de suscripciones'
      },
      {
        name: 'Plans',
        description: 'Gestión de planes'
      },
      {
        name: 'Customers',
        description: 'Gestión de clientes'
      },
      {
        name: 'Webhooks',
        description: 'Gestión de webhooks'
      }
    ]
  },
  apis: ['./**/*.ts']
};

export const swaggerSpec = swaggerJsdoc(options);