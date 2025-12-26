// src/context/BookContext.jsx
import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming" },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming" },
  ]);

  const addBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, updatedBook) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book)));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
};
