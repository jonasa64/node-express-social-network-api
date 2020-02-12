const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    friends : Array
});

const friend = mongoose.model('friend', friendSchema);

