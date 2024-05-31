import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors here
    console.error('API Request Error:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
);

export const productAPI = {
  fetchProducts: () => axiosInstance.get('/products'),
};

export const userAPI = {
  registerUser: (userData) => axiosInstance.post('/users/register', userData),
};
