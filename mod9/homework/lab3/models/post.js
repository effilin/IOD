const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Post.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
post_title: {
type: DataTypes.STRING, allowNull: false, required: true
},
post_body: {
type: DataTypes.STRING, allowNull: false, required: true
},
post_image: {
type: DataTypes.STRING, allowNull: false, required: true
},
likes: {
type: DataTypes.INTEGER, allowNull: false, required: true
},
post_author: {
type: DataTypes.INTEGER, allowNull: false, required: true,
    },
parent_blog: {
    type: DataTypes.INTEGER, allowNull: false, required: true
    }},
{
sequelize: sequelizeInstance, modelName: 'posts', // uselowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Post;