import { createContext, createRef, useContext, useReducer } from "react";

const initialValue = {

    cart:[]
}

const CartContext = createContext(initialValue);

const CartProvider = ({children}) => {
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext)