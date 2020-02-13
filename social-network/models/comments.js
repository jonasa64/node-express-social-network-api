const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
   text : String,
    author : {
        id :{
            type : Schema.Types.ObjectId,
            ref : "user"
        }
    }
});


const  comment = mongoose.model('comment', commentSchema);

module.exports = comment;