import * as React from "react";
import { hot } from "react-hot-loader/root";
import { getCookie, setCookie } from "./../../../../misc/tools";
import { Controlled as CodeMirror } from "react-codemirror2";

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
    return (
      <>
        <div style={this.componentStyle}>
          <CodeMirror
            value={this.state.value}
            options={{
              mode: this.componentMode,
              theme: "xq-light",
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

export default hot(Write);
