import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/global.css";
import "milligram/dist/milligram.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
