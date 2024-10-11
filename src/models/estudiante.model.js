const sequelize = require('../db');
const {Model,DataTypes} = require('sequelize');

class Estudiante extends Model{}
Estudiante.init({
    identificacion : {
        type : DataTypes.BIGINT,
        primaryKey : true
    },
    nombre : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    apellido : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    ficha : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    fechanacimiento : {
        type : DataTypes.DATEONLY,
        allowNull : true
    },
    foto : {
        type : DataTypes.STRING(255),
        allowNull : true
    }
},{
    sequelize,
    modelName : 'Estudiante',
    timestamps : false
})

module.exports = Estudiante;