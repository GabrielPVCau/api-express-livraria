require('dotenv').config();
const { sequelize } = require('../config/bancoDeDados');
const { Usuario, Livro, Emprestimo } = require('../models/associacoes');

// Função para criar tabelas
async function criarTabelas() {
    console.log('Iniciando a criação das tabelas...');
    try {
        await Usuario.sync({ force: true });
        console.log('Tabela de Usuários criada com sucesso.');

        await Livro.sync({ force: true });
        console.log('Tabela de Livros criada com sucesso.');

        await Emprestimo.sync({ force: true });
        console.log('Tabela de Empréstimos criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
        throw error;
    }
}

// Função para popular dados iniciais
async function popularDadosIniciais() {
    console.log('Populando dados iniciais...');
    try {

        const usuario = await Usuario.create({
            nome: 'Administrador',
            email: 'admin@biblioteca.com',
            senha: 'senhaSegura123' 
        });
        console.log('Usuário Administrador criado com sucesso.');

        const livro = await Livro.create({
            titulo: 'Dom Quixote',
            autor: 'Miguel de Cervantes',
            anoPublicacao: 1605,
            estoque: 5
        });
        console.log('Livro "Dom Quixote" criado com sucesso.');

        const emprestimo = await Emprestimo.create({
            dataEmprestimo: new Date(), 
            dataDevolucao: new Date(new Date().setDate(new Date().getDate() + 7)), 
            usuarioId: usuario.id, 
            livroId: livro.id 
        });
        console.log('Empréstimo registrado com sucesso.');

    } catch (error) {
        console.error('Erro ao popular dados iniciais:', error);
        throw error;
    }
}

module.exports = { criarTabelas, popularDadosIniciais };
