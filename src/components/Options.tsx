import * as React from "react";
import * as ons from "onsenui";
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
    const { title, cardView } = this.props;
    document.title = title + config.base.aftertitle;
    this.cookies.set("title", title + config.base.aftertitle, { path: "/" });
    this.cookies.set("cardView", typeCheck(cardView, "yes"), { path: "/" });
  }

  public render() {
    const { title, description, canonical, keywords, favicon } = this.props;
    const meta = {
      title: title + config.base.aftertitle,
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
        <Favicon
          url={typeCheck(
            favicon,
            "https://avatars.githubusercontent.com/u/54764558?v=4"
          )}
        />
        <DocumentMeta {...meta}>{this.props.children}</DocumentMeta>
      </>
    );
  }
}

export default hot(Options);
