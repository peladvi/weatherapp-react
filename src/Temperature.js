import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <h2>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C|{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </h2>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h2>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          |°F
        </span>
      </h2>
    );
  }
}