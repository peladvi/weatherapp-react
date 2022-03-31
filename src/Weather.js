import React from "react";
import "./App.css";
import "./weather.css";
import Icon from "./Icon";

export default function Weather() {
  return (
    <section className="Weather">
      <h1>What's your weather?</h1>

      <form className="Search">
        <input
          type="text"
          placeholder="Enter a city"
          className="search-input"
          id="search-input"
          autocomplete="off"
          autofocus="on"
        />
        <input type="submit" value="Search" className="button" />
        <button className="button">Current location</button>
      </form>

      <div class="row">
        <div className="col-6">
          <h2 className="city">Naples</h2>
          <div className="today">Tuesday 11:05</div>
          <h2>
            <span className="temperature">15</span>
            <span className="units">°C</span>
          </h2>
          <strong className="description">Clear Sky</strong>
          <div className="humidity"> Humidity: 60%</div>
          <div className="wind-speed">Wind Speed: 5m/s</div>
        </div>
        <Icon />
      </div>
    </section>
  );
}
