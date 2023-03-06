import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/theme-dark.svg';
import LightIcon from 'shared/assets/theme-light.svg';
import { Button, ThemeButtonEnum } from 'shared/ui/Button/Button';

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButtonEnum.CLEAR}
        >
            {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
