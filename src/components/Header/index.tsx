import * as React from "react";
import { hot } from "react-hot-loader/root";
import { StylesDictionary } from "../../d/interface";
import HeaderInterface from "./interface";

class Header extends React.Component<HeaderInterface> {
  public render() {
    const { src, head, text } = this.props;

    const styles: StylesDictionary = {
      container: {
        position: "relative",
        maxWidth: "800px",
        margin: "0 auto",
      },
      headerImage: {
        width: "100%",
        verticalAlign: "middle",
      },
      headerTitle: {
        position: "absolute",
        bottom: "0",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#f1f1f1",
        width: "100%",
        padding: "20px",
      },
    };

    return (
      <>
        <div className="HeaderContainer--Custom" style={styles.container}>
          <img
            className="HeaderIMage--Custom"
            src={src}
            alt={head}
            style={styles.headerImage}
          />
          <div className="HeaderTitle--Custom" style={styles.headerTitle}>
            <h1 className="HeadText--Custom">{head}</h1>
            <p className="HeadContentText--Custom">{text}</p>
          </div>
        </div>
      </>
    );
  }
}

export default hot(Header);
