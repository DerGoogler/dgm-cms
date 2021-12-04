import React from "react";
import ReactDOM from "react-dom";
import AndroidEditor from "./android/App";
import WindowsEditor from "./windows/App";
import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/xq-light.css";
import "codemirror/mode/markdown/markdown";
import "./../../styles/onsen-css-components.css";
import "./../../styles/editor.css";
import "react-windows-ui/config/app-config.css";
import "react-windows-ui/dist/react-windows-ui.min.css";
import "react-windows-ui/icons/fonts/fonts.min.css";
import ons from "onsenui";
import { isDesktop } from "react-device-detect";
import CMSApp from "../../cms-elements/body";
import { ifCheck, getCookie } from "../../misc/tools";

ons.platform.select("android");

ons.ready(() => {
  if (ifCheck(getCookie("FirstTimeOpen"))) {
    alert("No fist time open was detectet. Please open the main page first, do want open it now?");
  } else {
    customElements.define("cms-app", CMSApp);
    var domNode = document.querySelector("cms-app");
    if (isDesktop) {
      ReactDOM.render(<WindowsEditor />, domNode);
    } else {
      ReactDOM.render(<AndroidEditor />, domNode);
    }
  }
});
