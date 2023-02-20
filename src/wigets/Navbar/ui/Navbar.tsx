import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = () => {
        setIsAuthModal((prevState) => !prevState);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </div>
    );
};
