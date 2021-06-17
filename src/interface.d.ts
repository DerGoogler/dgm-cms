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
}

// Interface for <App/> State
export interface AppStates {
    isDrawerOpen: boolean;
    data: string;
}