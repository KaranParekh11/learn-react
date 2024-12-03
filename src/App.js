import React from "react";
import GreetingComponent from "./GreetingComponent";
import { GlobalProvider } from "./GlobalContext";

function App() {
    const names = ["Karan", "John", "Jane", "Alice"];

    return (
        <GlobalProvider>
            <div>
                {/* Map over the array of names */}
                {names.map((name, index) => (
                    <GreetingComponent key={index} firstname={name} />
                ))}
            </div>
        </GlobalProvider>
    );
}

export default App;
