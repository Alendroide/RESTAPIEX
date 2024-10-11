const Programa = require('../programa.model');
const Ficha = require('../ficha.model');

Programa.hasMany(Ficha,{
    foreignKey : 'programa',
    onDelete : 'CASCADE'
})

module.exports = Programa;