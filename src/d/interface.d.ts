import React, { CSSProperties, MouseEventHandler } from "react";

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

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface MarkdownContentInterface {
  data: any;
}

export interface SlideInterface {
  data: any;
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

export interface ProjectCardInterface {
  title: string | undefined;
  href?: string | undefined;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget | undefined;
  buttonText?: string | undefined;
}

export interface CooldownInterface {
  date: string;
  expiredText: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  click: string;
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
  title: string | any;
  cardView?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  favicon?: string;
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

// Interface for <App/> State
export interface AppStates {
  isDrawerOpen: boolean;
  data: any;
  drawerData: any;
}
