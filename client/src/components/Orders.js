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

  if (orders.length === 0) return <div>No orders found</div>;

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.item} - {order.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
