// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams(); // Get book ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/books/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details');
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/books/${id}`,
        book,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/dashboard');  // Redirect to dashboard after updating the book
    } catch (err) {
      setError('Failed to update book');
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Edit Book</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          required
        />
        <label>Condition</label>
        <input
          type="text"
          name="condition"
          value={book.condition}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
