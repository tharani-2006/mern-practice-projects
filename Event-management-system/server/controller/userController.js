const Users = require('../models/User');

// Create user
const addUser = async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.json({ message: 'User added successfully' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// Get all users (for admin)
const viewUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { addUser, viewUsers };
