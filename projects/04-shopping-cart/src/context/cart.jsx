import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = ( product ) => {
        const productInCartIndex = cart.findIndex(elem => {
            console.log(elem.product.id === product.id);
            return elem.product.id === product.id
        })
        console.log({productInCartIndex});
        if(productInCartIndex === 0) {
            console.log('hola');
            const newCart = structuredClone(cart)
            console.log(newCart[productInCartIndex]);
            newCart[productInCartIndex].quantity ++
            return setCart[newCart]
        }
        
        setCart(prevState => ([
            ...prevState,
            {
                product,
                quantity: 1
            }
        ]))

    }
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}