const Ficha = require('../ficha.model');
const Estudiante = require('../estudiante.model');

Ficha.hasMany(Estudiante,{
    foreignKey : 'ficha',
    onDelete : 'CASCADE'
})

module.exports = Ficha;