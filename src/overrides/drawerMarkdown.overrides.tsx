import { List, ListHeader, Switch } from "react-onsenui";
import DiscordWidget from "../components/DiscordWidget";
import ListItem from "../components/ListView";
import RandomDog from "../components/RandomDog";
import ViewOnlyDesktop from "../components/ViewOnlyDesktop";
import ViewOnlyMobile from "../components/ViewOnlyMobile";

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
    RandomDog: {
      component: RandomDog,
    },
    ViewOnlyMobile: {
      component: ViewOnlyMobile,
    },
    ViewOnlyDesktop: {
      component: ViewOnlyDesktop,
    },
  },
};
