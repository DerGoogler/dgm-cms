import * as React from "react";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { AInterface } from "../d/interface";
import { typeCheck, validURL } from "../misc/tools";
import config from "../config";

class A extends React.Component<AInterface> {
  public render() {
    const {
      download,
      href,
      hrefLang,
      media,
      ping,
      rel,
      target,
      type,
      referrerPolicy,
      children,
    } = this.props;
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
          referrerPolicy={referrerPolicy}
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
