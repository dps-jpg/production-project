import { createContext } from 'react';

export enum ThemeEnum {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ThemeContextTypes = {
	theme: ThemeEnum;
	setTheme: (theme: ThemeEnum) => void;
};

export const ThemeContext = createContext<ThemeContextTypes>({
    theme: ThemeEnum.LIGHT, setTheme: () => null,
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
