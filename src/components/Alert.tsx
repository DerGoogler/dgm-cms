import * as React from "react";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { AlertInterface } from "../d/interface";
import { typeCheck } from "../misc/tools";

class OnsAlert extends React.Component<AlertInterface> {
  public render() {
    const { title, message, cancelable } = this.props;
    return (
      <>
        <span
          style={{ color: "#0076FF", cursor: "pointer" }}
          onClick={() => {
            ons.notification.confirm({
              message: message,
              title: title,
              buttonLabels: ["Ok"],
              animation: "default",
              primaryButtonIndex: 0,
              cancelable: typeCheck(cancelable, true),
            });
          }}
        >
          {this.props.children} <em>(Openable Dialog)</em>
        </span>
      </>
    );
  }
}

export default hot(OnsAlert);
