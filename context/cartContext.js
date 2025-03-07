"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
       
    ]);

    const [selected, setSelected] = useState([
        
    ])

    const [selectedPizzaTotalPrice, setSelectedPizzaTotalPrice] = useState(0)


    // add to cart context 
    const addToCart = ({ id, name, price }) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === id);
            if (existingItem) {
                // Increment quantity if the item already exists
                return prevCart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new item with quantity = 1
                return [...prevCart, { id, name, price, quantity: 1 }];
            }
        });
    };

    // remove from cart context    
    const removeFromCart = (id) => {
        setCart((prevCart) => {


            return prevCart.map((item) =>
                (item.id === id && item.quantity > 1)
                    ? { ...item, quantity: item.quantity - 1 }
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

    const selectedFromCart =  cart.filter((item) => selected.includes(item.id));


    const clearCart = () => {
        setCart([]);
    };

    // const selectCart = () => {
    //     setSelected([]);
    // };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, removeItemFromCart, clearCart, selected, setSelected,selectedFromCart, selectedPizzaTotalPrice, setSelectedPizzaTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
