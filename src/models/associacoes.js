const Usuario = require('./usuario');
const Livro = require('./livro');
const Emprestimo = require('./emprestimo');

Usuario.hasMany(Emprestimo, { foreignKey: 'usuarioId', as: 'emprestimos' });
Livro.hasMany(Emprestimo, { foreignKey: 'livroId', as: 'emprestimos' });
Emprestimo.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
Emprestimo.belongsTo(Livro, { foreignKey: 'livroId', as: 'livro' });

module.exports = { Usuario, Livro, Emprestimo };
