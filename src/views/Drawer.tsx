import * as React from "react";
import { Page, Toolbar, List, ListItem, ListHeader } from "react-onsenui";
import { isAndroid, isDesktop } from "react-device-detect";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import { getCookie, typeCheck, typeIf } from "../misc/tools";
import config from "../config";
import { override } from "../overrides/drawerMarkdown.overrides";
import string from "../misc/strings";
import eruda from "eruda";
import tools from "../misc/private.tools";
import Markdown from "markdown-to-jsx";

class Drawer extends React.Component {
  public state = {
    drawerData: "",
  };

  public componentDidMount() {
    new tools().getCustomDrawerContent((data: any) => {
      this.setState({ drawerData: data });
    });
  }

  private drawerHide() {
    this.setState({ isDrawerOpen: false });
  }

  private drawerShow() {
    this.setState({ isDrawerOpen: true });
  }

  private drawerToolbar() {
    return (
      <Toolbar>
        <div className="center">
          {typeCheck(
            getCookie("title"),
            `NoTitle${config.base.afterTitle}`
          ).replace(config.base.afterTitle, "")}
        </div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <>
        <Page renderToolbar={this.drawerToolbar}>
          <List>
            <Markdown options={override}>{this.state.drawerData}</Markdown>
          </List>
          <List>
            <ListHeader>{string.about}</ListHeader>
            <ListItem
              onClick={() => {
                ons.notification.confirm({
                  message: string.about_cookies_dialog,
                  title: string.about_cookies,
                  buttonLabels: [string.ok],
                  animation: "default",
                  primaryButtonIndex: 0,
                  cancelable: false,
                });
              }}
              modifier="chevron"
              tappable
            >
              {string.about_cookies}
            </ListItem>
            <ListItem
              style={{
                display: typeIf(isDesktop, "none", "flex"),
              }}
              onClick={() => {
                if (isAndroid) {
                  eruda.init();
                } else {
                  ons.notification.toast("You're not on Android!", {
                    timeout: 1000,
                    animation: "fall",
                  });
                }
              }}
              modifier="chevron"
              tappable
            >
              {string.enable_console}
            </ListItem>
            <ListItem
              onClick={() => {
                new tools().clickImprovePage();
              }}
              modifier="chevron"
              tappable
            >
              {string.improve_page}
            </ListItem>
          </List>
        </Page>
      </>
    );
  }
}

export default hot(Drawer);
