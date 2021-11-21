import React, { CSSProperties } from "react";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface MarkdownContentInterface {
  data: any;
  headerData?: any;
  footerData?: any;
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
