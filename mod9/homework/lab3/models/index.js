"use strict"
const User = require('./user')
const Blog = require('./blog')

async function init() {
    await User.sync();
    await Blog.sync();
};

init();

module.exports = {
    User, Blog
}