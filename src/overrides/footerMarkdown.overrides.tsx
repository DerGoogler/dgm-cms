import { List, ListHeader, Switch } from "react-onsenui";
import DiscordWidget from "../components/DiscordWidget";
import ListItem from "../components/ListItem";

export const overrideFooter = {
  overrides: {
    DiscordWidget: {
      component: DiscordWidget,
    },
  },
};
