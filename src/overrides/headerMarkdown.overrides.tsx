import { Alert, Carousel } from "react-bootstrap";
import { List, ListHeader, Switch } from "react-onsenui";
import ListItem from "../components/ListItem";
import NewsColorCard from "../components/NewsColorCard";
import SourceFileLoader from "../components/SourceFileLoader";

export const overrideHeader = {
  overrides: {
    // Page options
    SourceFileLoader: {
      component: SourceFileLoader,
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
  },
};
