import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextVariant } from '@/shared/ui/Text';
import { AppLink, AppLInkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { DropDownAvatar } from '@/features/DropDownAvatar';
import { RoutePaths } from '@/shared/const/routerConst';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
                        <NotificationButton />
                        <DropDownAvatar />
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
