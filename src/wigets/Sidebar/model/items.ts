import React from 'react';
import { RoutePaths } from 'app/router/routeConfig/routes';
import AboutIcon from '../assets/about-icon.svg';
import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/Profile.svg';

export interface SidebarItemType {
     path: string;
     text: string;
     Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
    },
];
