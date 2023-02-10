import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextTypes, ThemeEnum} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

    const defaultProps = useMemo(() => {
        return { theme, setTheme: setTheme }
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
