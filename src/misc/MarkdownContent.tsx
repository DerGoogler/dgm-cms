import * as React from "react";
import { Card } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import Markdown from "markdown-to-jsx";
import { MarkdownContentInterface } from "../interface";
import { override } from "../markdown.overrides";

const cookies = new Cookies();

class MarkdownContent extends React.Component<MarkdownContentInterface> {
  render() {
    const { data } = this.props;
    if (cookies.get("cardView") === "no") {
      return (
        <article className="markdown-body">
          <Markdown options={override}>{data}</Markdown>
        </article>
      );
    } else {
      return (
        <Card>
          <article className="markdown-body">
            <Markdown options={override}>{data}</Markdown>
          </article>
        </Card>
      );
    }
  }
}

export default hot(MarkdownContent);
