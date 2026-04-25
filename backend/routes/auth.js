const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

router.post('/login', login);

router.get('/setup', async (req, res) => {
  try {
    const existing = await Admin.findOne({ email: 'admin@clarix.com' });
    if (existing) return res.json({ message: 'Admin already exists!' });
    const hash = await bcrypt.hash('admin123', 10);
    await Admin.create({ name: 'Admin', email: 'admin@clarix.com', password: hash });
    res.json({ message: 'Admin created successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;