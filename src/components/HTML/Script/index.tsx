import * as React from "react";
import { hot } from "react-hot-loader/root";
import FontInterface from "./interface";

class Script extends React.Component<FontInterface> {
  public componentDidMount() {
    const { src } = this.props;
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  }

  public render() {
    const { src } = this.props;
    return <span style={{ display: "none" }}>The {src} script was imported</span>;
  }
}

export default hot(Script);
