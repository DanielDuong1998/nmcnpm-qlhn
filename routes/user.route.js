var express = require('express');
const bodyParser = require('body-parser');

const userModel = require('../models/user.model');
const { urlencoded } = require('body-parser');


var router = express.Router();
const urlencodedParser = bodyParser.urlencoded();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', urlencodedParser, (req, res) => {
  const { body } = req;
  console.log('body: ', body.email);
  res.send('respond with a resource');
  
});

module.exports = router;
