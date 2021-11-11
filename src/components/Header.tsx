import * as React from "react";
import { hot } from "react-hot-loader/root";
import { HeaderInterface, StylesDictionary } from "../d/interface";

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
        <div style={styles.container}>
          <img src={src} alt={head} style={styles.headerImage} />
          <div style={styles.headerTitle}>
            <h1>{head}</h1>
            <p>{text}</p>
          </div>
        </div>
      </>
    );
  }
}

export default hot(Header);
