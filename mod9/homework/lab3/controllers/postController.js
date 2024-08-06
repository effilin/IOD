"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {

Models.Post.findAll({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const createPost = (data, res) => {

 console.log(data)
 Models.Post.create(data)
 .then(data => res.send({result: 200, data: data}))
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
})
}

module.exports = { getPosts, createPost}