var express = require('express');
var router = express.Router();

// New comment route

router.get('/newcomment', function(req, res) {
    res.send('Hackernews Home page');
  });

// Delete comment route
router.get('/deletecomment', function(req, res) {
    res.send('Delete a comment');
  });

// Edit comment route
router.get('/editpost', function(req, res) {
    res.send('edit a post');
  });

module.exports = router;