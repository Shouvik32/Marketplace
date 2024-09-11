const express = require('express');
const { getMessages, sendMessage } = require('../controllers/chatController');
const router = express.Router();

router.get('/:conversationId', getMessages);
router.post('/', sendMessage);

module.exports = router;