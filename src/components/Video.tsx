import * as React from "react";
import { hot } from "react-hot-loader/root";
import { VideoInterface } from "../d/interface";
import { typeCheck } from "../misc/tools";

class Video extends React.Component<VideoInterface> {
  public render() {
    const { src, type, controls, noSupportText, style } = this.props;
    const videoStyle = {
      width: "100%",
      borderRadius: "8px",
    };

    const youtubeStyle = {
      width: "100%",
      border: "none",
      borderRadius: "8px",
    };

    if (type === "video/youtube") {
      return (
        <>
          <iframe
            style={typeCheck(style, youtubeStyle)}
            src={`https://www.youtube.com/embed/${src.replace(
              "https://www.youtube.com/watch?v=",
              ""
            )}`}
          ></iframe>
        </>
      );
    }

    return (
      <>
        <video
          style={typeCheck(style, videoStyle)}
          controls={typeCheck(controls, true)}
        >
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
