export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.Cart.find((p) => p.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          Cart: state.Cart.map((p) =>
            p.id === action.payload.id ? { ...p, qte: p.qte + 1 } : p
          ),
        };
      }
      return { ...state, Cart: [...state.Cart, { ...action.payload, qte: 1 }] };

    case "REMOVE_FROM_CART":
      return { ...state, Cart: state.Cart.filter((p) => p.id !== action.payload) };

    case "MODIFY_QTE":
      return {
        ...state,
        Cart: state.Cart.map((p) =>
          p.id === action.payload.id ? { ...p, qte: action.payload.qte } : p
        ),
      };

    case "CLEAR_CART":
      return { ...state, Cart: [] };

    case "GET_TOTAL_AMOUNT":
      const total = state.Cart.reduce(
        (acc, item) => acc + item.price * item.qte,
        0
      );
      return { ...state, totalAmount: total };

    default:
      return state;
  }
};
