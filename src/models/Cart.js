const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceVariant' },
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);

