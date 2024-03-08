const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.route('/Login').post(authController.login);
router.route('/register').post(authController.register);
router.route('/').get(authController.home);

module.exports = router;