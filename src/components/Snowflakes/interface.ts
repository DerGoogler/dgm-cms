import { SnowfallProps } from "react-snowfall";

interface SnowflakesInterface extends SnowfallProps {
	color: string;
	count: number;
	radius: [minimumRadius: number, maximumRadius: number];
	speed: [minimumSpeed: number, maximumSpeed: number];
	wind: [minimumWind: number, maximumWind: number];
}

export default SnowflakesInterface;
