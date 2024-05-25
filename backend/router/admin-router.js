const express = require('express');
const {getAllUsers, getAllContact} = require('../controllers/admin-controller');
const authMiddleware = require('../middleware/auth_middleware');
const adminMiddleware = require('../middleware/admin-middleware');

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);
router.route('/contact').get(getAllContact)

module.exports = router;