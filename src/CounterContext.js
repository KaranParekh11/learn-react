import React, { createContext, useState, useContext } from "react";

// Create a context
const CounterContext = createContext();

// Context provider component
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => {
        if (count > 0) setCount(count - 1);
    };
    const resetCount = () => setCount(0);

    return (
        <CounterContext.Provider value={{ count, increaseCount, decreaseCount, resetCount }}>
            {children}
        </CounterContext.Provider>
    );
};

// Custom hook for consuming the context
export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};
