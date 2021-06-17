import React from "react";
import { hot } from "react-hot-loader/root";


class OnsIF extends React.Component {
  render() {
    const { platform, content } = this.props;
    return (
      <ons-if platform={platform}>{content}</ons-if>
    );
  }
}


export default hot(OnsIF);