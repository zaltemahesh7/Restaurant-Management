const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.route('/Login').get(authController.login);
router.route('/register').get(authController.register);
router.route('/').get(authController.home);

module.exports = router;