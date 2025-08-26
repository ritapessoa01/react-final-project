import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
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

  function search() {
    const apiKey = "43465c40f4c5d3a735b5b8tbed06aoae";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-9">
              <input
                className="search w-100"
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input className="button w-100" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
