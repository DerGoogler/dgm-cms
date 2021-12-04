import * as React from "react";
import { hot } from "react-hot-loader/root";
import ViewOnlyDesktopInterface from "./interface";
import { isMobile } from "react-device-detect";

class ViewOnlyDesktop extends React.Component<ViewOnlyDesktopInterface> {
  public render() {
    const { children } = this.props;
    if (isMobile) {
      return <div>{children}</div>;
    } else {
      return <div style={{ display: "none" }}>This content can only viwed on desktop</div>;
    }
  }
}

export default hot(ViewOnlyDesktop);
