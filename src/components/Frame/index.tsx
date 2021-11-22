import * as React from "react";
import { hot } from "react-hot-loader/root";
import Frame, { FrameContextConsumer } from "react-frame-component";
import FrameInterface from "./interface";

class XHR extends React.Component<FrameInterface> {
  private children: React.ReactNode = this.props.children;
  private style: React.CSSProperties = this.props.style;
  private head: string = this.props.head;
  private dom: Function = this.props.dom;

  public render() {
    return (
      <>
        <Frame
          initialContent={`<!DOCTYPE html><html><head>${this.head}</head><body><div></div></body></html>`}
          style={this.style}
        >
          <FrameContextConsumer>
            {({ document, window }: any) => {
              if (typeof this.dom == "function") {
                this.dom(document, window);
              }
              return <>{this.children}</>;
            }}
          </FrameContextConsumer>
        </Frame>
      </>
    );
  }
}

export default hot(XHR);
