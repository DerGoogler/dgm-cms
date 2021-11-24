import { hot } from "react-hot-loader/root";
import Center from "../components/Center";
import Comments from "../components/Comments";
import DiscordWidget from "../components/DiscordWidget";
import Font from "../components/Font";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import ViewOnlyMobile from "../components/ViewOnlyMobile";

const overrideFooter = {
  overrides: {
    font: {
      component: Font,
    },
    center: {
      component: Center,
    },
    DiscordWidget: {
      component: DiscordWidget,
    },
    Comments: {
      component: Comments,
    },
    ViewOnlyMobile: {
      component: ViewOnlyMobile,
    },
    ViewOnlyDesktop: {
      component: ViewOnlyDesktop,
    },
  },
};

export default hot(overrideFooter);
