import * as React from "react";
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Splitter,
  SplitterContent,
  SplitterSide,
} from "react-onsenui"; // this.props.navigator.pushPage({ component: App });
import { isIE, isIOS, isSafari, isMobileSafari } from "react-device-detect";
import ons from "onsenui";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";
import { getCookie, typeCheck } from "../misc/tools";
import config from "../config";
import MarkdownContent from "../misc/MarkdownContent";
import string from "../misc/strings";
import tools from "../misc/private.tools";
import Drawer from "./Drawer";

class Main extends React.Component<{ navigator: any }> {
  public state = {
    isDrawerOpen: config.options.drawer.isDrawerOpen,
    data: "",
    headerData: "",
    footerData: "",
  };

  public componentDidMount() {
    new tools().getMarkdownData(
      (data: any) => {
        this.setState({ data: data });
      },
      (error: any, link: string) => {
        this.setState({
          data: `The link ${link} has been not found! Error ${error.response.status}`,
        });
      }
    );

    new tools().getHeaderContent((data: any) => {
      this.setState({ headerData: data });
    });

    new tools().getFooterContent((data: any) => {
      this.setState({ footerData: data });
    });
  }

  private drawerHide() {
    this.setState({ isDrawerOpen: false });
  }

  private drawerShow() {
    this.setState({ isDrawerOpen: true });
  }

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.drawerShow}>
            <Icon icon="md-menu" />
          </ToolbarButton>
        </div>
        <div className="center">
          {typeCheck(
            getCookie("title"),
            `NoTitle${config.base.afterTitle}`
          ).replace(config.base.afterTitle, "")}
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
          <Drawer />
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <MarkdownContent
              data={this.state.data}
              headerData={this.state.headerData}
              footerData={this.state.footerData}
            />
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}

export default hot(Main);
