const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User'); // Ensure this matches the correct casing

// Register a new user
router.post('/register', async (req, res) => {
  console.log('Received registration request:', req.body); // Log the request body

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists'); // Log if user already exists
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    console.log('User registered successfully:', user); // Log the registered user
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Registration error:', err); // Log any registration errors
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
