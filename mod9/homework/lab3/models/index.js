"use strict"
const User = require('./user')
const Blog = require('./blog')
const Post = require('./post')
const Comment = require('./comment')

Post.belongsTo(Blog);
User.hasMany(Blog);
User.hasMany(Post);
User.hasMany(Comment);
Blog.belongsTo(User);

async function init() {
    await User.sync();
    await Blog.sync();
    await Post.sync();
    await Comment.sync();
};

init();

module.exports = {
    User, Blog, Post, Comment
}