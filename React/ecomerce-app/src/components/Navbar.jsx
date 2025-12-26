import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <nav className="navbar bg-dark text-white p-3 d-flex justify-content-between">
      <h4>E-Commerce</h4>
      <span>🛍️ {state.Cart.length} produits</span>
    </nav>
  );
}

export default Navbar;
