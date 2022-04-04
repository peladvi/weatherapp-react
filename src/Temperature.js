import React from "react";

export default function Temperature(props) {
  return (
    <h2>
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </h2>
  );
}
