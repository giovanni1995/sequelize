const {Model, DataTypes} = require ("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init({
        name:{
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,          
            validate:{
                notNull:{
                    msg:"No puede ser nulo"
                },
                is:{
                    args: ["[A-Za-z\s]+$",'i'], //[:alpha:\s]" 
                    msg:"El nombre solo puede contener letras"
                },
               len:{
                   args:[3, 255],
                   msg:"El nombre debe ser entre 3 y 255 caracteres"
               }
            }
        },
        email:{
            type:DataTypes.STRING,
            validate:{
                isEmail:{
                    args:true,
                    msg:"Debe ser un correo valido"
                }
            }
        },
        age:{
            type:DataTypes.INTEGER,
            validate:{
                isInt:{
                    args:true,
                    msg:"la edad tiene que ser un numero"
                },
                min:{
                    args:1,
                    msg:"la edad tiene que ser mayor o igual a uno"
                },
                max:{
                    args:150,
                    msg:"la edad tiene que ser real"
                },
                esPar(value){ //cuando es una validacion personalizada
                    if(value % 2){
                        throw new Error("la edad tiene que ser un numero par");
                    }
                }
               
            }
        },    
        //si es 0 es usuario normal y si es 1 es administrador
        role:{
           type: DataTypes.INTEGER,
           defaultValue:0
        }
    },{
        sequelize,
        modelName: "user",
        timestamps:false
    });

module.exports = User;
