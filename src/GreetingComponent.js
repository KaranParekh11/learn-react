import React, {useState} from "react";

function GreetingComponent(props) {
    const [count, setCount] = useState(0);

    // Functions to update the state
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => {
        if (count > 0) setCount(count - 1);
    };
    const resetCount = () => setCount(0);
    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Shared Count: {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={resetCount}>Reset Count</button>
            {count > 5 && <p style={{ color: "green" }}>Count is High!</p>}
            {count <= 2 && <p style={{ color: "red" }}>Count is Low!</p>}
        </div>
    );
}

export default GreetingComponent;
