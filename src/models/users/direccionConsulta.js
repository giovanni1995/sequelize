//const sequalize = require ("../db");
const User = require ("./User");
const Direcciones = require ("./Direcciones");

const listar = async (req, res) => {
    try {      
        const users = await Direcciones.findAll({
            
            include:{
                model: User,
                as:"residente",
                attributes:["name","age"]
            }
        });
         return users;
     } catch (error) {
         //console.log(error);
         res.json({
            "Notificacion":"Error al crear "
          });
     } 
}


     
     


module.exports={
   listar
}
