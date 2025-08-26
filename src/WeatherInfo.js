import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
          <div className="current-weather">
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">°C |°F</span>
            <span className="extra-info">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="col-6">
          <h1 className="fw-bold">{props.data.city}</h1>
          <h2>{props.data.country}</h2>
          <p className="text-capitalize">
            <FormattedDate date={props.data.date} />
            <br />
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
