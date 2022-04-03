import React from "react";
import Icon from "./Icon.js";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day"> Mon</div>
          <Icon code="01d" size={35} />

          <div>
            {" "}
            <span className="Forecast-max">3°C </span>
            <span classNAme="Forecast-min">1°C</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
