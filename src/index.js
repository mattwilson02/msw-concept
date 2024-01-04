import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { serviceWorker } from "./mocks/browser";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );

const shouldMock = true;

if (shouldMock) {
  serviceWorker.start();
  render();
} else {
  render();
}
