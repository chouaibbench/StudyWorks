import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { state } = useContext(CartContext);
  return (
    <div className="d-flex gap-3 flex-wrap p-4">
      {state.produits.map((p) => (
        <ProductCard key={p.id} prod={p} />
      ))}
    </div>
  );
}

export default ProductList;
