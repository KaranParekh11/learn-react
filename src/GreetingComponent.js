import React from "react";
import { useCounter } from "./CounterContext";

function GreetingComponent(props) {
    const { count, increaseCount, decreaseCount, resetCount } = useCounter();

    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Counter: {count}</p>
            <button onClick={() => increaseCount()}>Increase Count</button>
            <button onClick={() => decreaseCount()}>Decrease Count</button>
            <button onClick={() => resetCount()}>Reset Count</button>
            {count > 5 && <p style={{ color: "green" }}>Count is High!</p>}
            {count <= 2 && <p style={{ color: "red" }}>Count is Low!</p>}
        </div>
    );
}

export default GreetingComponent;
