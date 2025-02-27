var express = require('express');
var router = express.Router();

/* GET home page. */

const messages =  [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages',messages: messages});
});

router.get('/new', function(req,res,next){
  res.render('form');
})

router.post('/new', function(req,res,next){
  console.log(req.body);
  messages.push({text: req.body.message, user: req.body.authorName, added: new Date()});
  res.redirect('/');
})
module.exports = router;
