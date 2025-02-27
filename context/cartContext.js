"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        { id: '67bea01f5ffad97324a715d5', name: 'pizza-1', price: 100, amount: 3 },
        { id: '67bea0275ffad97324a715d7', name: 'pizza-2', price: 200, amount: 1 }
    ]);


    // add to cart context 
    const addToCart = ({ id, name, price }) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === id);
            if (existingItem) {
                // Increment amount if the item already exists
                return prevCart.map((item) =>
                    item.id === id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            } else {
                // Add new item with amount = 1
                return [...prevCart, { id, name, price, amount: 1 }];
            }
        });
    };

    // remove from cart context    
    const removeFromCart = (id) => {
        setCart((prevCart) => {


            return prevCart.map((item) =>
                (item.id === id && item.amount > 1)
                    ? { ...item, amount: item.amount - 1 }
                    : item
            );

        });
    };

    // remove item from cart 
    const removeItemFromCart = (id) => {
        setCart((prevCart) => {
               return prevCart.filter((item) => item.id !== id);
        });
    };



    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, removeItemFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
