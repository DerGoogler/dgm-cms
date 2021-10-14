import React, { CSSProperties } from "react";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface MarkdownContentInterface {
  data: any;
}

export interface SlideInterface {
  data: any;
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
  css: CSSProperties;
  src: string;
}

export interface FakeTweetInterface {
  avatar: string;
  nickname: string;
  name: string;
  verified: boolean;
  text: string;
  app: string;
  date: string;
  retweets: number;
  likes: number;
}

export interface TranslateInterface {
  de: string;
  en: string;
}

export interface OptionsInterface {
  title: string | any;
  // platform: string; // Moved to the config.ts - Platform can seted there
  cardView: string;
  description: string;
  canonical: string;
  keywords: string;
  favicon: string;
  rainType: string;
  rainTypeChar: string;
}

export interface XHRInterface {
  src: string;
}

export interface AlertInterface {
  title: string;
  message: string | any;
  cancelable: boolean;
}

export interface ModalInterface {
  title: string;
  message: string;
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
  controls: boolean;
  noSupportText: string;
}

export interface AudioInterface {
  src: string;
  type: string;
  controls: boolean;
  noSupportText: string;
}

export interface GitHubInterface {
  user: string;
  repo: string;
}

// Interface for <App/> State
export interface AppStates {
  isDrawerOpen: boolean;
  data: any;
}
