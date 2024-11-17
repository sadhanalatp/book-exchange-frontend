import React from 'react';

function BookList({ books }) {
  return (
    <div>
      <h3>Books List</h3>
      <ul>
        {books.length === 0 ? (
          <p>No books found</p>
        ) : (
          books.map((book) => (
            <li key={book._id}>
              <h4>{book.title}</h4>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Condition: {book.condition}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BookList;
