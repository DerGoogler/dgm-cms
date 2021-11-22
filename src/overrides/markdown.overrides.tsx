import { hot } from "react-hot-loader/root";
import Options from "../components/Options";
import Header from "../components/Header";
import Cooldown from "../components/Cooldown";
import XHR from "../components/XHR";
import OnsAlert from "../components/Alert";
import Video from "../components/Video";
import Audio from "../components/Audio";
import A from "../components/A";
import ProjectCard from "../components/ProjectCard";
import Download from "../components/Download";
import Click from "../components/OnClick";
import Translate from "../components/Translate";
import FakeTweet from "../components/FakeTweet";
import { Icon, Card, Col, Row } from "react-onsenui";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import DiscordWidget from "../components/DiscordWidget";
import NewsColorCard from "../components/NewsColorCard";
import Aropdown from "../components/Aropdown";
import Font from "../components/Font";
import Center from "../components/Center";
import Frame from "../components/Frame";
import RandomDog from "../components/RandomDog";

const override = {
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
    font: {
      component: Font,
    },
    center: {
      component: Center,
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
    Frame: {
      component: Frame,
    },
    Header: {
      component: Header,
    },
    Cooldown: {
      component: Cooldown,
    },
    RandomDog: {
      component: RandomDog,
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
    Aropdown: {
      component: Aropdown,
    },
  },
};

export default hot(override);
