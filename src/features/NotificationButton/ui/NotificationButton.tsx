import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import Bell from 'shared/assets/bell.svg';
import { NotificationList } from 'entities/Notification';
import { Popup } from 'shared/ui/Popups/ui/Popup/Popup';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    return (
        <Popup
            direction="bottomLeft"
            trigger={
                (
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={Bell} inverted />
                    </Button>
                )
            }
        >
            <NotificationList className={cls.notifications} />
        </Popup>
    );
});
