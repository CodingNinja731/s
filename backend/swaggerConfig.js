const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Guidance Platform API',
      version: '1.0.0',
      description: 'API documentation for the Student Guidance Platform backend service.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
      schemas: {
        College: {
          type: 'object',
          required: ['name', 'location', 'medium'],
          properties: {
            name: { type: 'string' },
            location: {
              type: 'object',
              properties: {
                city: { type: 'string' },
                state: { type: 'string' },
                pincode: { type: 'string' }
              }
            },
            courses: { type: 'array', items: { type: 'string' } },
            medium: { type: 'string' },
            facilities: { type: 'array', items: { type: 'string' } }
          }
        },
        Course: {
          type: 'object',
          required: ['name', 'stream'],
          properties: {
            name: { type: 'string' },
            stream: { type: 'string', enum: ['Arts', 'Science', 'Commerce', 'Vocational'] },
            careerPaths: { type: 'array', items: { type: 'string' } },
            colleges: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  // Path to the API docs
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
