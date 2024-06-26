const express = require('express');
const authController = require('../controllers/auth.controller');
const { validation } = require('../middleware/varification');
const contact = require('../controllers/contact.controller');
const authMiddleware = require('../middleware/auth_middleware');
const router = express.Router();

router.route('/Login').post(validation, authController.login);
router.route('/register').post(validation, authController.register);
router.route('/contact').post(contact)
router.route('/').get(authController.home);
router.route('/user').get(authMiddleware, authController.user)


const { processCheckout } = require('../controllers/checkoutController');

router.post('/checkout', processCheckout);

module.exports = router;