import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="container">
      <div className="App">
        <section className="Weather">
          <h1>What's your weather?</h1>
          <Weather default="Warsaw" />
        </section>
        <footer>
          <a
            href="https://github.com/peladvi/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code,
          </a>
          <span> by Paula Ladwiniec </span>
        </footer>
      </div>
    </div>
  );
}
export default App;
