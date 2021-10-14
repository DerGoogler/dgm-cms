import * as React from "react";
import { hot } from "react-hot-loader/root";
import { AudioInterface } from "../misc/others/d/interface";
import { typeCheck } from "./../misc/others/tools";

class Audio extends React.Component<AudioInterface> {
  public render() {
    const { src, type, controls, noSupportText } = this.props;
    return (
      <>
        <audio controls={typeCheck(controls, true)}>
          <source src={src} type={typeCheck(type, "video/mpeg")} />
          {typeCheck(
            noSupportText,
            "Your browser does not support audios."
          )}
        </audio>
      </>
    );
  }
}

export default hot(Audio);
