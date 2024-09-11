const User = require('../../models/User'); 


const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const isVendor = (req, res, next) => {
  if (req.user.role === 'vendor' || req.user.role === 'both') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};

const isCustomer = (req, res, next) => {
  if (req.user.role === 'customer' || req.user.role === 'both') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};


const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error getting user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
};


module.exports = {
  getUser,
  updateUser,
  isAuthenticated,
  isVendor,
  isCustomer
};
