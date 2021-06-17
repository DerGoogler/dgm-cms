import * as React from "react";
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Card,
  Button,
  List,
  ListItem,
  ListHeader,
  Splitter,
  SplitterContent,
  SplitterSide
} from "react-onsenui";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIE,
  isIOS,
  isSafari,
  isMobileSafari
} from "react-device-detect";
import * as ons from 'onsenui';
import { hot } from "react-hot-loader/root";
import Cookies from 'universal-cookie';
import Markdown from 'markdown-to-jsx';
import { getUrlParam } from './misc/tools';
import axios from 'axios';
import Options from './tools/Options';
import HeadImg from './tools/HeadImg';
import Cooldown from './tools/Cooldown';
import config from './config';
import { AppStates } from './interface';

const cookies = new Cookies();


class App extends React.Component<{}, AppStates> {
  state = {
    isDrawerOpen: config.options.page.isDrawerOpen,
    data: ''
  }

  componentDidMount() {
    if (window.location.search === '') {
      // If no search parameters
      axios
        .get(config.base.slug + 'home' + config.base.file)
        .then(res => {
          const data = res.data;
          console.log(data);
          this.setState({ data: data });
        });
    } else {
      axios
        .get(config.base.slug + getUrlParam('') + config.base.file)
        .then(res => {
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
        <div className='left'>
          <ToolbarButton onClick={this.drawerShow}>
            <Icon icon='ion-ios-menu, material:md-menu' />
          </ToolbarButton>
        </div>
        <div id="toolbar-title" className='center'>{config.options.page.pageName}</div>
      </Toolbar>
    );
  }

  render() {
    // iOS devices defaultly not allowed
    if (isIE) return (<div> IE is not supported. Download Chrome/Opera/Firefox </div>);
    if (isIOS || isMobileSafari || isSafari) return (<div> iOS/iPhone/Safari are not allowed to view this </div>);
    return (
      <Splitter>
        <SplitterSide
          style={{
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }}
          side='left'
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isDrawerOpen}
          onClose={this.drawerHide.bind(this)}
          onOpen={this.drawerShow.bind(this)}
        >
          <Page>
            <List>
              <ListHeader>Info</ListHeader>
              <ListItem onClick={() => {
                ons.notification.confirm({
                  message: 'This Web App saves your entered Language and Platform.',
                  title: 'About Cookies',
                  buttonLabels: ['Ok'],
                  animation: 'default',
                  primaryButtonIndex: 0,
                  cancelable: false,
                })
              }} modifier="chevron" tappable>About Cookies</ListItem>
            </List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <Card>
              <article className="markdown-body">
                <Markdown options={{
                  overrides: {
                    Options: {
                      component: Options,
                    },
                    Card: {
                      component: Card,
                    },
                    Button: {
                      component: Button,
                    },
                    List: {
                      component: List,
                    },
                    ListItem: {
                      component: ListItem,
                    },
                    ListHeader: {
                      component: ListHeader,
                    },
                    HeadImg: {
                      component: HeadImg,
                    },
                    MobileView: {
                      component: MobileView,
                    },
                    BrowserView: {
                      component: BrowserView,
                    },
                    Cooldown: {
                      component: Cooldown,
                    },
                  },
                }}>
                  {this.state.data}
                </Markdown>
              </article>
            </Card>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}


export default hot(App);