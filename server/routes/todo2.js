var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    description: 'finish proposal',
    isDone: false
  }, {
    description: 'sleep',
    isDone: false
  }])

});

module.exports = router;
