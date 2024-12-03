import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function GreetingComponent({ firstname }) {
    // Consume the context
    const { counts, increase, decrease, reset } = useContext(CounterContext);

    return (
        <div>
            <h1>Hello, {firstname}!</h1>
            <p>Counter: {counts[firstname] || 0}</p>
            <button onClick={() => increase(firstname)}>Increase Count</button>
            <button onClick={() => decrease(firstname)}>Decrease Count</button>
            <button onClick={() => reset(firstname)}>Reset Count</button>
            {counts[firstname] > 5 && <p style={{ color: "green" }}>Count is High!</p>}
            {counts[firstname] <= 2 && <p style={{ color: "red" }}>Count is Low!</p>}
        </div>
    );
}

export default GreetingComponent;
