import * as React from "react";
import { hot } from "react-hot-loader/root";
import { OptionsInterface } from "../d/interface";
import DocumentMeta from "react-document-meta";
import Cookies from "universal-cookie";
import config from "./../config";
import { typeCheck } from "../misc/tools";
import Favicon from "react-favicon";

class Options extends React.Component<OptionsInterface> {
  public cookies = new Cookies();

  public componentDidMount() {
    const { title } = this.props;
    document.title = title + config.base.afterTitle;
    this.cookies.set("title", title + config.base.afterTitle, { path: "/" });
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
