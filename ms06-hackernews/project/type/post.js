var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema ({
    name: String,
    url: url,
    title: String
})

module.exports = mongoose.model('Posts', postSchema)