import * as React from "react";
import { hot } from "react-hot-loader/root";
import { OnClickInterface } from "../misc/others/d/interface";

class Click extends React.Component<OnClickInterface> {
  public render() {
    return (
      <span
        onClick={() => {
          eval(this.props.click);
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default hot(Click);