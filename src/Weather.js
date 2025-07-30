import React from "react";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather() {
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
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="weather image"
          />
          <div className="current-weather">
            <span className="current-temperature">25</span>{" "}
            <span className="unit">°C | °F</span>
            <span className="extra-info">
              <ul>
                <li>Humidity: 30%</li>
                <li>Wind: 10 km/h</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="col-6">
          <h1 className="fw-bold">Lisbon</h1>
          <h2>Portugal</h2>
          <p>
            Tuesday, 21:00
            <br />
            clear sky
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
