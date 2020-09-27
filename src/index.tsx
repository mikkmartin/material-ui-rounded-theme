import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <div>
    <App />
    <img src="design.svg" alt="" />
  </div>,
  rootElement
);
