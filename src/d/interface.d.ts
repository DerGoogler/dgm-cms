import React, { CSSProperties } from "react";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface MarkdownContentInterface {
  data: any;
  headerData?: any;
  footerData?: any;
}

declare type File = `.${string}`;
declare type Slug = `/${string}/`;
declare type DefaultFavicon = `https://${string}` | `/${string}`;
declare type Platform = "ios" | "android";
declare type IoPage = `${string}.github.io`;

// Config Interface
export interface ConfigInterface {
  base: Base_ConfigInterface;
  options: Options_ConfigInterface;
}

export interface Base_ConfigInterface {
  slug: Slug;
  defaultPage: string;
  defaultDrawerPage: string;
  defaultHeaderFile: string;
  defaultFooterFile: string;
  configPath: string;
  file: File;
  afterTitle: string;
  domain: string;
  defaultFavicon: DefaultFavicon;
  platform: Platform;
  github: Github_ConfigInterface;
}

export interface Github_ConfigInterface {
  IoPage: IoPage;
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
