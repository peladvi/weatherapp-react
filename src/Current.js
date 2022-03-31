import React from "react";
import Icon from "./Icon.js";
import Today from "./Today";

export default function Current(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2 className="city">{props.data.city}</h2>
        <div className="today">
          <Today date={props.data.date} />
        </div>
        <h2>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </h2>
        <strong className="description">{props.data.description}</strong>
        <div className="humidity">Humidity: {props.data.humidity}%</div>
        <div className="wind-speed">
          Wind Speed: {Math.round(props.data.wind)}m/s
        </div>
      </div>
      <Icon />
    </div>
  );
}
