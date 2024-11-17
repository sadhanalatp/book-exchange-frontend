import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Book Exchange Platform</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
