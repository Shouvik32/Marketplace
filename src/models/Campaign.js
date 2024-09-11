const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Campaign', campaignSchema);