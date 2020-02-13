const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    friends : Array,
    owner : {
        id: {
            type : Schema.Types.ObjectId,
            ref:'user'
        }
    }
});

const friend = mongoose.model('friend', friendSchema);

module.exports = friend;