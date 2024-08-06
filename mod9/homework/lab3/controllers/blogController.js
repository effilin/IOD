"use strict";
let Models = require("../models");

const getBlogs = (res) => {

Models.Blog.findAll({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const createBlog = (data, res) => {

 console.log(data)
 Models.Blog.create(data).then(data => {
    res.send({result: 200, data: data})})
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
})
}

module.exports = { getBlogs, createBlog}