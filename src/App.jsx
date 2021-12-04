import * as React from "react";
import { Page, RouterNavigator } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import Main from "./views/Main";
import { RouterUtil } from "react-onsenui";

class App extends React.Component {
	state = {
		routeConfig: RouterUtil.init([
			{
				component: Main,
				props: {
					key: "main",
					pushPage: (...args) => this.pushPage(...args),
				},
			},
		]),
	};

	pushPage(page, key) {
		const route = {
			component: page,
			props: {
				key: key,
				popPage: () => this.popPage(),
				pushPage: (...args) => this.pushPage(...args),
			},
		};

		let routeConfig = this.state.routeConfig;

		routeConfig = RouterUtil.push({
			routeConfig,
			route,
		});

		this.setState({ routeConfig });
	}

	popPage(options = {}) {
		let routeConfig = this.state.routeConfig;

		routeConfig = RouterUtil.pop({
			routeConfig,
			options: {
				...options,
				animationOptions: { duration: 0.4 },
			},
		});

		this.setState({ routeConfig });
	}

	onPostPush() {
		const routeConfig = RouterUtil.postPush(this.state.routeConfig);
		this.setState({ routeConfig });
	}

	onPostPop() {
		const routeConfig = RouterUtil.postPop(this.state.routeConfig);
		this.setState({ routeConfig });
	}

	renderPage(route) {
		const props = route.props || {};
		return <route.component {...props} />;
	}

	render() {
		return (
			<Page>
				<RouterNavigator
					swipeable={true}
					swipePop={(options) => this.popPage(options)}
					routeConfig={this.state.routeConfig}
					renderPage={this.renderPage}
					onPostPush={() => this.onPostPush()}
					onPostPop={() => this.onPostPop()}
				/>
			</Page>
		);
	}
}

export default hot(App);
