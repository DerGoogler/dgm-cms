import Options from "../../components/Options";
import Faq from "../../components/Faq";
import HeadImg from "../../components/HeadImg";
import Cooldown from "../../components/Cooldown";
import XHR from "../../components/XHR";
import OnsAlert from "../../components/Alert";
import Repos from "../../components/github/Repos";
import Issues from "../../components/github/Issues";
import Video from "../../components/Video";
import Audio from "../../components/Audio";
import { Icon, Card, List, ListItem, ListHeader } from "react-onsenui";
import { BrowserView, MobileView } from "react-device-detect";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

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
    Video: {
      component: Video,
    },
    Audio: {
      component: Audio,
    },
    FAQ: {
      component: Faq,
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
