const Sequelize = require('sequelize');
const sequelize = require('../config/bancoDeDados');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo nome não pode ser vazio"
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Deve ser um endereço de email válido"
            }
        }
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo senha não pode ser vazio"
            },
            len: {
                args: [6, 100],
                msg: "A senha deve ter entre 6 e 100 caracteres"
            }
        }
    }
}, {

    timestamps: true,
    tableName: 'usuarios'
});

// Relacionamento com o modelo Empréstimo
// Isso depende de como você definiu o modelo Empréstimo
// Por exemplo, se um usuário pode ter muitos empréstimos
//Usuario.hasMany(require('./emprestimo'), {
//    foreignKey: 'usuarioId',
//    as: 'emprestimos'
//});

module.exports = Usuario;
