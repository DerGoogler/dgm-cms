import * as React from "react";
import { hot } from "react-hot-loader/root";
import {
  Tabbar,
  Tab,
  Page,
  Toolbar,
  ToolbarButton,
  Fab,
  Icon,
} from "react-onsenui";
import TabPage from "./builders/TabPage";
import Preview from "./views/Preview";
import config from "./../../config";
import Write from "./builders/Write";

class App extends React.Component {
  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">DGMarkdown</div>
        <div className="right">
          <ToolbarButton
            onClick={() => {
              location.reload();
            }}
          >
            Update
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  private renderTabs() {
    return [
      {
        content: (
          <TabPage
            content={<Write key="home" cookie="DGMarkdownValueHome" />}
          />
        ),
        tab: (
          <Tab
            icon="md-edit"
            label={config.base.defaultPage + config.base.file}
          />
        ),
      },
      {
        content: <TabPage content={<Preview />} />,
        tab: <Tab icon="md-eye" label={"Preview"} />,
      },
      {
        content: (
          <TabPage
            content={<Write key="header" cookie="DGMarkdownValueHeader" />}
          />
        ),
        tab: (
          <Tab
            icon="md-edit"
            label={config.base.defaultHeaderFile + config.base.file}
          />
        ),
      },
      {
        content: (
          <TabPage
            content={<Write key="footer" cookie="DGMarkdownValueFooter" />}
          />
        ),
        tab: (
          <Tab
            icon="md-edit"
            label={config.base.defaultFooterFile + config.base.file}
          />
        ),
      },
    ];
  }

  private renderFixed() {
    return (
      <Fab
        onClick={() => {
          location.reload();
        }}
        position="bottom right"
      >
        <Icon icon="md-refresh" />
      </Fab>
    );
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
        <Tabbar
          swipeable={false}
          position="auto"
          index={1}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default hot(App);
