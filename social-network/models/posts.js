const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : String,
    body : String,
    author: {
        id : {
            type : Schema.Types.ObjectId,
            ref : "user"
        }
    },
    image : String,
    comments : [
       {
            type : Schema.Types.ObjectId,
            ref: "comment"
        }
    ]

});

const post = mongoose.model('Post', postSchema);

module.exports = post;