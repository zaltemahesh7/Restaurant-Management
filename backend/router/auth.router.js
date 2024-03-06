const express = require('express');
const { login, register } = require('../controllers/auth.controller');
const router = express.Router();

router.route('/Login').get(login);
router.route('/register').get(register);

module.exports = router;