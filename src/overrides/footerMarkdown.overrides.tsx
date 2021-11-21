import Comments from "../components/Comments";
import DiscordWidget from "../components/DiscordWidget";

export const overrideFooter = {
  overrides: {
    DiscordWidget: {
      component: DiscordWidget,
    },
    Comments: {
      component: Comments,
    },
  },
};
