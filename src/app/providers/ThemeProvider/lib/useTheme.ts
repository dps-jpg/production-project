import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

type UseThemeResult = {
	theme: ThemeEnum;
	toggleTheme: () => void;
};

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
        console.log(theme, newTheme);
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
