import React from 'react';
import { RoutePaths } from 'app/router/routeConfig/routes';
import AboutIcon from '../assets/about-icon.svg';
import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/Profile.svg';
import Article from '../assets/Articles.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: RoutePaths.about,
        text: 'О нас!',
        Icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePaths.articles,
        text: 'Статьи',
        Icon: Article,
        authOnly: true,
    },
];
