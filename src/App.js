import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div class="container">
      <div className="App">
        <Weather />
      </div>
      <footer>
        <a
          href="https://github.com/peladvi/weatherapp-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code,
        </a>
        <span> by Paula Ladwiniec | weather icons from </span>
        <a
          href="https://erikflowers.github.io/weather-icons/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </footer>
    </div>
  );
}
export default App;
