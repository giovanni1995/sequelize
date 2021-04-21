const {crear,listarId,update,deleted,listar} = require("../models/users/postConsulta");


const listarC =  async (req, res) => { 
  try {
    const post = await listar(req,res);
    res.json(post);
  } catch (error) {
    res.json({
      "Notificacion":"Error al crear "+title
    });
  }    
};

  const crearP =  async (req, res) => { 
    try {
      const crearM = await crear(req,res);
    let title = req.body.title
    res.json({
      "Notificacion":"Creado exitosamente el titulo "+title
    });
    } catch (error) {
      res.json({
        "Notificacion":"Error al crear "+title
      });
    }    
  };

  const listarIdC =  async (req, res) => { 
    try {
      const post = await listarId(req,res); 
    res.json(post);
    } catch (error) {
      res.json({
        "Notificacion":"Error al crear "
      });
    } 
  };

  const actualizarC =  async (req, res) => { 
    try {
      const post = await update(req,res); 
      res.json(post);
    } catch (error) {
      res.json({
        "Notificacion":"Error al crear "
      });
    } 
  };

  const deletedC =  async (req, res) => { 
    try {
      const post = await deleted(req,res); 
      res.json(post);
    } catch (error) {
      res.json({
        "Notificacion":"Error al crear "
      });
    } 
  };

  

  const defecto =  (req, res) => {
    res.end('archivo no encontrado');   
  };
  
  



  module.exports ={
    listarC,crearP,defecto,listarIdC,actualizarC,deletedC
}