import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/onsen-css-components.css";
import "./styles/banned.screen.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ons from "onsenui";
import eruda from "eruda";
import App from "./App";
import { download, logger } from "./misc/tools";
import config from "./config";
import {
  isIE,
  isIOS,
  isSafari,
  isMobileSafari,
  isAndroid,
} from "react-device-detect";

class index {
  private mountNode = document.getElementById("app");
  private iOS: string = "https://www.apple.com/";
  private iE: string = "https://www.google.com/chrome/";
  private platform: any = ons.platform;

  public constructor(platform = config.base.platform) {
    this.platform.select(platform);
  }

  private errorCheck(error: any) {
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

  private checkDevice(value: Function) {
    if (isIOS || isMobileSafari || isSafari) {
      window.open(this.iOS);
    } else if (isIE) {
      window.open(this.iE);
    } else {
      try {
        if (typeof value == "function") {
          value();
        }
      } catch (error) {
        this.errorCheck(error);
      }
    }
  }

  private loadContent(mount: any) {
    ReactDOM.render(<App />, mount);
  }

  public init() {
    this.loadContent(this.mountNode);
  }
}

// Build App
ons.ready(function () {
  new index().init();
});
