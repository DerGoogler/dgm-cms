import * as React from "react";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { XHRInterface } from "../interface";

class XHR extends React.Component<XHRInterface> {
  state = {
    content: "",
  };

  componentDidMount() {
    const { src } = this.props;
    const content = (data: any) => {
      this.setState({ content: data });
    };
    const getContent = new XMLHttpRequest();
    getContent.onreadystatechange = function () {
      if (getContent.readyState == 4 && getContent.status == 200) {
        content(getContent.responseText);
      } else if (getContent.status == 404) {
        content("Can't find the " + src + " url");
      }
    };
    getContent.open("GET", src, true);
    getContent.send();
  }

  render() {
    return <>{this.state.content}</>;
  }
}

export default hot(XHR);
