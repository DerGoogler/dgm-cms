import * as React from "react";
import { hot } from "react-hot-loader/root";
import axios from "axios";
import XHRInterface from "./interface";

class XHR extends React.Component<XHRInterface> {
  public state = {
    content: "",
  };

  public componentDidMount() {
    const { src } = this.props;

    axios.get(src).then((res) => {
      const data = res.data;
      this.setState({ content: data });
    });
  }

  public render() {
    return <>{this.state.content}</>;
  }
}

export default hot(XHR);
