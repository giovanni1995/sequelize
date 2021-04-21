const {crear,listar,listarIdDirecciones,listarIdPublicaciones,listarIdBandas} = require("../models/users/userConsulta");
//const User = require ("../models/users/User");
//const sequalize = require("../models/db");


  const crearC =  async (req, res) => {
    const user = await crear(req, res);
    res.json(user);
    
  };

  const listarC =  async (req, res) => {
    const user = await listar(req, res);
    res.json(user);
    
  };

  const listarIdCDirecciones =  async (req, res) => {
    const user = await listarIdDirecciones(req, res);
    res.json(user);
    
  };

  const listarIdCPublicaciones =  async (req, res) => {
    const user = await listarIdPublicaciones(req, res);
    res.json(user);
    
  };

  const listarIdCBandas =  async (req, res) => {
    const user = await listarIdBandas(req, res);
    res.json(user);
    
  };
  

  const defecto =  (req, res) => {
    res.end('archivo no encontrado');   
  };
  
  



  module.exports ={
    crearC,defecto,listarC,listarIdCDirecciones,listarIdCPublicaciones,listarIdCBandas
}