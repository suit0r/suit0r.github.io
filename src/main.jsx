import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BreakpointsProvider, ToggleProvider } from "$/contexts";

// styles
import "normalize.css";
import "./scss/ibm-plex.scss";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BreakpointsProvider>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </BreakpointsProvider>
  </React.StrictMode>
);
