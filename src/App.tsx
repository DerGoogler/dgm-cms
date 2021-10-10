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
import { isIE, isIOS, isSafari, isMobileSafari } from "react-device-detect";
import * as ons from "onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import { getUrlParam } from "./misc/others/tools";
import axios from "axios";
import config from "./config";
import MarkdownContent from "./misc/others/MarkdownContent";
import { AppStates } from "./interface";
import string from "./misc/others/strings";

const cookies = new Cookies();

class App extends React.Component<{}, AppStates> {
  state = {
    isDrawerOpen: config.options.drawer.isDrawerOpen,
    data: "",
  };

  componentDidMount() {
    if (window.location.search === "") {
      // If no search parameters
      axios
        .get(config.base.slug + config.base.defaultPage + config.base.file)
        .then((res) => {
          const data = res.data;
          this.setState({ data: data });
        });
    } else {
      axios
        .get(config.base.slug + getUrlParam("") + config.base.file)
        .then((res) => {
          const data = res.data;
          this.setState({ data: data });
        });
    }
  }

  drawerHide() {
    this.setState({ isDrawerOpen: false });
  }

  drawerShow() {
    this.setState({ isDrawerOpen: true });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.drawerShow}>
            <Icon icon="ion-ios-menu, material:md-menu" />
          </ToolbarButton>
        </div>
        <div className="center">
          {cookies.get("title").replace(config.base.aftertitle, "")}
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

  drawerToolbar() {
    return (
      <Toolbar>
        <div className="center">
          {cookies.get("title").replace(config.base.aftertitle, "")}
        </div>
      </Toolbar>
    );
  }

  render() {
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
                  if (window.location.search === "") {
                    window.open(
                      `https://github.com/${config.base.github.gHusername}/${
                        config.base.github.IoPage
                      }/blob/${
                        config.base.github.branch
                      }/${config.base.slug.replace("/", "")}/${
                        config.base.defaultPage + config.base.file
                      }`
                    );
                  } else {
                  }
                  window.open(
                    `https://github.com/${config.base.github.gHusername}/${
                      config.base.github.IoPage
                    }/blob/${
                      config.base.github.branch
                    }/${config.base.slug.replace(/\//g, "")}/${
                      getUrlParam("") + config.base.file
                    }`
                  );
                }}
                modifier="chevron"
                tappable
              >
                {string.improve_page}
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
