import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const initialState = {
  produits: [
    { id: 1, name: "Ordinateur", price: 8000 },
    { id: 2, name: "Souris", price: 150 },
    { id: 3, name: "Clavier", price: 250 },
  ],
  Cart: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
