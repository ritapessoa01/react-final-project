import React, { useState } from "react";

export default function (props) {
  const [unit, setUnit] = useState("celsius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="current-temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C |
          <a href="/" onClick={showF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="current-temperature">{Math.round(fahrenheit())}</span>{" "}
        <span className="unit">
          <a href="/" onClick={showC}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
