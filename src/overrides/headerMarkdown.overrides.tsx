import { Alert } from "react-bootstrap";
import { hot } from "react-hot-loader/root";
import Header from "../components/Header";
import Center from "../components/HTML/Center";
import Font from "../components/HTML/Font";
import NewsColorCard from "../components/NewsColorCard";
import Snowflakes from "../components/Snowflakes";
import StyleLoader from "../components/StyleLoader";
import TitleMapper from "../components/TitleMapper";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import ViewOnlyMobile from "../components/ViewOnlyMobile";
import MarkdownBody from "../misc/MarkdownBody";

const overrideHeader = {
  overrides: {
    // Page options
    font: {
      component: Font,
    },
    center: {
      component: Center,
    },
    NewsAlert: {
      component: Alert,
    },
    NewsColorCard: {
      component: NewsColorCard,
    },
    StyleLoader: {
      component: StyleLoader,
    },
    ViewOnlyMobile: {
      component: ViewOnlyMobile,
    },
    ViewOnlyDesktop: {
      component: ViewOnlyDesktop,
    },
    TitleMapper: {
      component: TitleMapper,
    },
    MarkdownBody: {
      component: MarkdownBody,
    },
    Header: {
      component: Header,
    },
    Snowflakes: {
      component: Snowflakes,
    },
  },
};

export default hot(overrideHeader);
