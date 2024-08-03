
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_id : { type: Number, trim: true, required: true },
    title: { type: String },
    post_body: { type: String},
    image: { type: String},
    date: { type: Date, default: Date.now },
    likes:{ type: Number},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    parent_blog: {type: mongoose.Schema.Types.ObjectId, ref: 'blog'}
    });

    module.exports = mongoose.model("post", postSchema);