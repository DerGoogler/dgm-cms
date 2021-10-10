import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ons from "onsenui";
import App from "./App";
import { isIE, isIOS, isSafari, isMobileSafari } from "react-device-detect";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./misc/styles/styles.custom.css";
import "./misc/styles/github-markdown.css";

var mountNode = document.getElementById("app");

// Build App
ons.ready(function () {
  if (isIOS || isMobileSafari || isSafari) {
    window.open("https://www.apple.com/");
  } else if (isIE) {
    window.open("https://www.google.com/chrome/");
  } else {
    ReactDOM.render(<App />, mountNode);
  }
});
