import React, {Component} from "react";
import ons from 'onsenui';
import { hot } from "react-hot-loader/root";


class Options extends Component {
  componentDidMount() {
    const { title, platform } = this.props;
    document.title = title;
    document.getElementById('toolbar-title').innerHTML = title;
    ons.platform.select(platform);
  }

  render() {
    return (<></>);
  }
}


export default hot(Options);