import React, { createContext, useState } from "react";

// Create the context
export const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
    // Use an object to store the count for each user
    const [counts, setCounts] = useState({});

    const increase = (name) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [name]: (prevCounts[name] || 0) + 1,
        }));
    };

    const decrease = (name) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [name]: (prevCounts[name] > 0 ? prevCounts[name] - 1 : 0),
        }));
    };

    const reset = (name) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [name]: 0,
        }));
    };

    return (
        <CounterContext.Provider value={{ counts, increase, decrease, reset }}>
            {children}
        </CounterContext.Provider>
    );
};
