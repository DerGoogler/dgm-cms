import * as React from "react";
import { hot } from "react-hot-loader/root";
import { VideoInterface } from "../interface";
import { typeCheck } from "./../misc/others/tools";

class Video extends React.Component<VideoInterface> {
  render() {
    const { src, type, controls, noSupportText } = this.props;
    return (
      <>
        <video width="100%" controls={typeCheck(controls, true)}>
          <source src={src} type={typeCheck(type, "video/mp4")} />
          {typeCheck(
            noSupportText,
            "Your browser does not support HTML video."
          )}
        </video>
      </>
    );
  }
}

export default hot(Video);
