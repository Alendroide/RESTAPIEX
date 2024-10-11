const Ficha = require('../ficha.model');
const Estudiante = require('../estudiante.model');
const Programa = require('../programa.model');

Ficha.hasMany(Estudiante,{
    foreignKey : 'ficha',
    onDelete : 'CASCADE'
})
Ficha.belongsTo(Programa,{
    targetKey : 'id',
    foreignKey : 'programa',
    onDelete : 'CASCADE'
})

module.exports = Ficha;