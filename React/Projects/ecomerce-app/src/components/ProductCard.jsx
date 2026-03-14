import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ prod }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card p-3" style={{ width: "200px" }}>
      <h5>{prod.name}</h5>
      <p>Prix: {prod.price} DH</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;
