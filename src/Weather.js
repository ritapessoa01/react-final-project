import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mb-4">
            <div className="col-9">
              <input
                className="search w-100"
                type="search"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-3">
              <input className="button w-100" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="current-weather">
              <span className="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C |°F</span>
              <span className="extra-info">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="col-6">
            <h1 className="fw-bold">{weatherData.city}</h1>
            <h2>{weatherData.country}</h2>
            <p className="text-capitalize">
              <FormattedDate date={weatherData.date} />
              <br />
              {weatherData.description}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "43465c40f4c5d3a735b5b8tbed06aoae";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
