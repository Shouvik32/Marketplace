const Order = require('../../models/Order');
const { v4: uuidv4 } = require('uuid'); 

exports.createOrder = async (req, res) => {
  const { customer_id, service_id, total_price } = req.body;
  const price=parseFloat(total_price).toFixed(2)
  try {
    
    const conversation_id = uuidv4(); 
    const order = await Order.create({
      customer_id,
      service_id,
      total_price:price,
      conversation_id,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

exports.cancelOrder = async (req, res) => {
  const { orderId } = req.params; 
  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = 'canceled';
    await order.save();

    res.json({ message: 'Order canceled successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Error canceling order' });
  }
};

exports.getOrders=async (req,res)=>{
  try{
    const order=await Order.find()
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.status(200).json(order)
  }
  catch(err){
    res.status(500).json({ message: 'Error fetching order' });
  }

}