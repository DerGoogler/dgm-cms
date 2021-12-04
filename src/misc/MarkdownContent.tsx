import * as React from "react";
import { hot } from "react-hot-loader/root";
import Markdown from "markdown-to-jsx";
import { MarkdownContentInterface } from "../d/interface";
import { isDesktop } from "react-device-detect";
import override from "../overrides/markdown.overrides";
import overrideHeader from "../overrides/headerMarkdown.overrides";
import overrideFooter from "../overrides/footerMarkdown.overrides";
import "./../styles/github-markdown.scss";
import { typeIf } from "./tools";
import MarkdownBody from "./MarkdownBody";

class MarkdownContent extends React.Component<MarkdownContentInterface> {
  public render() {
    const { data, headerData, footerData } = this.props;
    return (
      <>
        <Markdown options={overrideHeader}>{headerData}</Markdown>
        <MarkdownBody>
          <Markdown options={override}>{data}</Markdown>
        </MarkdownBody>
        <Markdown options={overrideFooter}>{footerData}</Markdown>
      </>
    );
  }
}

export default hot(MarkdownContent);
