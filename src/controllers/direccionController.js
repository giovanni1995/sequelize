const {listar} = require("../models/users/direccionConsulta");



  const listarC =  async (req, res) => {
    const direccion = await listar(req, res);
    res.json(direccion);
    
  };

  const defecto =  (req, res) => {
    res.end('archivo no encontrado');   
  };
  
  

  module.exports ={
    defecto,listarC
}