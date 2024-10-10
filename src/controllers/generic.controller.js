module.exports = {
    getAll : (Model,include=[]) => async (req,res) => {
        try {
            const newModel = await Model.findAll({include});
            return res.status(200).json(newModel);
        }
        catch(error){
            return res.status(500).json({message:`Error obteniendo ${Model.name}`})
        }
    },
    getById : (Model,include=[]) => async (req,res) => {
        try {
            
        }
        catch(error){

        }
    }
}