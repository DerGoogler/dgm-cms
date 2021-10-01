import * as React from "react";
import { hot } from "react-hot-loader/root";

class Script extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}

export default hot(Script);
