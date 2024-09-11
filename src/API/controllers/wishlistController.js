const Wishlist = require('../../models/Wishlist');

exports.getWishlists = async (req, res) => {
  const { userId } = req.params; // Expect userId in the request parameters
  try {
    const wishlists = await Wishlist.find({ customer_id: userId }).populate('service_id');
    res.json(wishlists);
  } catch (err) {
    res.status(500).json({ message: 'Error getting wishlist items' });
  }
};
exports.addToWishlist = async (req, res) => {
  const { userId } = req.params; // Expect userId in the request parameters
  try {
    const wishlistItem = await Wishlist.create({ ...req.body, customer_id: userId });
    res.status(201).json(wishlistItem);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to wishlist' });
  }
};
exports.removeFromWishlist = async (req, res) => {
  const { id } = req.params; // Expect the wishlist item ID in the request parameters
  try {
    const wishlistItem = await Wishlist.findByIdAndDelete(id);
    if (!wishlistItem) return res.status(404).json({ message: 'Wishlist item not found' });
    res.json({ message: 'Wishlist item removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing from wishlist' });
  }
};