import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";

export default function Header() {
    const {state} = useStore();
    const totalQty = state.cart.reduce((s, p) => s+ p.qty, 0);

    return (
    <header style={{ display: "flex", alignItems: "center", gap: 20, padding: 16, borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: 20 }}>MyShop</Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          Cart ({totalQty})
        </Link>
      </div>
    </header>
    )
}