const express = require('express');
const { getCarts, addToCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/:id', getCarts);
router.post('/:id', addToCart);
router.delete('/:id', removeFromCart);

module.exports = router;