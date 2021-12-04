import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Page } from "react-onsenui";

class TabPage extends React.Component<{ content: any }> {
	public render() {
		const { content } = this.props;
		return (
			<Page>
				<section>
					<span>{content}</span>
				</section>
			</Page>
		);
	}
}

export default hot(TabPage);
