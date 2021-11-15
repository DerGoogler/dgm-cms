import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { XHRInterface } from "../d/interface";
import axios from "axios";

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
