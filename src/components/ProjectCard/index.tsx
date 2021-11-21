import * as React from "react";
import { hot } from "react-hot-loader/root";
import { typeCheck } from "../../misc/tools";
import Card from "react-bootstrap/Card";
import string from "../../misc/strings";
import { Button } from "react-onsenui";
import ProjectCardInterface from "./interface";

class ProjectCard extends React.Component<ProjectCardInterface> {
  public render() {
    const { title, href, children, target, buttonText, language } = this.props;
    return (
      <>
        <Card
          className="text-center"
          style={{
            margin: "0px",
            marginTop: "8px",
            marginBottom: "8px",
            padding: "0px",
          }}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
            <Button
              onClick={() => {
                window.open(href, typeCheck(target, "_blank"));
              }}
              style={{ cursor: "pointer" }}
            >
              {typeCheck(buttonText, string.view_project)}
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {typeCheck(language, string.no_project_language)}
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default hot(ProjectCard);
