import { Icon, Card, Button, List, ListItem, ListHeader } from "react-onsenui";
import { BrowserView, MobileView } from "react-device-detect";
import Options from "./tools/Options";
import HeadImg from "./tools/HeadImg";
import Cooldown from "./tools/Cooldown";
import XHR from "./tools/XHR";
import OnsAlert from "./tools/Alert";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import Repos from "./tools/github/Repos";
import Script from "./tools/Script";
import Issues from "./tools/github/Issues";

export const override = {
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
    Icon: {
      component: Icon,
    },
    XHR: {
      component: XHR,
    },
    Badge: {
      component: Badge,
    },
    Alert: {
      component: OnsAlert,
    },
    BSAlert: {
      component: Alert,
    },
    Repos: {
      component: Repos,
    },
    Issues: {
      component: Issues,
    },
    Script: {
      component: Script,
    },
  },
};
