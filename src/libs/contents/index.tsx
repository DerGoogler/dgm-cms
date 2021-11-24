import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/mode/markdown/markdown";
import "./../../styles/onsen-css-components.css";
import ons from "onsenui";

ons.platform.select("android");

ReactDOM.render(<App />, document.body);
