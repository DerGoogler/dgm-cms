import { Alert, Carousel } from "react-bootstrap";
import NewsColorCard from "../components/NewsColorCard";
import StyleLoader from "../components/StyleLoader";

export const overrideHeader = {
  overrides: {
    // Page options
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
  },
};
