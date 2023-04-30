import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePaths } from 'shared/config/routeConfig/routes';
import HomeIcon from 'wigets/Sidebar/assets/home.svg';
import AboutIcon from 'wigets/Sidebar/assets/about-icon.svg';
import ProfileIcon from 'wigets/Sidebar/assets/Profile.svg';
import Article from 'wigets/Sidebar/assets/Articles.svg';
import { SidebarItemType } from 'wigets/Sidebar/model/types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePaths.profile + userData.id,
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
            );
        }
        return sidebarItemsList;
    },
);
