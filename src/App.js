import React from "react";
import { CounterProvider } from "./CounterContext";
import GreetingComponent from "./GreetingComponent";

function App() {
    return (
        <CounterProvider>
            <div>
                <GreetingComponent firstname="Karan" />
                <GreetingComponent firstname="John" />
                <GreetingComponent firstname="Alice" />
            </div>
        </CounterProvider>
    );
}

export default App;
