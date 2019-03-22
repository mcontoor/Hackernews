var router = require('express').Router()
var User = require('../type/user')
var Post = require('../type/post')
var Comment = require('../type/comments')
var faker = require('faker')

router.get('/add-user', function(req, res, next) {
    res.render('../views/add-user')
})

router.post('/add-user', function(req, res, next) {
    console.log(req.body)  ;
      var user = new User()

    user.username = req.body.user_name
    user.password = req.body.password

    user.save().then(user => console.log('New usser created ', user)).catch(err => console.log(err))
    
})

module.exports = router;