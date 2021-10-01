import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { AlertInterface } from "../interface";

class OnsAlert extends React.Component<AlertInterface> {
  render() {
    // You can edit more in!
    const { title, message, cancelable } = this.props;
    return (
      <>
        <p
          style={{ color: "#0076FF" }}
          onClick={() => {
            ons.notification.confirm({
              message: message,
              title: title,
              buttonLabels: ["Ok"],
              animation: "default",
              primaryButtonIndex: 0,
              cancelable: cancelable,
            });
          }}
        >
          {this.props.children} <em>(Alert)</em>
        </p>
      </>
    );
  }
}

export default hot(OnsAlert);
