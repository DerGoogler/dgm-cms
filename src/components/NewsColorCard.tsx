import * as React from "react";
import { hot } from "react-hot-loader/root";
import { NewsColorCardInterface } from "../d/interface";
import Card from "react-bootstrap/Card";

class NewsColorCard extends React.Component<NewsColorCardInterface> {
  public render() {
    const { title, children, headerTitle, variant } = this.props;
    return (
      <>
        <Card
          bg={variant.toLowerCase()}
          key={title}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>{headerTitle}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default hot(NewsColorCard);
