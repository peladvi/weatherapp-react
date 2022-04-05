import React from "react";
import Icon from "./Icon.js";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={35} />

      <div>
        <span className="Forecast-max">{maxTemp()} </span>
        <span className="Forecast-min">{minTemp()}</span>
      </div>
    </div>
  );
}
