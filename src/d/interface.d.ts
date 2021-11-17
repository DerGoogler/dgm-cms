import React, { CSSProperties, MouseEventHandler } from "react";
import string from "../misc/strings";

type HTMLAttributeReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

type HTMLAttributeAnchorTarget =
  | "_self"
  | "_blank"
  | "_parent"
  | "_top"
  | (string & {});

type OnsenUIPlatform =
  | "android"
  | "ios"
  | "webview"
  | "windows"
  | (string & {});

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface CodeEmbedInterface {
  target: string;
  fromLine: string;
  showBorder: string;
  showLineNumbers: string;
  showFileMeta: string;
  showCopy: string;
}

export interface MarkdownContentInterface {
  data: any;
  headerData: any;
  footerData: any;
}

export interface AInterface {
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  ping?: string | undefined;
  rel?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  type?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  children: React.ReactNode | undefined;
}

export interface ListItemInterface {
  modifier?: string | undefined;
  tappable?: boolean | undefined;
  tapBackgroundColor?: string | undefined;
  lockOnDrag?: boolean | undefined;
  expandable?: boolean | undefined;
  expanded?: boolean | undefined;
  href?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
}

export interface DiscordWidgetInterface {
  token: string;
  width: string;
  height: string;
  theme: string;
}

export interface ProjectCardInterface {
  title: string | undefined;
  href?: string | undefined;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget | undefined;
  buttonText?: string | undefined;
  language?: string;
}

export interface NewsColorCardInterface {
  children: React.ReactNode;
  title: string;
  text: string;
  headerTitle: string;
  variant: string;
}

export interface CooldownInterface {
  date: string | number | Date;
  expiredText?: string;
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

export interface SoruceFileLoaderInterface {
  src: string;
  type: "js" | "css" | string;
}

export interface DownloadInterface {
  filename: string;
  content: string | any;
  callback?: Function;
}

export interface OnClickInterface {
  click: string;
}

export interface HeaderInterface {
  src: string;
  head: string;
  text: string;
}

export interface FrameInterface {
  src: string;
}

export interface FakeTweetInterface {
  avatar?: string;
  nickname?: string;
  name?: string;
  verified?: boolean;
  text?: string;
  app?: string;
  date?: string;
  retweets?: number;
  likes?: number;
}

export interface TranslateInterface {
  de: string;
  en: string;
}

export interface OptionsInterface {
  title: string | undefined;
  description?: string | undefined;
  canonical?: string | undefined;
  keywords?: string | undefined;
  favicon?: string | undefined;
  children: React.ReactNode;
}

export interface XHRInterface {
  src: string;
}

export interface AlertInterface {
  title: string;
  message: string | any;
  cancelable?: boolean;
}

export interface SocialsInterface {
  data: any;
  // Social props
  platform: string;
  username: string;
  open: {
    disabled: boolean;
    link: string;
  };
}

export interface VideoInterface {
  src: string;
  type: string;
  controls?: boolean;
  poster?: string;
  noSupportText?: string;
  style?: React.CSSProperties | string | undefined;
}

export interface AudioInterface {
  src: string;
  type: string;
  controls?: boolean;
  noSupportText?: string;
}

export interface GitHubInterface {
  user: string;
  repo: string;
}

// Config Interface
export interface ConfigInterface {
  base: Base_ConfigInterface;
  options: Options_ConfigInterface;
}

export interface Base_ConfigInterface {
  slug: string;
  defaultPage: string;
  defaultDrawerPage: string;
  defaultHeaderFile: string;
  defaultFooterFile: string;
  configPath: string;
  file: string;
  afterTitle: string;
  domain: string;
  defaultFavicon: string;
  platform: string;
  github: Github_ConfigInterface;
}

export interface Github_ConfigInterface {
  IoPage: string;
  gHusername: string;
  branch: string;
}

export interface Options_ConfigInterface {
  drawer: Drawer_ConfigInterface;
}

export interface Drawer_ConfigInterface {
  isDrawerOpen: boolean;
  width: any | number;
  collapse: boolean;
  swipeable: boolean;
}
