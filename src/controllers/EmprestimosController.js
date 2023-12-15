const Emprestimo = require('../models/emprestimo');

// Realiza um novo empréstimo
exports.realizarEmprestimo = async (req, res) => {
    try {
        const novoEmprestimo = await Emprestimo.create(req.body);
        res.status(201).send(novoEmprestimo);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Lista todos os empréstimos
exports.listarEmprestimos = async (req, res) => {
    try {
        const emprestimos = await Emprestimo.findAll();
        res.status(200).send(emprestimos);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Busca um empréstimo específico pelo ID
exports.buscarEmprestimoPorId = async (req, res) => {
    try {
        const emprestimo = await Emprestimo.findByPk(req.params.id);
        if (!emprestimo) {
            return res.status(404).send({ mensagem: 'Empréstimo não encontrado' });
        }
        res.status(200).send(emprestimo);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualiza um empréstimo
exports.atualizarEmprestimo = async (req, res) => {
    try {
        const emprestimo = await Emprestimo.findByPk(req.params.id);
        if (!emprestimo) {
            return res.status(404).send({ mensagem: 'Empréstimo não encontrado' });
        }
        await emprestimo.update(req.body);
        res.status(200).send(emprestimo);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deleta um empréstimo
exports.deletarEmprestimo = async (req, res) => {
    try {
        const emprestimo = await Emprestimo.findByPk(req.params.id);
        if (!emprestimo) {
            return res.status(404).send({ mensagem: 'Empréstimo não encontrado' });
        }
        await emprestimo.destroy();
        res.status(200).send({ mensagem: 'Empréstimo deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};
