const express = require('express');
const authController = require('../controllers/auth.controller');
const { validation } = require('../middleware/varification');
const router = express.Router();

router.route('/Login').post(validation, authController.login);
router.route('/register').post(authController.register);
router.route('/').get(authController.home);

module.exports = router;