const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : String,
    body : String,
    author: String,
    image : String
});

const post = mongoose.model('Post', postSchema);

module.exports = post;