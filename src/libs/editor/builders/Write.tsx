import * as React from "react";
import { hot } from "react-hot-loader/root";
import { getCookie, setCookie } from "../../../misc/tools";
import { Controlled as CodeMirror } from "react-codemirror2";
import Editor from "@monaco-editor/react";
import { isDesktop } from "react-device-detect";

class Write extends React.Component<{ cookie: string }> {
  private componentStyle: React.CSSProperties = { margin: "0px" };
  private componentCookie: string = this.props.cookie;
  private componentMode: string = "markdown";

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
    if (isDesktop) {
      return (
        <>
          <div style={this.componentStyle}>
            <Editor
              height="calc(100vh - 104px)"
              theme="vs-dark"
              defaultLanguage={this.componentMode}
              defaultValue={this.state.value}
              onChange={(value, event) => {
                this.setState({ value: value });
                setCookie(this.componentCookie, value);
              }}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={this.componentStyle}>
            <CodeMirror
              value={this.state.value}
              options={{
                mode: this.componentMode,
                theme: "darcula",
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ value: value });
                setCookie(this.componentCookie, value);
              }}
            />
          </div>
        </>
      );
    }
  }
}

export default hot(Write);
