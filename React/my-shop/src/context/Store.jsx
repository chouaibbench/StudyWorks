import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState} from "../reducer/cartReducer";

const StoreContext = createContext() ;

export function StoreProvider ({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch}}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    return useContext(StoreContext);
}