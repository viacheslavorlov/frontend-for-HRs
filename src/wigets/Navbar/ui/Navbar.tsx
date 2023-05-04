import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routes';
import cls from 'wigets/Navbar/ui/Navbar.module.scss';
import { HStack } from 'shared/ui/Stack';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popup } from 'shared/ui/Popups/ui/Popup/Popup';
import Bell from '../../../shared/assets/bell.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvalible = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack justify="between" max>
                    <HStack justify="start">
                        <Text
                            className={cls.appName}
                            title={t('Блог')}
                            variant={TextVariant.INVERTED}
                        />
                        <AppLink
                            to={RoutePaths.article_create}
                            theme={AppLInkTheme.SECONDARY}
                            className={cls.createLink}
                        >
                            {t('Создать статью')}
                        </AppLink>
                    </HStack>
                    <HStack gap="16" className={cls.actions}>
                        <Popup
                            direction="bottomLeft"
                            trigger={
                                (
                                    <Button theme={ButtonTheme.CLEAR}>
                                        <Icon className={cls.bell} Svg={Bell} inverted />
                                    </Button>
                                )
                            }
                        >
                            {
                            /* eslint-disable-next-line i18next/no-literal-string */
                            }
                            asdfasdfasd
                        </Popup>

                        <Dropdown
                            direction="bottomLeft"
                            className={cls.logout}
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
                    </HStack>

                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify="end" max className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </HStack>
        </header>
    );
});
