var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main');

/* GET home page. */


router.get("/",ctrlmain.index)

module.exports = router;
