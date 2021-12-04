import * as React from "react";
import { hot } from "react-hot-loader/root";
import { isDesktop } from "react-device-detect";
import "./../styles/github-markdown.scss";
import { typeIf } from "./tools";

class MarkdownBody extends React.Component {
	private stlye: any = {
		boxSizing: "border-box",
		minWidth: "200px",
		maxWidth: "980px",
		margin: "0 auto",
		padding: "45px",
	};

	public render() {
		return (
			<div style={typeIf(isDesktop, { padding: "16px" }, { padding: "24px" })}>
				<article className={"markdown-body"} style={typeIf(isDesktop, this.stlye, {})}>
					{this.props.children}
				</article>
			</div>
		);
	}
}

export default hot(MarkdownBody);
