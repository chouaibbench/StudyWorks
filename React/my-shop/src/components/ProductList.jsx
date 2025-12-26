import React from "react";
import { product } from "../data/product";
import ProductCard from "./ProductCard";

export default function ProduvtList(){
    return (
    <div>
      <h2>Produits</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {product.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
    )
}