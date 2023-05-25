import {
    memo, ReactNode, useCallback, useContext, useEffect,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { AnimationContext, AnimationProvider, useAnimationLybrarys } from '../../lib/DynamicLoaders';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const {
        className, onClose, isOpen, children,
    } = props;
    const { Spring, Gesture } = useContext(AnimationContext);
    const { a, config, useSpring } = Spring!;
    const { useDrag } = Gesture!;

    const [{ y }, api] = useSpring(() => ({ y: height }));

    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) {
                cancel();
            }
            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const display = y.to((py: number) => (py < height ? 'block' : 'none'));

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer, api]);

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px`, y }}
                    {...bind()}
                >
                    <div className={cls.anker} />
                    {children}
                </a.div>
            </div>
        </Portal>
    );
});

const DrawerWrapper = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLybrarys();
    if (!isLoaded) {
        return null;
    }
    return (
        <DrawerContent {...props} />
    );
});

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerWrapper {...props} />
    </AnimationProvider>
);
