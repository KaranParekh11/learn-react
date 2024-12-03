import React, { useState } from "react";
import GreetingComponent from "./GreetingComponent";

function App() {
    // State for the global counter
    const [globalCount, setGlobalCount] = useState(0);

    // Function to update the global counter
    const updateGlobalCount = (value) => {
        setGlobalCount(globalCount + value);
    };

    // Array of names
    const names = ["Karan", "John", "Jane", "Alice"];

    return (
        <div>
            {/* Global Counter Display */}
            <h1>Global Counter: {globalCount}</h1>

            {/* Map over the array of names */}
            {names.map((name, index) => (
                <GreetingComponent
                    key={index}
                    firstname={name}
                    updateGlobal={updateGlobalCount} // Pass the function as a prop
                />
            ))}
        </div>
    );
}

export default App;
