import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePaths } from '@/shared/const/routerConst';

interface DropDownAvatarProps {
    className?: string;
}

export const DropDownAvatar = memo((props: DropDownAvatarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvalible = isAdmin || isManager;
    if (authData) {
        return (
            <Dropdown
                className={className}
                direction="bottomLeft"
                items={[
                    ...(isAdminPanelAvalible ? [{
                        content: t('Admin'),
                        href: RoutePaths.admin_panel,
                    }] : []),
                    {
                        content: t('translation:Выйти'),
                        onClick: onLogout,
                    },
                    {
                        content: t('Профиль'),
                        href: RoutePaths.profile + authData.id,
                    },
                ]}
                trigger={<Avatar src={authData.avatar} alt="выйти" size={30} />}
            />
        );
    }
    return null;
});
