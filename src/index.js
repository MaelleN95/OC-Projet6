import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
