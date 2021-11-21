import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css"
import "codemirror/theme/darcula.css"
import "codemirror/mode/markdown/markdown"
import "./../../styles/onsen-css-components.css";
import "./../../styles/editor.css";
import ons from "onsenui";

ons.platform.select("android");

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
