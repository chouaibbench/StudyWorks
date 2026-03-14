// src/pages/BookForm.jsx
import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useState({ title: "", author: "", category: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un livre</h2>
      <input type="text" name="title" placeholder="Titre" onChange={handleChange} />
      <input type="text" name="author" placeholder="Auteur" onChange={handleChange} />
      <input type="text" name="category" placeholder="Catégorie" onChange={handleChange} />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default BookForm;
