var express = require('express');

var router = express.Router();

// Home page route

router.get('/', function(req, res) {
    res.send('Hackernews Home page');
  });

// New Post route
router.get('/about', function(req, res) {
    res.send('Create a new post');
  });

// Delete Post route
router.get('/deletepost', function(req, res) {
    res.send('Delete a post');
  });

// Edit Post route
router.get('/editpost', function(req, res) {
    res.send('edit a post');
  });


module.exports = router;
  