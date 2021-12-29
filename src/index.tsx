import "onsenui/css/onsenui.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/onsen-css-components.css";
import "./styles/banned.screen.css";
import "./styles/styles.custom.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ons from "onsenui";
import eruda from "eruda";
import App from "./views/App";
import { download, getCookie, ifCheck, setCookie } from "./misc/tools";
import config from "./config";
import { isIE, isIOS, isSafari, isMobileSafari, isAndroid } from "react-device-detect";
import * as serviceWorker from "./service-worker";
import CMSApp from "./cms-elements/body";

class index {
  private elementNodeName: string = "cms-app";
  private mountNode = document.querySelector(this.elementNodeName);
  private iOS: string = "https://www.apple.com/";
  private iE: string = "https://www.google.com/chrome/";
  private platform: any = ons.platform;
  private element!: HTMLElement | null;

  public constructor(platform = config.base.platform) {
    this.platform.select(platform);
  }

  private errorCheck(error: any) {
    if (isAndroid) {
      download(error, "pageError.console.txt", function () {
        alert("Thanks for downloding. Please report this log to an github issue");
        if (confirm(`Do you want open an issue?`)) {
          window.open("https://github.com/DerGoogler/dgm-cms/issues/new");
        }
      });
      eruda.init();
    } else {
      alert("In this pages was an error detected, please view in the console to report the error!");
      console.info(console.log("red", "ERROR") + "Eruda can't opened, you're not on Android!");
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

  private loadContent(element: JSX.Element, mount: any) {
    ReactDOM.render(element, mount);
  }

  private initElements(elements: any) {
    return elements.map((element: { node: string; core: any }) => {
      return customElements.define(element.node, element.core);
    });
  }

  private initCookies(cookies: any) {
    if (ifCheck(getCookie("FirstTimeOpen"))) {
      setCookie("FirstTimeOpen", true);
    } else {
      return cookies.map((element: { key: string; value: any }) => {
        return setCookie(element.key, element.value);
      });
    }
  }

  public init() {
    this.initElements([
      {
        node: this.elementNodeName,
        core: CMSApp,
      },
    ]);

    this.initCookies([
      { key: "DGMarkdownValueHome", value: "" },
      { key: "DGMarkdownValueHeader", value: "" },
      { key: "DGMarkdownValueFooter", value: "" },
      { key: "DMG-Editor-Language", value: "markdown" },
    ]);

    this.loadContent(<App />, this.mountNode);
    serviceWorker.register();
  }
}

// Build App
ons.ready(function () {
  new index().init();
});
