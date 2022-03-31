import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./weather.css";
import Icon from "./Icon";
import Today from "./Today";

export default function Weather() {
  let city = "Naples";
  const [weather, setWeather] = useState({ loaded: false });

  function handleResponse(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weather.loaded) {
    return (
      <div>
        <form className="Search">
          <input
            type="text"
            placeholder="Enter a city"
            className="search-input"
            autocomplete="off"
            autofocus="on"
          />
          <input type="submit" value="Search" className="button" />
          <button className="button">Current location</button>
        </form>

        <div class="row">
          <div className="col-6">
            <h2 className="city">Naples</h2>
            <div className="today">
              <Today date={weather.date} />
            </div>
            <h2>
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="units">°C</span>
            </h2>
            <strong className="description">{weather.description}</strong>
            <div className="humidity">Humidity: {weather.humidity}%</div>
            <div className="wind-speed">
              Wind Speed: {Math.round(weather.wind)}m/s
            </div>
          </div>
          <Icon />
        </div>
      </div>
    );
  } else {
    const apiKey = "8eb7f3f034269183b816909ef02f15a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
