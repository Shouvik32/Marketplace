const express = require('express');
const { registerUser, loginUser,loginAdmin } = require('../controllers/authController');
const { isAuthenticated } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/loginAdmin', loginAdmin);

module.exports = router;