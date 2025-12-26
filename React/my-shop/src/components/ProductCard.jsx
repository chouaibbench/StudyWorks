import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";

export default function ProductCard({ product }) {
  const { dispatch } = useStore();

  function add() {
    dispatch({ type: "ADD_TO_CART", payload: { id: product.id, name: product.name, price: product.price, img: product.img } });
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.img} alt={product.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 6 }} />
        <h3 style={{ margin: "8px 0 0" }}>{product.name}</h3>
        <p style={{ margin: "4px 0" }}>${product.price.toFixed(2)}</p>
      </Link>
      <button onClick={add} style={{ marginTop: 8, padding: "8px 12px", cursor: "pointer" }}>
        Ajouter au panier
      </button>
    </div>
  );
}
