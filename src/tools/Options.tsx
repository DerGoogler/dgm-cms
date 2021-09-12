import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { OptionsInterface } from "../interface";
import DocumentMeta from "react-document-meta";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Options extends React.Component<OptionsInterface> {
  componentDidMount() {
    const { title, platform, cardView } = this.props;
    document.title = title;
    ons.platform.select(platform);
    cookies.set("title", title, { path: "/" });
    cookies.set("cardView", cardView, { path: "/" });
  }

  render() {
    const { title, description, canonical, keywords } = this.props;
    const meta = {
      title: title,
      description: description,
      canonical: canonical,
      meta: {
        charset: "utf-8",
        name: {
          // usage: react,lol,cats
          keywords: keywords,
        },
      },
    };
    return (
      <>
        <DocumentMeta {...meta}>{this.props.children}</DocumentMeta>
      </>
    );
  }
}

export default hot(Options);
