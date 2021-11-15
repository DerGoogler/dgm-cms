import * as React from "react";
import { Card } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import Markdown from "markdown-to-jsx";
import { MarkdownContentInterface } from "../d/interface";
import { isAndroid, isDesktop } from "react-device-detect";
import { override } from "./overrides/markdown.overrides";
import "./../styles/github-markdown.css";
import { typeIf } from "./tools";

const cookies = new Cookies();

class MarkdownContent extends React.Component<MarkdownContentInterface> {
  public render() {
    const { data } = this.props;
    if (cookies.get("cardView") === "no") {
      return (
        <article className="markdown-body">
          <Markdown options={override}>{data}</Markdown>
        </article>
      );
    } else {
      return (
        <Card style={typeIf(isDesktop, { padding: "16px" }, null)}>
          <article
            className={typeIf(isDesktop, "markdown-body_", "markdown-body")}
          >
            <Markdown options={override}>{data}</Markdown>
          </article>
        </Card>
      );
    }
  }
}

export default hot(MarkdownContent);
