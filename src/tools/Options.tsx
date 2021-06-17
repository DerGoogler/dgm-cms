import * as React from "react";
import * as ons from 'onsenui';
import { hot } from "react-hot-loader/root";
import { OptionsInterface } from '../interface';


class Options extends React.Component<OptionsInterface> {
  componentDidMount() {
    const { title, platform } = this.props;
    document.title = title;
    // document.getElementById('toolbar-title').innerHTML = title;
    ons.platform.select(platform);
  }

  render() {
    return (<></>);
  }
}


export default hot(Options);