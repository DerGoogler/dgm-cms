import * as React from "react";
import { hot } from "react-hot-loader/root";
import CenterInterface from "./interface";

class Center extends React.Component<CenterInterface> {
  public render() {
    const { children, style } = this.props;
    return (
      <span style={style}>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </span>
      </span>
    );
  }
}

export default hot(Center);
