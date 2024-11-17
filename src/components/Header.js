// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>Book Exchange</h1>
        <nav>
          <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
          <Link to="/add" style={navLinkStyle}>Add Book</Link>
          <Link to="/" style={navLinkStyle}>Logout</Link>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#2d3e50',
  color: '#fff',
  padding: '15px 0',
  textAlign: 'center',
};

const navLinkStyle = {
  margin: '0 15px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.1rem',
};

export default Header;
