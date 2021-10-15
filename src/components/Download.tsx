import * as React from "react";
import { hot } from "react-hot-loader/root";
import { DownloadInterface } from "../misc/others/d/interface";
import { download, typeCheck } from "./../misc/others/tools";

class Download extends React.Component<DownloadInterface> {
  public render() {
    const { filename, content, callback } = this.props;
    return (
      <span
        onClick={() => {
          if (filename === "" || filename === undefined) {
            throw new Error("There is no filename");
          } else {
            if (content === "" || content === undefined) {
              throw new Error("There is no file content");
            } else {
              download(content, filename);
              if (typeof callback === "function") {
                callback();
              }
            }
          }
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default hot(Download);