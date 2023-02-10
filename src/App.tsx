import React, { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>main page</Link>
            <Link to={'/about'}>about page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
