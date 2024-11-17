// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the login request to the backend
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to the Dashboard page
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials, please try again');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
