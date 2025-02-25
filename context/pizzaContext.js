"use client";
import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizza, setPizza] = useState([]); // Set initial state to an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizzaData = async () => { 
            try {
                const res = await fetch("/api/pizza");
                if (!res.ok) throw new Error("Failed to fetch pizza data");
                const data = await res.json();
                setPizza(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzaData();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizza, loading }}>
            {children}
        </PizzaContext.Provider>
    );
};
