import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Debugging line
    try {
      const res = await axios.post('/api/users/register', formData);
      console.log('Response:', res.data); // Debugging line
      // Redirect or show success message
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message); // Improved error handling
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
