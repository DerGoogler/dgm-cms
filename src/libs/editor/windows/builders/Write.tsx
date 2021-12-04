import React from "react";
import { hot } from "react-hot-loader/root";
import { NavPageContainer } from "react-windows-ui";
import Editor from "@monaco-editor/react";
import { getCookie, setCookie } from "../../../../misc/tools";

class Write extends React.Component<{ cookie: string }> {
  private componentStyle: React.CSSProperties = { margin: "0px" };
  private componentCookie: string = this.props.cookie;
  private componentMode: string = getCookie("DMG-Editor-Language");

  public state = {
    value: "",
  };

  public componentDidMount() {
    const { cookie } = this.props;
    this.setState({
      value: getCookie(cookie),
    });
  }

  public render() {
    return (
      <NavPageContainer animateTransition>
        <div style={this.componentStyle}>
          <Editor
            height="100vh"
            theme="vs-light"
            defaultLanguage={this.componentMode}
            defaultValue={this.state.value}
            onChange={(value, event) => {
              this.setState({ value: value });
              setCookie(this.componentCookie, value);
            }}
          />
        </div>
      </NavPageContainer>
    );
  }
}

export default hot(Write);
