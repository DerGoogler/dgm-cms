import * as React from "react";
import { hot } from "react-hot-loader/root";
import { StylesDictionary } from "../../d/interface";
import { typeCheck } from "../../misc/tools";
import HeaderInterface from "./interface";

class Header extends React.Component<HeaderInterface> {
  public render() {
    const { backgroundImage, fontSize, children } = this.props;
    return (
      <>
        <div
          style={{
            padding: "60px",
            textAlign: "center",
            backgroundImage:
              "url(" +
              typeCheck(backgroundImage, "https://www.w3schools.com/howto/img_woods_wide.jpg") +
              ")",
            fontSize: typeCheck(fontSize, "30px"),
          }}
        >
          <h1>{children}</h1>
        </div>
      </>
    );
  }
}

export default hot(Header);
