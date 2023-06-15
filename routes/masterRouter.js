const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


console.log('Router is running')
router.get('/',homeController.home);
router.use('/user',require('./user'));

module.exports = router;