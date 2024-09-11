const mongoose = require('mongoose');

const crossSellSchema = new mongoose.Schema({
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  cross_sell_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CrossSell', crossSellSchema);