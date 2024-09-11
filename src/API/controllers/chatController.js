const Chat = require('../../models/Chat');


exports.getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const messages = await Chat.find({ conversation_id: conversationId })
      .populate('sender_id', 'name') 
      .populate('receiver_id', 'name'); 
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error getting chat messages' });
  }
};


exports.sendMessage = async (req, res) => {
  const { conversation_id, sender_id, receiver_id, message } = req.body;
  if (!conversation_id || !sender_id || !receiver_id || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const chatMessage = await Chat.create({ conversation_id, sender_id, receiver_id, message });
    res.status(201).json(chatMessage);
  } catch (err) {
    res.status(500).json({ message: 'Error sending message' });
  }
};