var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in', { title: 'SIP Communicator | Sign In' });
});

module.exports = router;
