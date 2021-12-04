import * as React from "react";
import { hot } from "react-hot-loader/root";
import Snowfall from "react-snowfall";
import { typeCheck } from "../../misc/tools";
import SnowflakesInterface from "./interface";

class Showflakes extends React.Component<SnowflakesInterface> {
	public render() {
		const { color, count, radius, speed, wind } = this.props;
		return (
			<>
				<Snowfall
					color={typeCheck(color, "#dee4fd")}
					snowflakeCount={typeCheck(count, 150)}
					radius={typeCheck(radius, [0.5, 3.0])}
					speed={typeCheck(speed, [1.0, 3.0])}
					wind={typeCheck(wind, [-0.5, 2.0])}
				/>
			</>
		);
	}
}

export default hot(Showflakes);
