import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { MouseEvent, ReactNode } from 'react';
import { useModal } from '../../lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { theme } = useTheme();
    const { children, className, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const contentClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, 'app_modal', theme])}>
                <Overlay onClick={close} />
                <div className={classNames(cls.content, {})} onClick={contentClickHandler}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
