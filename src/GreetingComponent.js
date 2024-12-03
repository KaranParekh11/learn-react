import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function GreetingComponent(props) {
    // Access global values and functions from the context
    const { globalCount, increaseGlobalCount, decreaseGlobalCount, resetGlobalCount } =
        useContext(GlobalContext);

    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Global Count: {globalCount}</p>
            <button onClick={increaseGlobalCount}>Increase Global Count</button>
            <button onClick={decreaseGlobalCount}>Decrease Global Count</button>
            <button onClick={resetGlobalCount}>Reset Global Count</button>
        </div>
    );
}

export default GreetingComponent;
