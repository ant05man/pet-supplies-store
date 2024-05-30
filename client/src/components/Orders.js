import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/orders', { headers: { 'x-auth-token': token } });
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.products.map(p => (
              <div key={p.product._id}>{p.product.name} (Quantity: {p.quantity})</div>
            ))}
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
