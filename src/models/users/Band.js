const {Model, DataTypes} = require ("sequelize");
const sequelize = require("../db");

class Band extends Model {}

Band.init({
        name:DataTypes.STRING,
        type:DataTypes.STRING
    },{
        sequelize,
        modelName: "bands",
        timestamps:false
    });

module.exports = Band;