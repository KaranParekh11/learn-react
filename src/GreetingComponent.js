import React from "react";

function GreetingComponent(props) {
    return (
        <div>
            <h1>Hello, {props.firstname}!</h1>
            <p>Shared Count: {props.count}</p>
            <button onClick={props.increase}>Increase Count</button>
            <button onClick={props.decrease}>Decrease Count</button>
            <button onClick={props.reset}>Reset Count</button>
            {props.count > 5 && <p style={{ color: "green" }}>Count is High!</p>}
            {props.count <= 2 && <p style={{ color: "red" }}>Count is Low!</p>}
        </div>
    );
}

export default GreetingComponent;
