const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number
})

const User = mongoose.model('user',userSchema);

module.exports = User;