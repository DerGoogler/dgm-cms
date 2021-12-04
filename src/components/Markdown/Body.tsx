import Markdown from "markdown-to-jsx";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import override from "./../../overrides/markdown.overrides";
import DGMarkdownInterface from "./interface";

class DGMarkdownBody extends React.Component<DGMarkdownInterface> {
  public render() {
    const { children } = this.props;
    return (
      <>
        <Markdown options={override}>{children}</Markdown>
      </>
    );
  }
}

export default hot(DGMarkdownBody);
