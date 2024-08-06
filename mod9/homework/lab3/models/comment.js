const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Comment.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
comment_author: {
type: DataTypes.STRING, allowNull: false, required: true
},
parent_post: {
type: DataTypes.INTEGER, allowNull: false, required: true
},
comment_body: {
type: DataTypes.STRING, allowNull: false, required: true,
unique: true
},
likes: {
type: DataTypes.INTEGER, allowNull: false, required: true
}},
{
sequelize: sequelizeInstance, modelName: 'comments', // uselowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Comment;