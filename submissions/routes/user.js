var express = require('express');
var router = express.Router();

// User page route

router.get('/', function(req, res) {
    res.send('user');
  });

// New Post page route
router.get('/user', function(req, res) {
    res.send('new user');
  });

  module.exports = router;