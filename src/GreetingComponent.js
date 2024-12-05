import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, resetCount } from "./Store";

function GreetingComponent(props) {
    const count = useSelector((state) => state.counter.count); // Access count from Redux state
    const dispatch = useDispatch(); // Get the dispatch function

    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increaseCount())}>Increase Count</button>
            <button onClick={() => dispatch(decreaseCount())}>Decrease Count</button>
            <button onClick={() => dispatch(resetCount())}>Reset Count</button>
            {count > 5 && <p style={{ color: "green" }}>Count is High!</p>}
            {count <= 2 && <p style={{ color: "red" }}>Count is Low!</p>}
        </div>
    );
}

export default GreetingComponent;
