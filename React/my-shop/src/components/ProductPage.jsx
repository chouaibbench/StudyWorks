import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../data/product";
import { useStore } from "../context/Store";

export default function ProductPage() {
  const { id } = useParams();
  const product = product.find(p => p.id === Number(id));
  const { dispatch } = useStore();

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <img src={product.img} alt={product.name} style={{ width: 360, height: 360, objectFit: "cover", borderRadius: 8 }} />
      <div>
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
        <p>Catégorie: {product.category}</p>
        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: { id: product.id, name: product.name, price: product.price, img: product.img } })}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
