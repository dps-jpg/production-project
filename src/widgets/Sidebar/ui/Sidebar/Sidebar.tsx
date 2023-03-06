import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ThemeButtonEnum } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button theme={ThemeButtonEnum.CLEAR} onClick={handleToggle}>toggle</Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
