const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

router.post('/login', login);

router.get('/setup', async (req, res) => {
  try {
    await Admin.deleteMany({});
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
    await Admin.create({ 
      name: 'Admin', 
      email: process.env.ADMIN_EMAIL || 'admin@clarix.com', 
      password: hash 
    });
    res.json({ message: 'Admin created successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;