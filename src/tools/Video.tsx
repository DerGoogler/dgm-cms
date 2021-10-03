import * as React from "react";
import { hot } from "react-hot-loader/root";
import { VideoInterface } from "../interface";

class Video extends React.Component<VideoInterface> {
  render() {
    const { src, type } = this.props;
    return (
      <>
        <video width="100%" controls>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </>
    );
  }
}

export default hot(Video);
