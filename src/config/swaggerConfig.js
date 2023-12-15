const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

// Log para verificar o diretório atual (onde o servidor foi iniciado)
console.log('Diretório atual:', process.cwd());

const options = {
    definition: {
        openapi: '3.0.0', 
        info: {
            title: 'API de Gerenciamento de Biblioteca', 
            version: '1.0.0', 
            description: 'Esta é uma API para gerenciar uma biblioteca, incluindo operações para usuários, livros e empréstimos.', 
        },
        servers: [
            {
                url: 'http://localhost:3000', 
                description: 'Servidor de Desenvolvimento'
            }
        ],
    },

    apis: ['./src/routes/*.js'],
 
};

// Log para verificar se o caminho dos arquivos de rota está correto
const resolvedPath = path.resolve('../routes/*.js');
console.log('Caminho para os arquivos de rota:', resolvedPath);

let swaggerSpec;

try {
    swaggerSpec = swaggerJsdoc(options);
    console.log('Especificação do Swagger gerada com sucesso.');
} catch (error) {
    console.error('Erro ao gerar a Especificação do Swagger:', error);
}

module.exports = swaggerSpec;
