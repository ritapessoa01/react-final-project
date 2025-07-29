import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/ritapessoa01"
            target="_blank"
            rel="noreferrer"
          >
            Rita Pessoa
          </a>
          , it is{" "}
          <a
            href="https://github.com/ritapessoa01/react-final-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ritas-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
