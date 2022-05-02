import React from "react";
import Icon from "./Icon.js";
import Today from "./Today";
import Temperature from "./Temperature";

export default function Current(props) {
  return (
    <div>
      <div>
        <h2 className="city">{props.data.city}</h2>
      </div>
      <div className="today">
        <Today date={props.data.date} />
      </div>
      <Temperature celsius={props.data.temperature} />
      <hr />
      <div>
        <Icon code={props.data.icon} size={100} className="img-fluid" />
      </div>
      <hr />
      <strong className="description">{props.data.description}</strong>
      <div className="humidity">Humidity: {props.data.humidity}%</div>
      <div className="wind-speed">
        Wind Speed: {Math.round(props.data.wind)}m/s
      </div>
    </div>
  );
}
