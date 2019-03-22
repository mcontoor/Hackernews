var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema ({
    name: String,
    url: String,
    title: String
})

module.exports = mongoose.model('Posts', postSchema)