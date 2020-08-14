import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <App />
  </>,
  document.querySelector("#root")
);

serviceWorker.unregister();
