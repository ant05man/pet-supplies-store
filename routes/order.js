const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create an order
router.post('/create', async (req, res) => {
  const { userId, products, totalAmount } = req.body;

  try {
    const newOrder = new Order({ userId, products, totalAmount });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Additional routes for get orders by user, update order status

module.exports = router;
