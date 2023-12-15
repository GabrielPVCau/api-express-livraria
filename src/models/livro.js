const Sequelize = require('sequelize');
const sequelize = require('../config/bancoDeDados');

const Livro = sequelize.define('Livro', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoPublicacao: {
        type: Sequelize.INTEGER
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true,
    tableName: 'livros'
});

// Relacionamento com o modelo Emprestimo
// Um livro pode ter vários empréstimos
//Livro.hasMany(require('./emprestimo'), {
//    foreignKey: 'livroId',
//    as: 'emprestimos'
//});

module.exports = Livro;
