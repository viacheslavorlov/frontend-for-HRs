import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '../../assets/home.svg';
import AboutIcon from '../../assets/about-icon.svg';
import ProfileIcon from '../../assets/Profile.svg';
import Article from '../../assets/Articles.svg';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/routerConst';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: HomeIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О нас!',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: Article,
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
