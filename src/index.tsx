import * as React from "react";
import * as ReactDOM from "react-dom";
import ons from "onsenui";
import eruda from "eruda";
import App from "./App";
import Halloween from "./events/Halloween";
import { cooldown, download, logger } from "./misc/others/tools";
import {
  isIE,
  isIOS,
  isSafari,
  isMobileSafari,
  isAndroid,
} from "react-device-detect";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./misc/styles/styles.custom.css";
import "./misc/styles/github-markdown.css";
import "./misc/styles/banned.screen.css";
import "./events/Halloween.css";
import config from "./config";

const mountNode = document.getElementById("app");

// Build App
ons.ready(function () {
  ons.platform.select(config.base.platform);
  if (isIOS || isMobileSafari || isSafari) {
    window.open("https://www.apple.com/");
  } else if (isIE) {
    window.open("https://www.google.com/chrome/");
  } else {
    try {
      cooldown("Oct 30, 2021 00:00:00", function (date: string) {
        ReactDOM.render(<Halloween />, mountNode);
        console.log(logger("green", "UPDATE") + "HALLOWEEN");
      });
      ReactDOM.render(<App />, mountNode);
    } catch (error) {
      if (isAndroid) {
        download(error, "pageError.console.txt", function () {
          alert(
            "Thanks for downloding. Please report this log to an github issue"
          );
          if (confirm(`Do you want open an issue?`)) {
            window.open("https://github.com/DerGoogler/dgm-cms/issues/new");
          }
        });
        eruda.init();
      } else {
        alert(
          "In this pages was an error detected, please view in the console to report the error!"
        );
        console.info(
          logger("red", "ERROR") + "Eruda can't opened, you're not on Android!"
        );
      }
    }
  }
});
