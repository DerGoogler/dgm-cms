import { hot } from "react-hot-loader/root";
import Center from "../components/HTML/Center";
import Comments from "../components/Comments";
import DiscordWidget from "../components/DiscordWidget";
import Font from "../components/HTML/Font";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import ViewOnlyMobile from "../components/ViewOnlyMobile";
import MarkdownBody from "../misc/MarkdownBody";
import DGMarkdownFooter from "./../components/Markdown/Footer";

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
    MarkdownBody: {
      component: MarkdownBody,
    },
    CompileMarkdown: {
      component: DGMarkdownFooter,
    },
  },
};

export default hot(overrideFooter);
