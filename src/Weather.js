import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row">
        <input className="col-9" type="search" placeholder="Enter a city..." />
        <input className="col-3" type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="weather image"
          />
          <h3>25 °C</h3>
          <ul>
            <li>Humidity: 30%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>Lisbon</h1>
          <h2>Portugal</h2>
          <p>
            Tuesday, 21:00
            <br />
            clear sky
          </p>
        </div>
      </div>
    </div>
  );
}
