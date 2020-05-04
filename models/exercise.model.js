const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    task: String,
    time: Number
})
const Exercise = mongoose.model('exercise', exerciseSchema)
module.exports = Exercise;