import * as React from "react";
import { hot } from "react-hot-loader/root";
import Frame from "react-frame-component";
import FrameInterface from "./interface";

class IFrame extends React.Component<FrameInterface> {
	public render() {
		return (
			<>
				<Frame
					style={this.props.style}
					initialContent={`<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div></body></html>`}
				>
					{this.props.children}
				</Frame>
			</>
		);
	}
}

export default hot(IFrame);
