import * as React from "react";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { ProjectCardInterface } from "../d/interface";
import { typeCheck, validURL } from "../misc/tools";
import Card from "react-bootstrap/Card";
import string from "../misc/strings";
import { Button } from "react-onsenui";

class ProjectCard extends React.Component<ProjectCardInterface> {
  public render() {
    const { title, href, children, target, buttonText } = this.props;
    return (
      <>
        <Card
          className="text-center"
          style={{ margin: "0px", marginTop: "8px", marginBottom: "8px" }}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
            <Button
              onClick={() => {
                window.open(href, typeCheck(target, "_blank"));
              }}
            >
              {typeCheck(buttonText, string.view_project)}
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default hot(ProjectCard);
