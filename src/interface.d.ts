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

// Interface for <App/> State
export interface AppStates {
    isDrawerOpen: boolean;
    data: string;
}