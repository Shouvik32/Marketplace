const express = require('express');
const { getWishlists, addToWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const router = express.Router();

router.get('/:id', getWishlists);
router.post('/:id', addToWishlist);
router.delete('/:id', removeFromWishlist);

module.exports = router;