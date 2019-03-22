var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/slackernews', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.set('view engine', 'ejs')

app.listen(8080, function() {
    console.log('Node.js listenening on port' + 8080)
});

var mainRoutes = require('./routes/app')
app.use(mainRoutes);