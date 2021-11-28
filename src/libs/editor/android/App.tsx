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
  SpeedDial,
  SpeedDialItem,
} from "react-onsenui";
import TabPage from "./builders/TabPage";
import Preview from "../Preview";
import config from "./../../../config";
import Write from "./builders/Write";
import { getCookie, removeCookie, typeCheck } from "./../../../misc/tools";

class Android extends React.Component {
  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">
          DGMarkdown (
          {typeCheck(
            getCookie("title"),
            `NoTitle${config.base.afterTitle}`
          ).replace(config.base.afterTitle, "")}
          )
        </div>
        <div className="right">
          <ToolbarButton
            modifier="materialFontSize20"
            onClick={() => {
              window.open(
                "https://github.com/DerGoogler/dgm-cms/blob/master/COMPONENTS.md",
                "_blank"
              );
            }}
          >
            Components
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
      <SpeedDial position="bottom right">
        <Fab>
          <Icon icon="md-more" />
        </Fab>
        <SpeedDialItem
          onClick={() => {
            removeCookie("DGMarkdownValueHome");
            removeCookie("DGMarkdownValueHeader");
            removeCookie("DGMarkdownValueFooter");
            location.reload();
          }}
        >
          <Icon icon="md-delete" />
        </SpeedDialItem>
        <SpeedDialItem
          onClick={() => {
            location.reload();
          }}
        >
          <Icon icon="md-refresh" />
        </SpeedDialItem>
      </SpeedDial>
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

export default hot(Android);
