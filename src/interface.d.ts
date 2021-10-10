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
}

export interface HeadImgInterface {
  src: string;
  head: string;
  text: string;
}

export interface OptionsInterface {
  title: string;
  platform: string;
  cardView: string;
  description: string;
  canonical: string;
  keywords: string;
  rainType: string;
  rainTypeChar: string;
}

export interface XHRInterface {
  src: string;
}

export interface AlertInterface {
  title: string;
  message: string;
  cancelable: boolean;
}

export interface ModalInterface {
  title: string;
  message: string;
}

export interface FaqInterface {
  data: any;
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
  data: string;
}
