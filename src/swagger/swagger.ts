import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple CRUD API application with Express, TypeORM, and documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8081',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Adjust the path as needed
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
