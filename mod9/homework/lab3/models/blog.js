const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }
// Sequelize will create this table if it doesn't exist on startup
User.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
title: {
type: DataTypes.STRING, allowNull: false, required: true
},
description: {
type: DataTypes.STRING, allowNull: false, required: true
},
author: {
type: DataTypes.STRING, allowNull: false, required: true,
unique: true
},
created: {
type: DataTypes.DATE, allowNull: false, required: true
}},
{
sequelize: sequelizeInstance, modelName: 'blogs', 
timestamps: true, freezeTableName: true
}
)
module.exports = User;