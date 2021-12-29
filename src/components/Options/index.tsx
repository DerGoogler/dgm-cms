import * as React from "react";
import { hot } from "react-hot-loader/root";
import DocumentMeta from "react-document-meta";
import config from "../../config";
import { typeCheck, setCookie, getCookie, removeCookie } from "../../misc/tools";
import Favicon from "react-favicon";
import OptionsInterface from "./interface";
import ReactDOM from "react-dom";

// @ts-ignore
const sourceURL = new URL(document.currentScript.src);
const params = sourceURL.searchParams;

class Options extends React.Component<OptionsInterface> {
  private element!: HTMLElement | null;

  public componentWillMount() {
    const { title, showFab, renderPlain, children } = this.props;
    if (renderPlain === true) {
      document.body.style.backgroundColor = "#fff";
      ReactDOM.render(<>{children}</>, document.body);
    }
    const thisTitle = typeCheck(params.get("title"), title + config.base.afterTitle);
    document.title = thisTitle;
    setCookie("title", thisTitle);
    if ((this.element = document.getElementById("scrollToTop"))) {
      if (showFab === true) {
        this.element.style.display = "block";
      }
    }
  }

  public componentWillUnmount() {
    removeCookie("title");
  }

  public render() {
    const { title, description, canonical, keywords, favicon, children } = this.props;
    const meta = {
      title: title + config.base.afterTitle,
      description: description,
      canonical: canonical,
      meta: {
        charset: "utf-8",
        name: {
          keywords: keywords,
        },
      },
    };
    return (
      <>
        <Favicon url={typeCheck(favicon, config.base.defaultFavicon)} />
        <DocumentMeta {...meta}>{children}</DocumentMeta>
      </>
    );
  }
}

export default hot(Options);
