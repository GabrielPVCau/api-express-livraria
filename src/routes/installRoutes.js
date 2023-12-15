const express = require('express');
const router = express.Router();
const { criarTabelas, popularDadosIniciais } = require('../install/installDb');

router.get('/', async (req, res) => {
    console.log('Rota de instalação chamada. Iniciando a configuração do banco de dados...');

    try {
        console.log('Criando tabelas...');
        await criarTabelas();
        console.log('Tabelas criadas com sucesso.');

        console.log('Populando dados iniciais...');
        await popularDadosIniciais();
        console.log('Dados iniciais populados com sucesso.');

        res.status(200).send('Instalação do banco de dados concluída com sucesso.');
    } catch (error) {
        console.error('Erro durante a instalação do banco de dados:', error);
        res.status(500).send('Erro durante a instalação do banco de dados.');
    }
});

module.exports = router;
