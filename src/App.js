import logo from "./logo.svg";
import "./App.css";
import { useGetPokemonByNameQuery } from "./services/api";

function App() {
  const { data } = useGetPokemonByNameQuery();

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Proof of Concept</p>
        <a
          className="App-link"
          href="https://mswjs.io/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React + Mock Service Worker
        </a>
      </header>
    </div>
  );
}

export default App;
