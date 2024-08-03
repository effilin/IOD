"use strict";
let Models = require("../models"); // matches index.js

const getBlogs = (res) => {

Models.Blog.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const createBlog = (data, res) => {

 console.log(data)
 new Models.Blog(data).save()
 .then(data => res.send({result: 200, data: data}))
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
})
}

module.exports = { getBlogs, createBlog}