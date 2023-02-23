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
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis
                    eos id laboriosam magni
                    maxime nobis quam quo. Adipisci doloribus illo ipsa laudantium molestiae officia
                    qui quod repudiandae sapiente, velit!
                </Modal>
            </div>
        </div>
    );
};
