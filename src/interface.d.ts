export interface MarkdownContentInterface {
    data: any;
}

export interface CooldownInterface {
    date: string;
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

// Interface for <App/> State
export interface AppStates {
    isDrawerOpen: boolean;
    data: string;
    // Repo infos
    stars: number;
    watchers: number;
    mainlanguege: string;
    issues: number;
    forks: number;
    last_repo_update: string;
}
