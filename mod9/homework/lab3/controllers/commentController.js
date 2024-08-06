"use strict";
let Models = require("../models"); // matches index.js

const getComment = (res) => {

Models.Comment.findAll({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const createComment = (data, res) => {

 console.log(data)
 Models.Comment.create(data)
 .then(data => res.send({result: 200, data: data}))
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
})
}

module.exports = { getComment, createComment}