import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/mode/markdown/markdown";
import "./../../styles/onsen-css-components.css";
import ons from "onsenui";
import CMSApp from "../../cms-elements/body";

ons.platform.select("android");

customElements.define("cms-app", CMSApp);
ReactDOM.render(<App />, document.querySelector("cms-app"));
