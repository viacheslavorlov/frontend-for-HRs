import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { DropDownAvatar } from '@/features/DropDownAvatar';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleNew } from '@/shared/const/routerConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextVariant } from '@/shared/ui/Text';
import cls from './Navbar.module.scss';

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
                            size={TextSize.L}
                            fontWeight="bold"
                            className={cls.appName}
                            title={t('Блог')}
                            variant={TextVariant.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleNew()}
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
