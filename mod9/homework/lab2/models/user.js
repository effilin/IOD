
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_ID : { type: Number, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    password: { type: String },
    email: { type: String, trim: true, required: true},
    username: { type: String, trim:true, required:true, unique:true },
    date_started: { type: Date, default: Date.now },
    });

    module.exports = mongoose.model("user", userSchema);