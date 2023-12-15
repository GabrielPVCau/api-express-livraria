const Usuario = require('../models/usuario');

// Cria um novo usuário
exports.criarUsuario = async (req, res) => {
    try {
        const novoUsuario = await Usuario.create(req.body);
        res.status(201).send(novoUsuario);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Lista todos os usuários
exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Busca um usuário específico pelo ID
exports.buscarUsuarioPorId = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send({ mensagem: 'Usuário não encontrado' });
        }
        res.status(200).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualiza um usuário
exports.atualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send({ mensagem: 'Usuário não encontrado' });
        }
        await usuario.update(req.body);
        res.status(200).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deleta um usuário
exports.deletarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).send({ mensagem: 'Usuário não encontrado' });
        }
        await usuario.destroy();
        res.status(200).send({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};
