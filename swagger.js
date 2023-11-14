import swaggerJSDoc from 'swagger-jsdoc';

const PORT = 5000;
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CarePal API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api`,
                description: `Local Server Port ${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;