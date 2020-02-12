const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : String,
    body : String,
    author: String
});

const post = mongoose.model('Post', postSchema);