import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);

  return (
    <div>
      <h2>Liste des livres</h2>
      {books.length === 0 ? (
        <p className="empty-state">Aucun livre disponible.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-meta">
                <span className="book-title">{book.title}</span>
                <span className="book-sub">
                  {book.author} ({book.category})
                </span>
              </div>
              <div className="actions">
                <Link to={`/edit/${book.id}`} className="btn edit">
                  Modifier
                </Link>
                <button
                  className="btn delete"
                  onClick={() => deleteBook(book.id)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
