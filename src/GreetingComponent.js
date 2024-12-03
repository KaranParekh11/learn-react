import React, { useState } from "react";

function GreetingComponent(props) {
    const [count, setCount] = useState(0);

    // Function to increase the local and global counters
    const increaseCount = () => {
        setCount(count + 1); // Update local count
        props.updateGlobal(1); // Update global count
    };

    // Function to decrease the local and global counters
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1); // Update local count
            props.updateGlobal(-1); // Update global count
        }
    };

    // Function to reset the local counter
    const resetCount = () => {
        props.updateGlobal(-count); // Subtract the current local count from global count
        setCount(0); // Reset local count
    };

    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Local Count: {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    );
}

export default GreetingComponent;
