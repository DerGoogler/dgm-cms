import { Controlled as CodeMirror } from "react-codemirror2";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { getCookie, setCookie } from "../../../misc/tools";

class WriteFooter extends React.Component<{ cookie: string }> {
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
    const { cookie } = this.props;
    return (
      <>
        <div style={{ margin: "0px" }}>
          <CodeMirror
            value={this.state.value}
            options={{
              mode: "markdown",
              theme: "darcula",
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              this.setState({ value: value });
              setCookie(cookie, value);
            }}
          />
        </div>
      </>
    );
  }
}

export default hot(WriteFooter);
