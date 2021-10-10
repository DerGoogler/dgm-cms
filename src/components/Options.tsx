import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { OptionsInterface } from "../interface";
import DocumentMeta from "react-document-meta";
import Cookies from "universal-cookie";
import config from "./../config";
import { typeCheck } from "../misc/others/tools";
import snowflakesRAIN from "../misc/view/snowflakes";
import fireworksSHOWER from "../misc/view/fireworks";

const cookies = new Cookies();

class Options extends React.Component<OptionsInterface> {
  componentDidMount() {
    const { title, platform, cardView, rainType, rainTypeChar } = this.props;
    document.title = title + config.base.aftertitle;
    ons.platform.select(platform);
    cookies.set("title", title + config.base.aftertitle, { path: "/" });
    cookies.set("cardView", typeCheck(cardView, "yes"), { path: "/" });
    cookies.set("rainTypeChar", typeCheck(rainTypeChar, "*"), { path: "/" });
    switch (rainType) {
      case "snowflakes":
        snowflakesRAIN.init();
        break;
      case "fireworks":
        fireworksSHOWER.init();
        break;
    }
  }

  render() {
    const { title, description, canonical, keywords } = this.props;
    const meta = {
      title: title + config.base.aftertitle,
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
