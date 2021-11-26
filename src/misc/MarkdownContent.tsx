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

class MarkdownContent extends React.Component<MarkdownContentInterface> {
  private stlye: any = {
    boxSizing: "border-box",
    minWidth: "200px",
    maxWidth: "980px",
    margin: "0 auto",
    padding: "45px",
  };

  public render() {
    const { data, headerData, footerData } = this.props;
    return (
      <>
        <Markdown options={overrideHeader}>{headerData}</Markdown>
        <div
          style={typeIf(isDesktop, { padding: "16px" }, { padding: "24px" })}
        >
          <article
            className={"markdown-body"}
            style={typeIf(isDesktop, this.stlye, {})}
          >
            <Markdown options={override}>{data}</Markdown>
          </article>
        </div>
        <Markdown options={overrideFooter}>{footerData}</Markdown>
      </>
    );
  }
}

export default hot(MarkdownContent);
