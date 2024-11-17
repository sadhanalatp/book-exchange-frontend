// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books', {
        params: { title: query },
      });
      setBooks(response.data);
    } catch (err) {
      console.log('Search failed:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
