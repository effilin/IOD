
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment_id : { type: Number, trim: true, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    comment: { type: String},
    date: { type: Date, default: Date.now },
    likes: {type: Number}
    });

    module.exports = mongoose.model("comment", commentSchema);