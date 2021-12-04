import Markdown from "markdown-to-jsx";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import overrideFooter from "./../../overrides/footerMarkdown.overrides";
import DGMarkdownInterface from "./interface";

class DGMarkdownFooter extends React.Component<DGMarkdownInterface> {
	public render() {
		const { children } = this.props;
		return (
			<>
				<Markdown options={overrideFooter}>{children}</Markdown>
			</>
		);
	}
}

export default hot(DGMarkdownFooter);
