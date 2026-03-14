import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end activeClassName="active">
        Liste des livres
      </NavLink>
      <NavLink to="/add" activeClassName="active">
        Ajouter un livre
      </NavLink>
    </nav>
  );
};

export default Navbar;
