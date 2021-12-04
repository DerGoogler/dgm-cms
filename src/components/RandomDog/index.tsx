import axios from "axios";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import RandowmDogInterface from "./interface";

class RandomDog extends React.Component<RandowmDogInterface> {
	private url: string = "https://dog.ceo/api/breeds/image/random";

	public state = {
		message: "",
	};

	public componentDidMount() {
		axios.get(this.url).then((res) => {
			const data = res.data;
			this.setState({ content: data.message });
		});
	}

	public render() {
		return this.state.message;
	}
}

export default hot(RandomDog);
