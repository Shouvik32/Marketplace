const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Admin = require('../../models/Admin');  



exports.registerUser = async (req, res) => {
  const { name, email, password,role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
      { name, 
        email,
        password: hashedPassword,
        role }
        )
        
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error registering usererr'});
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id,role:user.role }, process.env.JWT_SECRET, { expiresIn: '10000h' });
    res.json({ token,role:user.role });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;  
   const admin = await Admin.findOne({ email });  
   console.log(admin)
   if (!admin || !(await bcrypt.compare(password, admin.password))) {  
    return res.status(401).json({ message: 'Invalid credentials' });  
   }  
   const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {  
    expiresIn: '1h',  
   });  
   const role="admin"
   res.json({ token,role });  
  
}