import Options from "../components/Options";
import Header from "../components/Header";
import Cooldown from "../components/Cooldown";
import XHR from "../components/XHR";
import OnsAlert from "../components/Alert";
import Video from "../components/Video";
import Audio from "../components/Audio";
import Frame from "../components/Frame";
import A from "../components/A";
import ProjectCard from "../components/ProjectCard";
import Code from "../components/Code";
import Download from "../components/Download";
import Click from "../components/OnClick";
import Translate from "../components/Translate";
import FakeTweet from "../components/FakeTweet";
import { Icon, Card, Col, Row } from "react-onsenui";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import DiscordWidget from "../components/DiscordWidget";
import NewsColorCard from "../components/NewsColorCard";

export const override = {
  overrides: {
    // HTML dom components
    video: {
      component: Video,
    },
    audio: {
      component: Audio,
    },
    a: {
      component: A,
    },
    // Custom components
    Options: {
      component: Options,
    },
    Card: {
      component: Card,
    },
    ProjectCard: {
      component: ProjectCard,
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
    Row: {
      component: Row,
    },
    Col: {
      component: Col,
    },
    DiscordWidget: {
      component: DiscordWidget,
    },
    NewsColorCard: {
      component: NewsColorCard,
    },
  },
};
