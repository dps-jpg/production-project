import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkThemeEnum {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkThemeEnum;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkThemeEnum.PRIMARY,
    ...otherProps
}) => (
    <Link
        className={classNames(cls.AppLink, {}, ['----', className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
);
