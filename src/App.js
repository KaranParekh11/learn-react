import React, { useState } from "react";
import GreetingComponent from "./GreetingComponent";

function App() {
   

    // Array of names
    const names = ["Karan", "John", "Jane", "Alice"];

    return (
        <div>
            {/* Map over the array of names */}
            {names.map((name, index) => (
                <GreetingComponent
                    key={index} // Key is important for unique identification
                    firstname={name}
                />
            ))}
        </div>
    );
}

export default App;
