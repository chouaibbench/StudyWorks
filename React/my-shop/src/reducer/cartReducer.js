export const initialState = {
    cart: []
};

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART" : {
            const item = action.payload;
            const exists = state.cart.find(p => p.id === item.id);
            if (exists) {
                return {
                    ...state,
                    cart: state.cart.map(p =>
                        p.id === item.id ? { ...p, qty: + (item.qty || 1)} : p
                    )
                };
            }else {
                return {
                    ...state,
                    cart: [...state.cart, { ...item, qty: item.qty || 1}]
                };
            }
        }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(p => p.id !== action.payload.id)
            };

            case "UPDATE_QTY":
                return {
                    ...state,
                    cart: state.cart.map(p =>
                        p.id === action.payload.id ? { ...p, qty: action.payload.qty } : p
                    )
                };

                case "CLEAR_CART":
                    return { ...state, cart: []};

                    default:
                        return state;
    }
}