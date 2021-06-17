import * as React from "react";
import * as ons from 'onsenui';
import { hot } from "react-hot-loader/root";

interface Props {
  title: string;
  platform: string;
}

class Options extends React.Component<Props> {
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