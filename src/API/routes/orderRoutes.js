const express = require('express');
const {getOrders, createOrder,cancelOrder } = require('../controllers/orderController');
const router = express.Router();

router.get('/', getOrders);
router.post('/create', createOrder);
router.put('/:id', cancelOrder);

module.exports = router;