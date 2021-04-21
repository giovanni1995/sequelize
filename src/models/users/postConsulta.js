const sequelize = require ("../db");
const Post = require ("./Post");
const User = require("./User");




const listar = async (req, res) => {
    try {      
       const post = await Post.findAll({
           attributes:["title","body"],
           include:{
               model:User, 
               as:"autor",
               attributes:["name"]
           }
       });
        return post;
    } catch (error) {
        //console.log(error);
        res.json({
           "Notificacion":"Error al crear "
         });
    } 
 };

 const crear = async (req, res) => {
     try {      
        const post = await Post.create({
           title:req.body.title,
           body:req.body.body
         });
         //const users = await User.findAll();
         return "post";
     } catch (error) {
         //console.log(error);
         res.json({
            "Notificacion":"Error al crear "
          });
     } 
  };
  const listarId = async (req, res) => {
    try {      
       const post = await Post.findByPk(req.params.id);
        return post;
    } catch (error) {
        //console.log(error);
        res.json({
           "Notificacion":"Error al crear "
         });
    } 
 };

 const update = async (req, res) => {
    try {      
       const post = await Post.update({
        title:req.body.title,
        body:req.body.body
       },{
           where:{
               id:req.params.id
           }
       });
        return post;
    } catch (error) {
        res.json({
           "Notificacion":"Error al crear "
         });
    } 
 };

 const deleted = async (req, res) => {
    try {      
       const post = await Post.destroy({
           where:{
               id:req.params.id
           }
       });
        return post;
    } catch (error) {
        res.json({
           "Notificacion":"Error al crear "
         });
    } 
 };

module.exports={
    listar,crear,listarId,update,deleted
}
