import * as React from "react";
import { hot } from "react-hot-loader/root";

class Halloween extends React.Component {
  render() {
    return (
      <div className="pumpkin">
        <div className="decor"></div>
        <div className="eye"></div>
        <div className="eye2"></div>
        <div className="root"></div>
        <div className="root2"></div>
        <div className="mouth2"></div>
        <div className="mouth"></div>
        <div className="mouth3"></div>
        <div className="mouth4"></div>
        <div className="shadow"></div>
      </div>
    );
  }
}

export default hot(Halloween);
