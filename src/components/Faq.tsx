import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { hot } from "react-hot-loader/root";
import { FaqInterface } from "../interface";

class Faq extends React.Component<FaqInterface> {
  render() {
    const { data } = this.props;
    return (
      <>
        <Accordion defaultActiveKey="0">
          {data.map((i: any) => (
            <Accordion.Item eventKey={i.id}>
              <Accordion.Header>{i.ask}</Accordion.Header>
              <Accordion.Body>{i.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  }
}

export default hot(Faq);
