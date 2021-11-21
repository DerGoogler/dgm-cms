import * as React from "react";
import { hot } from "react-hot-loader/root";
import DocumentMeta from "react-document-meta";
import config from "../../config";
import {
  typeCheck,
  setCookie,
  getCookie,
  removeCookie,
} from "../../misc/tools";
import Favicon from "react-favicon";
import OptionsInterface from "./interface";

class Options extends React.Component<OptionsInterface> {
  public componentDidMount() {
    const { title } = this.props;
    const thisTitle = title + config.base.afterTitle;
    document.title = thisTitle;
    setCookie("title", thisTitle);
  }

  public componentWillUnmount() {
    removeCookie("title");
  }

  public render() {
    const { title, description, canonical, keywords, favicon, children } =
      this.props;
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
