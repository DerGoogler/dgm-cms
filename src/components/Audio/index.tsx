import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import { AudioInterface } from "./interface";

class Audio extends React.Component<AudioInterface> {
	public render() {
		const { src, type, controls, noSupportText } = this.props;
		return (
			<>
				<audio className="Audio--Custom" controls={typeCheck(controls, true)}>
					<source src={src} type={typeCheck(type, "video/mpeg")} />
					{typeCheck(noSupportText, "Your browser does not support audios.")}
				</audio>
			</>
		);
	}
}

export default hot(Audio);
