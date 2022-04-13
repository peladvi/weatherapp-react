import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./weather.css";
import Current from "./Current.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.default);

  function handleResponse(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiKey = "8eb7f3f034269183b816909ef02f15a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.loaded) {
    return (
      <div>
        <form className="Search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="search-input"
            autoComplete="off"
            autoFocus="true"
            onChange={handleCity}
          />

          <input type="submit" value="Search" className="button" />
        </form>

        <Current data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    searchCity();
  }
}
