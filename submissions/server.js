// create an express server
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var posts = require('./routes/posts.js');

var user = require('./routes/user.js');



// app.get('/', function(req, res) {
//     res.send('Hello World!');
//     next();
//   });


app.listen(port, function(){
    console.log('Server listening on '+ port +'...');
});


app.use('/post', posts);


app.use('/user', user);

app.set('view engine', 'ejs');

//handler for "/"
app.get('/', function(req, res){ 
  res.render('pages/about', {
    welcomeMessage: "This message was rendered on the server",
    headerTitle:"HACKER NEWS COMMENTS PAGE"
  });
});

