import React from "react";
import { useStore } from "../context/Store"; 

export default function Cart() {
  const { state, dispatch } = useStore();

  const total = state.cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <div>
      <h2>Panier</h2>
      {state.cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {state.cart.map(item => (
              <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center", border: "1px solid #eee", padding: 8, borderRadius: 6 }}>
                <img src={item.img} alt={item.name} style={{ width: 80, height: 80, objectFit: "cover" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong>{item.name}</strong>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: Math.max(1, item.qty - 1) } })}>-</button>
                    <span style={{ margin: "0 8px" }}>{item.qty}</span>
                    <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: item.qty + 1 } })}>+</button>
                    <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } })} style={{ marginLeft: 12 }}>Retirer</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Vider le panier</button>
          </div>
        </>
      )}
    </div>
  );
}
