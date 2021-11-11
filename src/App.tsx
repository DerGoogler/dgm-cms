import * as React from "react";
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  List,
  ListItem,
  ListHeader,
  Splitter,
  SplitterContent,
  SplitterSide,
} from "react-onsenui";
import {
  isIE,
  isIOS,
  isSafari,
  isMobileSafari,
  isAndroid,
} from "react-device-detect";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import { getUrlParam, getUrlParamHash, typeCheck } from "./misc/tools";
import axios from "axios";
import config from "./config";
import { override } from "./misc/overrides/drawerMarkdown.overrides";
import MarkdownContent from "./misc/MarkdownContent";
import { AppStates } from "./d/interface";
import string from "./misc/strings";
import eruda from "eruda";
import tools from "./misc/private.tools";
import Markdown from "markdown-to-jsx";

class App extends React.Component<{}, AppStates> {
  public state = {
    isDrawerOpen: config.options.drawer.isDrawerOpen,
    data: "",
    drawerData: "",
  };

  public componentDidMount() {
    new tools().getMarkdownData((data: any) => {
      this.setState({ data: data });
    });

    new tools().getCustomDrawerContent((data: any) => {
      this.setState({ drawerData: data });
    });
  }

  public drawerHide() {
    this.setState({ isDrawerOpen: false });
  }

  public drawerShow() {
    this.setState({ isDrawerOpen: true });
  }

  public renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.drawerShow}>
            <Icon icon="ion-ios-menu, material:md-menu" />
          </ToolbarButton>
        </div>
        <div className="center">
          {typeCheck(
            new Cookies().get("title"),
            `NoTitle${config.base.aftertitle}`
          ).replace(config.base.aftertitle, "")}
        </div>
        <div className="right">
          <ToolbarButton
            onClick={() => {
              ons.notification.prompt({
                message: "Like: /samples/start/",
                title: "Jump to source",
                callback: function (data: string) {
                  window.location.search = data;
                },
              });
            }}
          >
            <Icon icon="md-search" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  public drawerToolbar() {
    return (
      <Toolbar>
        <div className="center">
          {typeCheck(
            new Cookies().get("title"),
            `NoTitle${config.base.aftertitle}`
          ).replace(config.base.aftertitle, "")}
        </div>
      </Toolbar>
    );
  }

  public render() {
    // iOS devices defaultly not allowed
    if (isIE) return <div>{string.isIE}</div>;
    if (isIOS || isMobileSafari || isSafari) return <div>{string.isIOS}</div>;
    return (
      <Splitter>
        <SplitterSide
          style={{
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          side="left"
          width={config.options.drawer.width}
          collapse={config.options.drawer.collapse}
          swipeable={config.options.drawer.swipeable}
          isOpen={this.state.isDrawerOpen}
          onClose={this.drawerHide.bind(this)}
          onOpen={this.drawerShow.bind(this)}
        >
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
              <ListItem
                onClick={() => {
                  window.open(
                    "https://github.com/DerGoogler/dgm-cms/blob/master/CHANGELOG.md"
                  );
                }}
                modifier="chevron"
                tappable
              >
                {string.view_changelog}
              </ListItem>
            </List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <MarkdownContent data={this.state.data} />
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}

export default hot(App);
