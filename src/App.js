import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import GreetingComponent from "./GreetingComponent";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import {CounterProvider} from "./CounterContext";

function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link>
            </nav>
            <hr />
            {children}
        </div>
    );
}

function App() {
    return (
        <CounterProvider>
            <Router>
                <Layout>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/users" element={<GreetingComponent firstname="Karan" />} />
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </CounterProvider>
    );
}

export default App;
