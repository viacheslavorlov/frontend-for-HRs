import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'app/router/routeConfig/routes';
import cls from 'wigets/Navbar/ui/Navbar.module.scss';
import { HStack } from 'shared/ui/Stack';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                    <Dropdown
                        direction="bottomLeft"
                        className={cls.logout}
                        items={[
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
