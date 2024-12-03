import React, { createContext, useState } from "react";

// Create the Context
export const GlobalContext = createContext();

// Create a Provider component
export function GlobalProvider({ children }) {
    const [globalCount, setGlobalCount] = useState(0);

    const increaseGlobalCount = () => setGlobalCount(globalCount + 1);
    const decreaseGlobalCount = () => {
        if (globalCount > 0) setGlobalCount(globalCount - 1);
    };
    const resetGlobalCount = () => setGlobalCount(0);

    return (
        <GlobalContext.Provider
            value={{
                globalCount,
                increaseGlobalCount,
                decreaseGlobalCount,
                resetGlobalCount,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
