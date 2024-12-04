import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const CounterContext = createContext();

// Helper function to fetch the initial value from local storage
const getInitialCount = () => {
    const storedCount = localStorage.getItem("counter");
    return storedCount ? parseInt(storedCount, 10) : 0; // Default to 0 if no value is stored
};

// Provider component
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(getInitialCount);

    // Sync state with local storage whenever count changes
    useEffect(() => {
        localStorage.setItem("counter", count);
    }, [count]);

    // Counter manipulation functions
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
