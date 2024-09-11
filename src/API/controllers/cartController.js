const Cart = require('../../models/Cart');


exports.getCarts = async (req, res) => {
  const { userId } = req.params; 
  try {
    const carts = await Cart.find({ customer_id: userId }).populate('service_id');
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: 'Error getting cart items' });
  }
};
exports.addToCart = async (req, res) => {
  const { userId } = req.params; 
  try {
    const cartItem = await Cart.create({ ...req.body, customer_id: userId });
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
};

exports.removeFromCart = async (req, res) => {
  const { id } = req.params; 
  try {
    const cartItem = await Cart.findByIdAndDelete(id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Cart item removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing from cart' });
  }
};