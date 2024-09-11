const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);