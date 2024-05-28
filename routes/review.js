const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Add a review
router.post('/add', async (req, res) => {
  const { productId, userId, rating, comment } = req.body;

  try {
    const newReview = new Review({ productId, userId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Additional routes for get reviews for product, delete review

module.exports = router;
