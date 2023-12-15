const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swaggerConfig');

// Importação dos arquivos de rota
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const livrosRoutes = require('./src/routes/livrosRoutes');
const emprestimosRoutes = require('./src/routes/emprestimosRoutes');
const installRoutes = require('./src/routes/installRoutes');

// Inicializa o aplicativo Express
const app = express();

// Configuração do Body Parser para lidar com dados JSON
app.use(bodyParser.json());

// Definição das rotas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/livros', livrosRoutes);
app.use('/api/emprestimos', emprestimosRoutes);
app.use('/install', installRoutes);

// Rota para a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para lidar com erros
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ erro: { mensagem: error.message } });
});

// Configura o servidor para escutar em uma porta específica
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
