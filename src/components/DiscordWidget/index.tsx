import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import DiscordWidgetInterface from "./interface";

class DiscordWidget extends React.Component<DiscordWidgetInterface> {
	public render() {
		const { token, width, height, theme } = this.props;
		return (
			<>
				<iframe
					className="DiscordWidget--Custom card"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "0px",
					}}
					src={
						"https://discord.com/widget?id=" +
						typeCheck(token, "753360232515764255") +
						" &theme=" +
						typeCheck(theme, "dark")
					}
					width={typeCheck(width, 350)}
					height={typeCheck(height, 500)}
					allowTransparency={true}
					frameBorder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				></iframe>
			</>
		);
	}
}

export default hot(DiscordWidget);
