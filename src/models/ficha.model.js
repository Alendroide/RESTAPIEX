const sequelize = require('../db');
const {Model,DataTypes} = require('sequelize');

class Ficha extends Model{}

Ficha.init({
    codigo : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    fechainicio : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },
    programa : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    sequelize,
    modelName : 'Ficha',
    timestamps : false
})

module.exports = Ficha;