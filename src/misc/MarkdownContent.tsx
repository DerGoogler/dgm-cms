import * as React from "react";
import { Card } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import Markdown from "markdown-to-jsx";
import { MarkdownContentInterface } from "../d/interface";
import { isDesktop } from "react-device-detect";
import override from "../overrides/markdown.overrides";
import { overrideHeader } from "../overrides/headerMarkdown.overrides";
import { overrideFooter } from "../overrides/footerMarkdown.overrides";
import "./../styles/github-markdown.css";
import { typeIf } from "./tools";
import tools from "./private.tools";

const cookies = new Cookies();

class MarkdownContent extends React.Component<MarkdownContentInterface> {
  public render() {
    const { data, headerData, footerData } = this.props;
    return (
      <>
        <Markdown options={overrideHeader}>
          {new tools().parseDGMarkdown(headerData)}
        </Markdown>
        <div
          style={typeIf(isDesktop, { padding: "16px" }, { padding: "24px" })}
        >
          <article
            className={typeIf(isDesktop, "markdown-body_", "markdown-body")}
          >{/*
          // @ts-ignore */}
            <Markdown options={override}>
              {new tools().parseDGMarkdown(data)}
            </Markdown>
          </article>
        </div>
        <Markdown options={overrideFooter}>
          {new tools().parseDGMarkdown(footerData)}
        </Markdown>
      </>
    );
  }
}

export default hot(MarkdownContent);
