import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_AMOUNT" });
  }, [state.Cart]);

  return (
    <div className="p-3 border rounded w-50">
      <h4>🛒 Panier</h4>

      {state.Cart.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <>
          {state.Cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.qte}
                onChange={(e) =>
                  dispatch({
                    type: "MODIFY_QTE",
                    payload: { id: item.id, qte: +e.target.value },
                  })
                }
              />
              <button
                className="btn btn-danger btn-sm"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Supprimer
              </button>
            </div>
          ))}

          <h5 className="mt-3">💰 Total : {state.totalAmount} DH</h5>

          <button
            className="btn btn-warning mt-2"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Vider le panier
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
