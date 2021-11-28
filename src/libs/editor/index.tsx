import React from "react";
import ReactDOM from "react-dom";
import Android from "./android/App";
import Windows from "./windows/App";
import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/darcula.css";
import "codemirror/mode/markdown/markdown";
import "./../../styles/onsen-css-components.css";
import "./../../styles/editor.css";
import "react-windows-ui/config/app-config.css";
import "react-windows-ui/dist/react-windows-ui.min.css";
import "react-windows-ui/icons/fonts/fonts.min.css";
import ons from "onsenui";
import { isDesktop } from "react-device-detect";

ons.platform.select("android");

ons.ready(() => {
  var domNode: HTMLElement = document.body;
  domNode.style.overflow = "auto";
  if (isDesktop) {
    ReactDOM.render(<Windows />, domNode);
  } else {
    ReactDOM.render(<Android />, domNode);
  }
});
