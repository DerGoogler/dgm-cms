import { Alert, Carousel } from "react-bootstrap";
import { hot } from "react-hot-loader/root";
import Center from "../components/Center";
import Font from "../components/Font";
import NewsColorCard from "../components/NewsColorCard";
import StyleLoader from "../components/StyleLoader";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import ViewOnlyMobile from "../components/ViewOnlyMobile";

const overrideHeader = {
  overrides: {
    // Page options
    font: {
      component: Font,
    },
    center: {
      component: Center,
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
  },
};

export default hot(overrideHeader);
