const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/LivrosController');
const verificarToken = require('../middlewares/autenticacaoJwt');

console.log('Rota de Livros carregada.'); 

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Endpoints relacionados aos livros
 */

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Adiciona um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro adicionado com sucesso
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros obtida com sucesso
 */

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Obtém um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro obtido com sucesso
 *       404:
 *         description: Livro não encontrado
 */

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Deleta um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 */

// Rota pública para adicionar um novo livro
router.post('/', livrosController.adicionarLivro);

// Rotas protegidas por JWT
router.get('/', verificarToken, livrosController.listarLivros);
router.get('/:id', verificarToken, livrosController.buscarLivroPorId);
router.put('/:id', verificarToken, livrosController.atualizarLivro);
router.delete('/:id', verificarToken, livrosController.deletarLivro);

console.log('Rotas de Livros configuradas.'); 

module.exports = router;
