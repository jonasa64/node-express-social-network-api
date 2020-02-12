const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//validation later
const userSchema = new Schema({
    email:String,
    firstName: String,
    lastName : String,
    password: String,
    dayOfBirth : Date
});

const user = mongoose.model('User', userSchema);