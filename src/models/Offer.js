const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  discountPercentage: { type: Number, required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }], // Array of service IDs
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Offer', offerSchema);

