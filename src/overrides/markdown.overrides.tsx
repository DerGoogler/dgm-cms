import { hot } from "react-hot-loader/root";
import Options from "../components/Options";
import Cooldown from "../components/Cooldown";
import XHR from "../components/XHR";
import OnsAlert from "../components/Alert";
import Video from "../components/HTML/Video";
import Audio from "../components/Audio";
import A from "../components/HTML/A";
import ProjectCard from "../components/ProjectCard";
import Click from "../components/OnClick";
import Translate from "../components/Translate";
import FakeTweet from "../components/FakeTweet";
import { Icon, Card, Col, Row } from "react-onsenui";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import DiscordWidget from "../components/DiscordWidget";
import NewsColorCard from "../components/NewsColorCard";
import Aropdown from "../components/Aropdown";
import Font from "../components/HTML/Font";
import Center from "../components/HTML/Center";
import IFrame from "../components/IFrame";
import RandomDog from "../components/RandomDog";
import ViewOnlyMobile from "../components/ViewOnlyMobile";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import Img from "../components/HTML/Img";
import BaseFont from "../components/HTML/BaseFont";
import DGMarkdownBody from "./../components/Markdown/Body";
import Script from "../components/HTML/Script";

const override = {
  overrides: {
    // HTML dom components
    video: {
      component: Video,
    },
    audio: {
      component: Audio,
    },
    script: {
      component: Script,
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
    img: {
      component: Img,
    },
    basefont: {
      component: BaseFont,
    },
    // Custom components
    Options: {
      component: Options,
    },
    Card: {
      component: Card,
    },
    ViewOnlyMobile: {
      component: ViewOnlyMobile,
    },
    ViewOnlyDesktop: {
      component: ViewOnlyDesktop,
    },
    ProjectCard: {
      component: ProjectCard,
    },
    Frame: {
      component: IFrame,
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
    CompileMarkdown: {
      component: DGMarkdownBody,
    },
  },
};

export default hot(override);
