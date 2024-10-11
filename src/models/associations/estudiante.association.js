const Estudiante = require('../estudiante.model');
const Ficha = require('../ficha.model');

Estudiante.belongsTo(Ficha,{
    foreignKey : 'ficha',
    targetKey : 'codigo',
    onDelete : 'CASCADE'
})

module.exports = Estudiante;