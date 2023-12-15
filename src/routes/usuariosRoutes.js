const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/UsuariosController');
const verificarToken = require('../middlewares/autenticacaoJwt');

console.log('Rota de Usuários carregada.');

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints relacionados aos usuários
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []  # Adicione isso se você deseja autenticar a rota
 *     responses:
 *       200:
 *         description: Lista de usuários obtida com sucesso
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtém um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []  # Adicione isso se você deseja autenticar a rota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário obtido com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []  # Adicione isso se você deseja autenticar a rota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 *       400:
 *         description: Dados de entrada inválidos
 */

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []  # Adicione isso se você deseja autenticar a rota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 */

// Rota pública para criar um novo usuário
router.post('/', usuariosController.criarUsuario);

// Rotas protegidas por JWT
router.get('/', verificarToken, usuariosController.listarUsuarios);
router.get('/:id', verificarToken, usuariosController.buscarUsuarioPorId);
router.put('/:id', verificarToken, usuariosController.atualizarUsuario);
router.delete('/:id', verificarToken, usuariosController.deletarUsuario);

console.log('Rotas de Usuários configuradas.'); 

module.exports = router;
