import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Component2 from "./Component2";
import Component3 from "./Component3";
import DomainSearch from "./asyncComponent";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <div className="component">
        <App />
      </div>
      <div className="component">
        <Component2 />
      </div>
      <div className="component">
        <Component3 />
      </div>
      <div className="component">
        <DomainSearch />
      </div>
    </div>
  </StrictMode>
);
