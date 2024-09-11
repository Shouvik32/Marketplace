const express = require('express');  
const app = express();  
const cors=require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const adminRoutes = require('./src/API/routes/adminRoutes');  
 const authRoutes = require('./src/API/routes/authRoutes');  
 const cartRoutes = require('./src/API/routes/cartRoutes');  
 const categoryRoutes = require('./src/API/routes/categoryRoutes');  
 const chatRoutes = require('./src/API/routes/chatRoutes');  
 const reviewRoutes = require('./src/API/routes/reviewRoutes');  
 const serviceRoutes = require('./src/API/routes/serviceRoutes');  
 const userRoutes = require('./src/API/routes/userRoutes');  
 const wishlistRoutes = require('./src/API/routes/wishlistRoutes');  
 const orderRoutes = require('./src/API/routes/orderRoutes');  
 const authenticateToken = require('./src/API/middleware/auth');

app.use(cors());
app.use(express.json());  
app.get("/",(req,res)=>{
  res.send("Server Running")
})  
app.get("/api/",(req,res)=>{
  res.send("Entry point to Server")
}) 
app.use('/api/admin', adminRoutes);  
app.use('/api/auth', authRoutes); 
app.get('/api/protected-route', authenticateToken, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});
app.use('/api/cart', cartRoutes);  
app.use('/api/categories', categoryRoutes);  
app.use('/api/chat', chatRoutes);  
 app.use('/api/reviews', reviewRoutes);  
app.use('/api/services', serviceRoutes);  
 app.use('/api/users', userRoutes);  
 app.use('/api/order', orderRoutes);  
 app.use('/api/wishlist', wishlistRoutes);  
  

app.use((err, req, res, next) => {  
  console.error(err);  
  res.status(500).json({ message: 'Internal Server Error' });  
});  
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT;  
app.listen(port, () => {  
  console.log(`Server listening on port ${port}`);  
});
