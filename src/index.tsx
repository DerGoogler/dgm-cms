import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.custom.css";
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
  isDesktop,
} from "react-device-detect";
import Desktop from "./desktop/Desktop";

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

  private loadAndroid(mount: any) {
    ReactDOM.render(<App />, mount);
  }

  private loadDesktop(mount: any) {
    ReactDOM.render(<Desktop />, mount);
  }

  public init() {
    this.checkDevice(() => {
      if (isDesktop) {
        this.loadDesktop(this.mountNode);
      } else {
        this.loadAndroid(this.mountNode);
      }
    });
  }
}

// Build App
ons.ready(function () {
  new index().init();
});
