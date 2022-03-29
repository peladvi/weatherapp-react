import React from "react";
import "./current.css";

export default function Current() {
  return (
    <div class="col-6">
      <h2 class="city" id="city">
        Naples
      </h2>
      <div class="today" id="today">
        Tuesday
      </div>
      <div class="time" id="time">
        11:05
      </div>
      <h2>
        <span class="temperature" id="temperature">
          15
        </span>
        <span class="units">°C</span>
      </h2>
      <strong class="description" id="description">
        Clear Sky
      </strong>
      <div class="humidity" id="humidity">
        {" "}
        Humidity: 60%
      </div>
      <div class="wind-speed" id="wind-speed">
        Wind Speed: 5m/s
      </div>
    </div>
  );
}
