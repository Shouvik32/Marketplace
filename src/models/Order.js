const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  //variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceVariant' },
  //quantity: { type: Number, required: true },
  total_price: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending' },
  conversation_id: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);