import React, { useState } from "react";
import GreetingComponent from "./GreetingComponent";

function App() {
    const [count, setCount] = useState(0);

    // Functions to update the state
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => {
        if (count > 0) setCount(count - 1);
    };
    const resetCount = () => setCount(0);

    // Array of names
    const names = ["Karan", "John", "Jane", "Alice"];

    return (
        <div>
            {/* Map over the array of names */}
            {names.map((name, index) => (
                <GreetingComponent
                    key={index} // Key is important for unique identification
                    firstname={name}
                    count={count}
                    increase={increaseCount}
                    decrease={decreaseCount}
                    reset={resetCount}
                />
            ))}
        </div>
    );
}

export default App;
