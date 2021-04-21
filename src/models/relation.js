const Post = require("./users/Post");
const User = require("./users/User");
const Band = require("./users/Band");
const Direcciones = require("./users/Direcciones");

//*************uno a uno*********************
//usuario tiene una direccion
//añadir una clave foranea userId a la tabla direccion
User.hasOne(Direcciones,{as:"domicilio", foreignKey:"residente_id"});
//añade una clave userId a la tabla direccion
Direcciones.belongsTo(User,{as:"residente", foreignKey:"residente_id"});


//************ uno a muchos - 1 a n
//usuario va tener varis publicaiones
//se añade una clave userId a la tabla post
User.hasMany(Post, {as: "publicaciones",foreignKey:"autorId"});
//se añade una clave userId a la tabla post
Post.belongsTo(User,{as: "autor"});


/*n - n
mucho a mucho
el usuario pertenece a varias bandas */
// crea una nueva tabla en la base de datos llamada user_band
// user.addBand , user.getBand
User.belongsToMany(Band,{through:"user_band"});
Band.belongsToMany(User,{through:"user_band"});