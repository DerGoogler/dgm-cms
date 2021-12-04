import * as React from "react";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../../misc/tools";
import config from "../../../config";
import AInterface from "./interface";

class A extends React.Component<AInterface> {
  public render() {
    const { download, href, hrefLang, media, ping, rel, target, type, children } = this.props;
    return (
      <>
        <a
          download={download}
          href={href}
          hrefLang={hrefLang}
          media={media}
          ping={ping}
          rel={rel}
          target={typeCheck(target, "_blank")}
          type={type}
          title={"Open " + href}
          style={{ cursor: "pointer" }}
        >
          {children}
        </a>
      </>
    );
  }
}

export default hot(A);
