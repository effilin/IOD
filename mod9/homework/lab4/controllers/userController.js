"use strict"
let Models = require("../models");

const getUser = (res) =>{
    Models.User.find({})
    .then(data => res.send({result:200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

module.exports = {
    getUser
}