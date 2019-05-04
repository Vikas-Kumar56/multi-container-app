import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="">Other Page</Link>
        </header>
        <div style={{ marginTop: "20px" }}>
          <Route path="/other" exact component={OtherPage} />
          <Route path="/" component={Fib} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
