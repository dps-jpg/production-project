import { createContext } from "react";

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextTypes {
    theme?: ThemeEnum;
    setTheme?: (theme: ThemeEnum) => void;
}


export const ThemeContext = createContext<ThemeContextTypes>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';