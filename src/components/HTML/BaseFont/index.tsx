import * as React from "react";
import { hot } from "react-hot-loader/root";
import BaseFontInterface from "./interface";

class XHR extends React.Component<BaseFontInterface> {
  public render() {
    const { color, font, size } = this.props;
    var body: HTMLElement;
    if ((body = window.document.body)) {
      body.style.fontFamily = font;
      body.style.color = color;
      body.style.fontSize = size;
    }
    return <></>;
  }
}

export default hot(XHR);
