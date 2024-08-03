
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_ID : { type: Number, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    description: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    created: { type: Date, default: Date.now },
    });

    module.exports = mongoose.model("blog", blogSchema);