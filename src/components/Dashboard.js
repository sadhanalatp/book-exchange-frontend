// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must log in first');
        return;
      }
      
      try {
        const response = await axios.get('http://localhost:5000/books', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/books/${bookId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(books.filter((book) => book._id !== bookId)); // Remove deleted book from the list
    } catch (err) {
      setError('Failed to delete book');
    }
  };

  return (
    <div className="dashboard">
      <h1>Book Dashboard</h1>

      {error && <p className="error">{error}</p>}

      <ul>
        {books.map((book) => (
          <li key={book._id} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Condition: {book.condition}</p>
            <div className="actions">
              <Link to={`/edit/${book._id}`} className="edit-btn">Edit</Link>
              <button onClick={() => handleDelete(book._id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
