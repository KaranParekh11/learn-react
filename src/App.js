import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./Store";
import GreetingComponent from "./GreetingComponent";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    {/* Navigation Links */}
                    <nav>
                        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link>
                    </nav>
                    {/* Define Routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/users"
                            element={
                                <div>
                                    <GreetingComponent firstname="Karan" />
                                </div>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
