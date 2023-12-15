const Livro = require('../models/livro');

// Adiciona um novo livro
exports.adicionarLivro = async (req, res) => {
    try {
        const novoLivro = await Livro.create(req.body);
        res.status(201).send(novoLivro);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Lista todos os livros
exports.listarLivros = async (req, res) => {
    try {
        const livros = await Livro.findAll();
        res.status(200).send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Busca um livro específico pelo ID
exports.buscarLivroPorId = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) {
            return res.status(404).send({ mensagem: 'Livro não encontrado' });
        }
        res.status(200).send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualiza um livro
exports.atualizarLivro = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) {
            return res.status(404).send({ mensagem: 'Livro não encontrado' });
        }
        await livro.update(req.body);
        res.status(200).send(livro);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deleta um livro
exports.deletarLivro = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) {
            return res.status(404).send({ mensagem: 'Livro não encontrado' });
        }
        await livro.destroy();
        res.status(200).send({ mensagem: 'Livro deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};
