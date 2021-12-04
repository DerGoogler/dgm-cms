import * as React from "react";
import { hot } from "react-hot-loader/root";
import Accordion from "react-bootstrap/Accordion";
import AropdownInterface from "./interface";

class Aropdown extends React.Component<AropdownInterface> {
  public render() {
    const { title, children } = this.props;
    return (
      <>
        <Accordion
          style={{
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          <Accordion.Item eventKey={title}>
            <Accordion.Header style={{ margin: "0px" }}>{title}</Accordion.Header>
            <Accordion.Body>{children}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default hot(Aropdown);
