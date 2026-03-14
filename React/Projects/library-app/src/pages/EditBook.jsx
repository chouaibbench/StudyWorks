// src/pages/EditBook.jsx
import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { books, editBook } = useContext(BookContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const existingBook = books.find((b) => b.id === parseInt(id));
  const [book, setBook] = useState(existingBook || { title: "", author: "", category: "" });

  useEffect(() => {
    if (existingBook) setBook(existingBook);
  }, [existingBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(parseInt(id), book);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier le livre</h2>
      <input type="text" name="title" value={book.title} onChange={handleChange} />
      <input type="text" name="author" value={book.author} onChange={handleChange} />
      <input type="text" name="category" value={book.category} onChange={handleChange} />
      <button type="submit">Modifier</button>
    </form>
  );
};

export default EditBook;
