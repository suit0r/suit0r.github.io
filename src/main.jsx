import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { BreakpointsProvider, ToggleProvider } from "$/contexts";

// styles
import "normalize.css";
import "./scss/ibm-plex.scss";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BreakpointsProvider>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </BreakpointsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
