import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import background from "./green-sky.jpg";

function App() {
  return (
    <div className="container">
      <div className="App">
        <section
          className="Weather"
          style={{ background: `url(${background})` }}
        >
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
