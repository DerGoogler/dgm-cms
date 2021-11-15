import React from "react";
import { Card, List, ListItem } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import { GitHubInterface } from "../../d/interface";
import axios from "axios";

class Issues extends React.Component<GitHubInterface> {
  state = {
    data: [],
  };

  componentDidMount() {
    const { user, repo } = this.props;
    axios
      .get("https://api.github.com/repos/" + user + "/" + repo + "/issues")
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      });
  }

  render() {
    const { user, repo } = this.props;
    return (
      <>
        <Card>
          <div className="title">
            Issues of {user}/{repo}
          </div>
          <div className="content">
            <List>
              {this.state.data.map((i: any) => (
                <ListItem
                  modifier="chevron"
                  key={i.id}
                  onClick={() => {
                    window.open(i.html_url);
                  }}
                >
                  {i.title}
                </ListItem>
              ))}
            </List>
          </div>
        </Card>
      </>
    );
  }
}

export default hot(Issues);
