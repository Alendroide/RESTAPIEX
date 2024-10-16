const Sequelize = require('sequelize');
const Op = Sequelize.Op;
require('dotenv').config();
module.exports = {
    getAll : (Model,include=[],exclude=[]) => async (req,res) => {
        try {
            const modelList = await Model.findAll({include,attributes : {exclude}});
            return res.status(200).json(modelList);
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:`Error obteniendo ${Model.name}`})
        }
    },
    getById : (Model,include=[],id='id',exclude=[]) => async (req,res) => {
        try {
            const modelInstance = await Model.findByPk(req.params[id],{include,attributes : {exclude}});
            if(!modelInstance){
                return res.status(404).json({message:`${Model.name} no encontrado`})
            }
            return res.status(200).json(modelInstance);
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:`Error obteniendo ${Model.name}`})
        }
    },
    getByName : (Model,include=[],attr='',exclude=[]) => async (req,res) =>{
        try {
            const modelList = await Model.findAll({where:{[attr]:{[Op.like]:`%${req.query[attr]}%`}}})
            return res.status(200).json(modelList);
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:`Error obteniendo ${Model.name}`})
        }
    },
    create : (Model) => async (req,res) => {
        try{
            const newModel = await Model.create(req.body);
            return res.status(201).json(newModel);
        }
        catch(error){
            console.error(error);
            return res.status(400).json({message:`Error creando ${Model.name}`})
        }
    },
    
    upload : (Model) => async (req,res) => {
        try{
            const data = req.body
            const newModel = await Model.create({
                identificacion : data.identificacion,
                nombre : data.nombre,
                apellido : data.apellido,
                ficha : data.ficha,
                fechanacimiento : data.fechanacimiento,
                foto : `http://${process.env.SERVER}:${process.env.PORT}/img/${req.file.filename}`
            })
            return res.status(201).json(newModel)
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:`Error creando ${Model.name}`})
        }
    }
}