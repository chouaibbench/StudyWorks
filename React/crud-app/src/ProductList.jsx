import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, startEdit, selectVisibleProducts } from "./productSlice";
import { gsap } from "gsap";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectVisibleProducts);
  const status = useSelector((s) => s.products.status);
  const listRef = useRef();

  useEffect(() => {
    if (listRef.current) {
      gsap.from(listRef.current.children, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 });
    }
  }, [products]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>Products</h2>
      {products.length === 0 ? <p>No products found.</p> : null}

      <ul ref={listRef} style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {products.map((p) => (
          <li key={p.id} className="card">
            <strong>{p.name}</strong> — {p.category} — ${p.price}
            <div style={{ marginTop: 8 }}>{p.description}</div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button onClick={() => dispatch(startEdit(p))}>Edit</button>
              <button style={{ backgroundColor: "#e74c3c" }} onClick={() => dispatch(deleteProduct(p.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
