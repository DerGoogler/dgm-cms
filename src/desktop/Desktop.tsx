import "./../styles/desktop.markdown.css";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import MarkdownContent from "../misc/MarkdownContent";
import tools from "./../misc/private.tools";
import { Card } from "react-onsenui";
import string from "../misc/strings";

class Desktop extends React.Component {
  public state = {
    data: "",
  };

  public componentDidMount() {
    new tools().getMarkdownData((data: any) => {
      this.setState({ data: data });
    });
  }

  public render() {
    return (
      <>
        <article className="markdown-body_">
          <span
            onClick={() => {
              new tools().clickImprovePage();
            }}
          >
            <Card style={{ padding: "16px", cursor: "pointer" }}>
              {string.improve_page}
            </Card>
          </span>
          <MarkdownContent data={this.state.data} />
        </article>
      </>
    );
  }
}

export default hot(Desktop);
