const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a new product
router.post('/add', async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  try {
    const newProduct = new Product({ name, description, price, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Additional routes for get, update, delete products

module.exports = router;
