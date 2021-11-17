import * as React from "react";
import { Navigator } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import Main from "./views/Main";

class App extends React.Component {
  public renderPage(route: any, navigator: any) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  public render() {
    return (
      <Navigator
        key="lol"
        initialRoute={{ component: Main }}
        renderPage={this.renderPage}
      />
    );
  }
}

export default hot(App);
