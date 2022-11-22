import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/page1/Homepage";

import "./assets/css/reset.css";
import "./assets/css/normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
