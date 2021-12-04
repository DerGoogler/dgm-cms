import * as React from "react";
import { hot } from "react-hot-loader/root";
import CenterInterface from "./interface";

class Center extends React.Component<CenterInterface> {
	public render() {
		const { children } = this.props;
		return (
			<span
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{children}
			</span>
		);
	}
}

export default hot(Center);
