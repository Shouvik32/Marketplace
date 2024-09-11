const express = require('express');
const { getUser, updateUser, isAuthenticated } = require('../controllers/userController');
const router = express.Router();

router.get('/:id',isAuthenticated, getUser);
router.put('/:id', updateUser);

module.exports = router;