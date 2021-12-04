import * as React from "react";
import { hot } from "react-hot-loader/root";
import MarkdownContent from "../../misc/MarkdownContent";

class Preview extends React.Component {
  public state = {
    valueHome: "",
    valueHeader: "",
    valueFooter: "",
  };

  public componentDidMount() {
    window.addEventListener("storage", this.stateChanger);
    var event = document.createEvent("Event");
    event.initEvent("storage", true, true);
    window.dispatchEvent(event);
  }

  public componentWillUnmount() {
    window.removeEventListener("storage", this.stateChanger);
  }

  private stateChanger = () => {
    this.setState({
      valueHome: window.localStorage.getItem("DGMarkdownValueHome"),
    });
    this.setState({
      valueHeader: window.localStorage.getItem("DGMarkdownValueHeader"),
    });
    this.setState({
      valueFooter: window.localStorage.getItem("DGMarkdownValueFooter"),
    });
  };

  public render() {
    return (
      <MarkdownContent
        data={this.state.valueHome}
        headerData={this.state.valueHeader}
        footerData={this.state.valueFooter}
      />
    );
  }
}

export default hot(Preview);
