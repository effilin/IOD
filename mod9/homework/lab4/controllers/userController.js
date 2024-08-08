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

const updateUser = async (req, res) => {
  try {

    let idResults = await Models.User.findById(req.params.id).exec();
    console.log(idResults)

    if(!idResults) {
        console.log(req.params.id);
        return res.status(404).send({result: 404, error : " user does not exist"})
    } 

    const updatedUser =  await Models.User.findByIdAndUpdate(req.params.id, req.body, { new: false});
    return res.status(200).send({result: 200, data: updatedUser })

 }catch(err) {
        res.send({result: 500, error: err.message})
    }
}

const deleteUser = (req, res) => {
    // deletes the user matching the ID from the param
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    })
    }

const createUser = (data, res) => {

        console.log(data)
        new Models.User(data).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
       })
       }
    

module.exports = {
    getUser, updateUser, deleteUser, createUser
}