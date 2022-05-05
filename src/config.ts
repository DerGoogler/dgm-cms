import axios from "axios";
import { isDesktop } from "react-device-detect";
import { ConfigInterface } from "./types/interface";
import { typeCheck, typeIf } from "./misc/tools";

// https://github.com/yusanshi/embed-like-gist/blob/master/embed.js#L4-L5
// @ts-ignore
const sourceURL = new URL(document.currentScript.src);
const params = sourceURL.searchParams;

const config: ConfigInterface = {
  base: {
    slug: typeCheck(params.get("slug"), "/pages/"),

    defaultPage: typeCheck(params.get("defaultPage"), "home"),

    defaultDrawerPage: typeCheck(params.get("defaultDrawerPage"), "drawer"),

    defaultHeaderFile: typeCheck(params.get("defaultHeaderPage"), "header"),

    defaultFooterFile: typeCheck(params.get("defaultFooterPage"), "footer"),

    configPath: typeCheck(params.get("configPath"), "config"),

    file: typeCheck(params.get("file"), ".dgm"),

    afterTitle: typeCheck(params.get("afterTitle"), " – Der_Googler"),

    domain: typeCheck(params.get("domain"), "dergoogler.com"),

    defaultFavicon: typeCheck(
      params.get("defaultFavicon"),
      "https://avatars.githubusercontent.com/u/54764558?v=4"
    ),

    platform: typeCheck(params.get("platform"), "android"),

    github: {
      IoPage: typeCheck(params.get("IoPage"), "dergoogler.github.io"),

      gHusername: typeCheck(params.get("gHusername"), "DerGoogler"),

      branch: typeCheck(params.get("branch"), "master"),
    },
  },
  options: {
    drawer: {
      isDrawerOpen: false,
      width: typeIf(isDesktop, 500, 250),
      collapse: typeCheck(params.get("callapse"), true),
      swipeable: typeCheck(params.get("swipeable"), true),
    },
  },
};

export default config;
