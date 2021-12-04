import * as React from "react";
import { hot } from "react-hot-loader/root";
import ViewOnlyMobileInterface from "./interface";
import { isMobile } from "react-device-detect";

class ViewOnlyMobile extends React.Component<ViewOnlyMobileInterface> {
  public render() {
    const { children } = this.props;
    if (isMobile) {
      return <div>{children}</div>;
    } else {
      return <div style={{ display: "none" }}>This content can only viwed on mobile</div>;
    }
  }
}

export default hot(ViewOnlyMobile);
