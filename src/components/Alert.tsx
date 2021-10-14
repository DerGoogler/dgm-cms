import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { AlertInterface } from "../misc/others/d/interface";
import { typeCheck } from "../misc/others/tools";

class OnsAlert extends React.Component<AlertInterface> {
  public render() {
    // You can edit more in!
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
