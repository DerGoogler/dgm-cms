import React from "react";
import { Card, List, ListItem } from "react-onsenui";
import { hot } from "react-hot-loader/root";
import { GitHubInterface } from "../../d/interface";
import axios from "axios";

class Repos extends React.Component<GitHubInterface> {
  state = {
    data: [],
  };

  componentDidMount() {
    const { user } = this.props;
    axios.get("https://api.github.com/users/" + user + "/repos").then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Card>
          <div className="title">{user}'s Repos</div>
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
                  {i.full_name.toLowerCase()}
                </ListItem>
              ))}
            </List>
          </div>
        </Card>
      </>
    );
  }
}

export default hot(Repos);
