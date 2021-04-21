const {Model, DataTypes} = require ("sequelize");
const sequelize = require("../db");

class Direcciones extends Model {}

Direcciones.init({
        direccion:DataTypes.STRING
    },{
        sequelize,
        modelName: "direcciones",
        timestamps:false
    });

module.exports = Direcciones;