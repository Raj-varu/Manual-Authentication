const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile',userController.profile);
router.get('/sign_in',userController.Sign_in);
router.get('/sign_up',userController.Sign_up);
router.post('/create',userController.create);
router.post('/create-session',userController.create_session);

module.exports = router;