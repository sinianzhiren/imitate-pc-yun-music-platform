var express = require('express');
var router = express.Router();
require('mongoose');
require('../models/db');
let ranking = require('../models/ranking_list');

router.get('/', function(req, res, next) {

});

module.exports = router;
