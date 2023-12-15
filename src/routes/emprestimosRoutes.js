const express = require('express');
const router = express.Router();
const emprestimosController = require('../controllers/EmprestimosController');

console.log('Rota de Empréstimos carregada.'); 

/**
 * @swagger
 * tags:
 *   name: Empréstimos
 *   description: Endpoints relacionados aos empréstimos
 */

/**
 * @swagger
 * /emprestimos:
 *   post:
 *     summary: Realiza um novo empréstimo
 *     tags: [Empréstimos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: string
 *               livroId:
 *                 type: string
 *               dataEmprestimo:
 *                 type: string
 *               dataDevolucao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empréstimo realizado com sucesso
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /emprestimos:
 *   get:
 *     summary: Lista todos os empréstimos
 *     tags: [Empréstimos]
 *     responses:
 *       200:
 *         description: Lista de empréstimos obtida com sucesso
 */

/**
 * @swagger
 * /emprestimos/{id}:
 *   get:
 *     summary: Obtém um empréstimo pelo ID
 *     tags: [Empréstimos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empréstimo a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empréstimo obtido com sucesso
 *       404:
 *         description: Empréstimo não encontrado
 */

/**
 * @swagger
 * /emprestimos/{id}:
 *   put:
 *     summary: Atualiza um empréstimo pelo ID
 *     tags: [Empréstimos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empréstimo a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: string
 *               livroId:
 *                 type: string
 *               dataEmprestimo:
 *                 type: string
 *               dataDevolucao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Empréstimo atualizado com sucesso
 *       404:
 *         description: Empréstimo não encontrado
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /emprestimos/{id}:
 *   delete:
 *     summary: Deleta um empréstimo pelo ID
 *     tags: [Empréstimos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empréstimo a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empréstimo deletado com sucesso
 *       404:
 *         description: Empréstimo não encontrado
 */

// Rota pública para realizar um novo empréstimo
router.post('/', emprestimosController.realizarEmprestimo);

// Rotas protegidas por JWT
router.get('/', emprestimosController.listarEmprestimos);
router.get('/:id', emprestimosController.buscarEmprestimoPorId);
router.put('/:id', emprestimosController.atualizarEmprestimo);
router.delete('/:id', emprestimosController.deletarEmprestimo);

console.log('Rotas de Empréstimos configuradas.');

module.exports = router;
