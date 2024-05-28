// client/src/services/api.js
// service used to handle API requests using 'axios'

import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getProducts = async () => {
  return await axios.get(`${API_URL}/products`);
};

// Additional API functions for users, orders, reviews
