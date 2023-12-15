const Sequelize = require('sequelize');
const sequelize = require('../config/bancoDeDados');

const Emprestimo = sequelize.define('Emprestimo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataEmprestimo: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    dataDevolucao: {
        type: Sequelize.DATE
        
    }
}, {
    timestamps: false, 
    tableName: 'emprestimos'
});

// Relacionamentos
const Usuario = require('./usuario');
const Livro = require('./livro');

//Emprestimo.belongsTo(Usuario, {
//    foreignKey: 'usuarioId',
//    as: 'usuario'
//});
//Emprestimo.belongsTo(Livro, {
//    foreignKey: 'livroId',
//    as: 'livro'
//});

module.exports = Emprestimo;
