import React from "react";
import Icon from "./Icon.js";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}

  const apiKey = "8eb7f3f034269183b816909ef02f15a0";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
