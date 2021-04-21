//const sequalize = require ("../db");
const User = require ("./User");
const Post = require ("./Post");
const Direcciones = require ("./Direcciones");

/*let a = ""; 
const con = async  (req, res)=>{
    try {
        //force:true   elimina toda las tabla y vuelve a guardar
        const conexion =  await sequalize.sync({force:false});
        //const conexion =  await sequalize.authenticate();
        console.log("conectado correctamente consola");

    //res.send('Hello World!');
    a = "conexion correcta"; 
    }catch (e){
        console.log("Error "+ e);
        a = "conexion no correcta"; 
    }
    return a;

};*/
const listar = async (req, res) => {
    try {      
        const users = await User.findAll({
            attributes:["name","age"],
            include:[{
                model: Direcciones,
                as:"domicilio",
                attributes:["direccion"]
            },{
                model: Post,
                as:"publicaciones",
                attributes:["title","body"],
                where:{
                    title:"Foo"
                }
            }]
        });
         return users;
     } catch (error) {
         //console.log(error);
         res.json({
            "Notificacion":"Error al crear "
          });
     } 
}

const listarIdDirecciones = async (req, res) => {
    try {      
        const users = await User.findByPk(req.params.id);
        
        const direccion = await users.getDomicilio(); // dependiendo de la asosiacion que hagamos en relation.js
        console.log(direccion);
        return direccion;
     } catch (error) {
         //console.log(error);
         res.json({
            "Notificacion":"Error al crear "+error
          });
     } 
};

const listarIdPublicaciones = async (req, res) => {
    try {      
        const users = await User.findByPk(req.params.id);    
        const publicaciones = await users.getPublicaciones(); // dependiendo de la asosiacion que hagamos en relation.js
        console.log(publicaciones);
        return publicaciones;
     } catch (error) {
         //console.log(error);
         res.json({
            "Notificacion":"Error al crear "+error
          });
     } 
};




 const crear = async (req, res) => {
     try {
        /*const users = await User.create({
           name:req.body.name,
           email:req.body.email,
           age:req.body.age

         });
         const direcciones = await Direcciones.create({
             direccion:req.body.direccion
         });
         users.setDomicilio(direcciones);*/
         const users = await User.create({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            domicilio:{
                direccion: req.body.direccion
            }
          },{
              include:"domicilio"
          });
         return users;
     } catch (error) {
         res.json(error);
     } 
    
  };

module.exports={
    crear,listar,listarIdDirecciones,listarIdPublicaciones
}
