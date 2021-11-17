import { List, ListHeader, Switch } from "react-onsenui";
import DiscordWidget from "../components/DiscordWidget";
import ListItem from "../components/ListItem";

export const override = {
  overrides: {
    List: {
      component: List,
    },
    ListHeader: {
      component: ListHeader,
    },
    ListItem: {
      component: ListItem,
    },
    Switch: {
      component: Switch,
    },
    DiscordWidget: {
      component: DiscordWidget,
    },
  },
};
