import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import { useDrag } from '@use-gesture/react';
import { useTheme } from 'app/providers/TemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, onClose, isOpen, children, lazy,
    } = props;

    // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    //
    // // Set the drag hook and define component movement based on gesture data
    // const bind = useDrag(({ down, movement: [mx, my] }) => {
    //     api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
    // });

    const { isMounted, isClosing, close } = useModal({
        animationDelay: 300, isOpen, onClose,
    });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
