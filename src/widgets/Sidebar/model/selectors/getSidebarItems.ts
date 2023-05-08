import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '@/widgets/Sidebar/assets/home.svg';
import AboutIcon from '@/widgets/Sidebar/assets/about-icon.svg';
import ProfileIcon from '@/widgets/Sidebar/assets/Profile.svg';
import Article from '@/widgets/Sidebar/assets/Articles.svg';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import { RoutePaths } from '@/shared/config/routeConfig/routes';
import { getUserAuthData } from '@/entities/User';

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
