const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  conversation_id: { type: String, required: true,ref:'Order' },
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', chatSchema);