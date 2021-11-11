import * as React from "react";
import { hot } from "react-hot-loader/root";
import { AudioInterface } from "../d/interface";
import { typeCheck } from "../misc/tools";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";

class Code extends React.Component<{ mode: string }> {
  public render() {
    const { mode } = this.props;
    return (
      <>
        <CodeMirror
          value={String(this.props.children)}
          options={{
            mode: typeCheck(mode, "javascript"),
            theme: "material",
            lineNumbers: true,
            readOnly: true,
          }}
        />
      </>
    );
  }
}

export default hot(Code);
