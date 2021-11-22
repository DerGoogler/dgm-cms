import axios from "axios";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Page, Toolbar, Icon, List, ListItem, Button } from "react-onsenui";

class App extends React.Component<{}, { data: any }> {
  private fetchURL: string =
    "https://api.github.com/repos/DerGoogler/dergoogler.github.io/issues";

  public constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Contents</div>
      </Toolbar>
    );
  }

  public componentWillMount() {
    axios.get(this.fetchURL).then((res: any) => {
      var data = res.data;
      this.setState({ data: data });
    });
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List>
          {this.state.data.map((item: any) => (
            <ListItem>
              <div className="left">
                <Icon icon={"md-" + item.type.replace("dir", "folder")} />
              </div>
              <div className="center">{item.name}</div>
              <div className="right">
                <Button
                  modifier="quiet"
                  onClick={() => {
                    window.open(item.html_url, "_blank");
                  }}
                >
                  {"View " + item.type.replace("dir", "folder")}
                </Button>
              </div>
            </ListItem>
          ))}
        </List>
      </Page>
    );
  }
}

export default hot(App);
