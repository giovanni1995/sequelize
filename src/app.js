const express = require('express');
const app = express();
const sequelize = require ("./models/db");
require("./models/relation");

//middleware
app.use(express.json());
//app.use(express.urlencoded({extended: false}));
//setting
const PORT = process.env.PORT || 3000;


//Router
app.use("/api/user",require("./router/userRouter"));
app.use("/api/post",require("./router/postRouter"));
app.use("/api/direccion",require("./router/direccionRouter"));


//BASE DE DATOS




app.listen(PORT, () => {
    try {
        //force:true   elimina toda las tabla y vuelve a guardar
        const conexion = sequelize.sync({force:false});
        console.log("conectado correctamente consola");

    }catch (e){
        console.log("Error "+ e);
    }
  console.log(`Example app listening at http://localhost:${PORT}`)
});
