import { isDesktop } from "react-device-detect";
import { ConfigInterface } from "./d/interface";
import { typeIf } from "./misc/tools";

const config: ConfigInterface = {
  base: {
    slug: "/pages/",
    defaultPage: "home",
    defaultDrawerPage: "drawer",
    defaultHeaderFile: "header",
    defaultFooterFile: "footer",
    configPath: "config",
    file: ".dgm",
    afterTitle: " – Der_Googler",
    domain: "dergoogler.com",
    defaultFavicon: "https://avatars.githubusercontent.com/u/54764558?v=4",
    platform: "android",
    github: {
      IoPage: "dergoogler.github.io",
      gHusername: "DerGoogler",
      branch: "master",
    },
  },
  options: {
    drawer: {
      isDrawerOpen: false,
      width: typeIf(isDesktop, 500, 250),
      collapse: true,
      swipeable: true,
    },
  },
};

export default config;
