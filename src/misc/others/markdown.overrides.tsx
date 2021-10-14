import Options from "../../components/Options";
import Header from "../../components/Header";
import Cooldown from "../../components/Cooldown";
import XHR from "../../components/XHR";
import OnsAlert from "../../components/Alert";
import Repos from "../../components/github/Repos";
import Issues from "../../components/github/Issues";
import Video from "../../components/Video";
import Audio from "../../components/Audio";
import Frame from "../../components/Frame";
import Code from "../../components/Code";
import Download from "../../components/Download";
import Click from "../../components/OnClick";
import Translate from "../../components/Translate";
import FakeTweet from "../../components/FakeTweet";
import { Icon, Card, List, ListItem, ListHeader } from "react-onsenui";
import { BrowserView, MobileView } from "react-device-detect";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

export const override = {
  overrides: {
    // HTML dom components
    video: {
      component: Video,
    },
    audio: {
      component: Audio,
    },
    // Custom components
    Options: {
      component: Options,
    },
    Card: {
      component: Card,
    },
    Header: {
      component: Header,
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
    NewsAlert: {
      component: Alert,
    },
    Repos: {
      component: Repos,
    },
    Issues: {
      component: Issues,
    },
    Frame: {
      component: Frame,
    },
    Code: {
      component: Code,
    },
    Download: {
      component: Download,
    },
    Click: {
      component: Click,
    },
    Translate: {
      component: Translate,
    },
    FakeTweet: {
      component: FakeTweet,
    },
  },
};
