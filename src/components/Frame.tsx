import * as React from "react";
import { hot } from "react-hot-loader/root";
import { FrameInterface } from "../misc/others/d/interface";
import { typeCheck } from "./../misc/others/tools";

class Frame extends React.Component<FrameInterface> {
  public render() {
    const { css, src } = this.props;
    return (
      <>
        <iframe
          style={css}
          srcDoc={src}
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation  allow-scripts allow-top-navigation-by-user-activation"
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
          allowTransparency={true}
          allowFullScreen={true}
        ></iframe>
      </>
    );
  }
}

export default hot(Frame);