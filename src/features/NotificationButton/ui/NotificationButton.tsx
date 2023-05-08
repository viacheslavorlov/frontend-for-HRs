import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import Bell from '@/shared/assets/bell.svg';
import { NotificationList } from '@/entities/Notification';
import { Popup } from '@/shared/ui/Popups/ui/Popup/Popup';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { AnimationProvider } from '@/shared/lib/DynamicLoaders/AnimationProvider/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const [isOpened, setIsOpened] = useState(false);

    const openDrawer = useCallback(() => {
        setIsOpened(true);
    }, []);
    const closeDrawer = useCallback(() => {
        setIsOpened(false);
    }, []);

    const trigger = (
        <Button onClick={openDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={Bell} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popup
                    direction="bottomLeft"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notificationsBrowser} />
                </Popup>
            </BrowserView>

            <MobileView>
                {trigger}
                <Drawer isOpen={isOpened} onClose={closeDrawer}>
                    <NotificationList className={cls.notificationsMobile} />
                </Drawer>
            </MobileView>
        </div>

    );
});
