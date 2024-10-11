const sequelize = require('../db');
const {Model,DataTypes} = require('sequelize');

class Programa extends Model{}

Programa.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    nombre : {
        type : DataTypes.STRING(60),
        allowNull : false
    },
    abreviatura : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    descripcion : {
        type : DataTypes.TEXT,
        allowNull : true
    }
},{
    sequelize,
    modelName : 'Programa',
    timestamps : false
})

module.exports = Programa;