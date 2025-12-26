// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./pages/BookList";
import BookForm from "./pages/BookForm";
import EditBook from "./pages/EditBook";
import { BookProvider } from "./context/BookContext";
import "./App.css";


function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}


export default App;
