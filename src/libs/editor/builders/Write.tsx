import * as React from "react";
import { hot } from "react-hot-loader/root";
import { getCookie, setCookie } from "../../../misc/tools";
import Editor from "@monaco-editor/react";

class Write extends React.Component<{ cookie: string }> {
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
        <div style={{ margin: "0px" }}>
          <Editor
            height="calc(100vh - 104px)"
            theme="vs-dark"
            defaultLanguage="markdown"
            defaultValue={this.state.value}
            onChange={(value, event) => {
              const { cookie } = this.props;
              this.setState({ value: value });
              setCookie(cookie, value);
            }}
          />
        </div>
      </>
    );
  }
}

export default hot(Write);
