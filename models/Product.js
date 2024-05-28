const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Product', ProductSchema);
