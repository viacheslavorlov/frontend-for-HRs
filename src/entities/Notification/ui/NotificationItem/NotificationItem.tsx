import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardVariant } from '@/shared/ui/Card';

import { Text } from '@/shared/ui/Text';
import { NotificationSchema } from '../../model/type/NotificationShema';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card variant={CardVariant.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
