import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/BookList'; // Import BookList

function Dashboard() {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooks(response.data);
      } catch (err) {
        console.error(err);
        alert('Error fetching books');
      }
    };
    fetchBooks();
  }, [token]);

  return (
    <div>
      <h2>Your Book Dashboard</h2>
      <BookList books={books} /> {/* Use BookList component here */}
    </div>
  );
}

export default Dashboard;
