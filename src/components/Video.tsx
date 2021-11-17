import * as React from "react";
import { isDesktop } from "react-device-detect";
import { hot } from "react-hot-loader/root";
import { VideoInterface } from "../d/interface";
import { typeCheck, typeIf } from "../misc/tools";

class Video extends React.Component<VideoInterface> {
  public render() {
    const { src, type, controls, noSupportText, style, poster } = this.props;
    const videoStyle = {
      width: "100%",
      height: typeIf(isDesktop, "445px", "181.500px"),
      borderRadius: "8px",
    };

    const youtubeStyle = {
      width: "100%",
      height: typeIf(isDesktop, "445px", "181.500px"),
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
          poster={poster}
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
