import React, { type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkThemeEnum.SECONDARY} className={cls.mainLink} to="/">main page</AppLink>
            <AppLink theme={AppLinkThemeEnum.SECONDARY} to="/about">about page</AppLink>
        </div>
    </div>
);
