import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '../../assets/home.svg';
import AboutIcon from '../../assets/about-icon.svg';
import ProfileIcon from '../../assets/Profile.svg';
import Article from '../../assets/Articles.svg';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/const/routerConst';

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
