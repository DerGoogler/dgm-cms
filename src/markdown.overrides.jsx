import { Icon, Card, List, ListItem, ListHeader } from "react-onsenui";
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
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";

export const override = {
  overrides: {
    Options: {
      component: Options,
    },
    Card: {
      component: Card,
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
    Carousel: {
      component: Carousel,
    },
    CarouselItem: {
      component: Carousel.Item,
    },
    CarouselCaption: {
      component: Carousel.Caption,
    },
    Dropdown: {
      component: Dropdown,
    },
    DropdownToggle: {
      component: Dropdown.Toggle,
    },
    DropdownMenu: {
      component: Dropdown.Menu,
    },
    DropdownItem: {
      component: Dropdown.Item,
    },
  },
};
