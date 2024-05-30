import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const res = await axios.get('/api/users/me', { headers: { 'x-auth-token': token } });
        setUser(res.data);
      } catch (err) {
        setError('Failed to fetch user');
      }
    };
    fetchUser();
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Add more user info and options to update profile */}
    </div>
  );
};

export default Profile;
